import 'antd/dist/antd.css';
import './Posts.css';

import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';


import {useContext, useRef} from 'react';
import {Context} from "../store";
import {updatePosts } from "../store/actions"


const originData = [];
let i = 0;


function Posts(){

    const [state, dispatch] = useContext(Context)
    console.log(state);

    function itemEditHandler(JSONObjekt, ID, {setData}){
        //N2en consolest millist rida ja mis ta iD on muudeti
        console.log(JSONObjekt);
        console.log(ID);
        //const start = Date.now();
        //console.log(start);
        
        //datenow-ga uuendan aega millal postitust viimati n2piti ning taaslaen kogu lehe, et ka kuup2ev tabelis uueneks
        const itemSubmitted={
            id: ID,
            title: JSONObjekt.title,
            text: JSONObjekt.text,
            firstName: JSONObjekt.firstName,
            lastName: JSONObjekt.lastName,
            createdAt: JSONObjekt.createdAt,
            __v: 0,
        }
        //console.log(itemSubmitted);
        fetch('http://localhost:8081/api/post/update/' + ID.toString(), {
            method: 'PUT',
            body: JSON.stringify(itemSubmitted),
            headers: {
                'Content-Type':'application/json'
            }
        });
        window.location.reload(false);
    }
    
    function itemDeleteHandler(JSONObjekt, ID, {setData}){
        //N2en consolest millist rida ja mis ta iD on muudeti
        console.log(JSONObjekt);
        console.log(ID);

        fetch('http://localhost:8081/api/post/delete/' + ID.toString(), {
            method: 'DELETE'/*,
            headers: {
                'Content-Type':'application/json'
            }*/
        });
        window.location.reload();
    }

    //state on hook  isloading on muutuja ja setisloading on funktsioon millega muutuja v22rust muudame
    const [isLoading, setIsLoading] = useState(true);
    //const [loadedItems, setIsLoadedItems] = useState([]);

    //useeffekt on selline hook, mis ytleb mis hetkedel ta kordub ja millal ta l6petab korduse
    useEffect(() =>{

        fetch('http://localhost:8081/api/post/').then(res => {
            return res.json();
        }).then( data => {
            //console.log(data);
            const omadatake = [];
            for (i; i < data.length; i++) {
                originData.push({
                  key: data[i]._id,
                  title: data[i].title,
                  text: data[i].text,
                  firstName: data[i].firstName,
                  lastName: data[i].lastName,
                  createdAt: data[i].createdAt,
                });

                omadatake.push({
                    key: data[i]._id,
                    title: data[i].title,
                    text: data[i].text,
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    createdAt: data[i].createdAt,
                });
            }
            //console.log(originData);
            dispatch(updatePosts(data));
            setIsLoading(false);
            
            //setIsLoadedItems(data);
        });
    
    },[isLoading])


    if(isLoading === true){
        return(
        <div>
            Laeb...
        </div>);
    }
    

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
        {editing ? (
            <Form.Item
            name={dataIndex}
            style={{
                margin: 0,
            }}
            rules={[
                {
                required: true,
                message: `Please Input ${title}!`,
                },
            ]}
            >
            {inputNode}
            </Form.Item>
        ) : (
            children
        )}
        </td>
    );
    };
    
    const EditableTable = () => {
        const [form] = Form.useForm();
        const [dataforTable, setData] = useState(originData);
        const [editingKey, setEditingKey] = useState('');
        
        const isEditing = (record) => record.key === editingKey;
        
        const edit = (record) => {
            form.setFieldsValue({
            title: '',
            text: '',
            firstName: '',
            lastName: '',
            createdAt: '',
            ...record,
            });
            setEditingKey(record.key);
        };
        
        const cancel = () => {
            setEditingKey('');
        };
        
        const save = async (key) => {
            try {
            const row = await form.validateFields();
            const newData = [...dataforTable];
            const index = newData.findIndex((item) => key === item.key);
        
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');

                itemEditHandler(row, key, {setData});

            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');

                itemEditHandler(row, key);
                //N2en consolest millist rida ja mis ta iD on muudeti
                console.log(row);
                console.log(key);

            }
            } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
            }
        }
            const deleteline = (record) => {
                deletekey(record.key);
            };
            const deletekey = async (key) => {
                try {
                const row = await form.validateFields();
        
                itemDeleteHandler(row, key, {setData});
        
                } catch (errInfo) {
                console.log('Validate Failed:', errInfo);
                }
        };
        
        const columns = [
            {
            title: 'Title',
            dataIndex: 'title',
            width: '15%',
            editable: true,
            },
            {
            title: 'Text',
            dataIndex: 'text',
            width: '15%',
            editable: true,
            },
            {
            title: 'First Name',
            dataIndex: 'firstName',
            width: '15%',
            editable: true,
            },
            {
            title: 'Last Name',
            dataIndex: 'lastName',
            width: '15%',
            editable: true,
            },
            {
            title: 'Date',
            dataIndex: 'createdAt',
            width: '15%',
            editable: false,
            },
            {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                <span>
                    <a
                    href="javascript:;"
                    onClick={() => save(record.key)}
                    style={{
                        marginRight: 8,
                    }}
                    >
                    Save
                    </a>
                    <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                    </Popconfirm>
                </span>
                ) : (<div>
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    Edit
                </Typography.Link>
                <Typography.Link disabled={editingKey !== ''} onClick={() => deleteline(record)}>
                    Kustuta
                </Typography.Link>
                </div>
                );
            },
            },
        ];
        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
            return col;
            }
        
            return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
            };
        });
        return (
            <Form form={form} component={false}>
            <Table
                components={{
                body: {
                    cell: EditableCell,
                },
                }}
                bordered
                dataSource={dataforTable}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                onChange: cancel,
                }}
            />
            </Form>
        );
        
    };
    

    return(
        <div>
            <h1>Postitused</h1>
            <EditableTable/>
        </div>
    )
}
export default Posts;