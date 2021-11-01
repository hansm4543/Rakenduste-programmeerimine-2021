import { Form, Input, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';




function LogInForm(props){    

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Formi v22rtused:', values);
        try{
            fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            }).then(response => response.json())
            .then(data => kaslasebl2biv6iei(data));
        
        }catch (error) {
            console.error(error);
        }


    };
    function kaslasebl2biv6iei(data){
        //console.log(data);
        if(data.hasOwnProperty('error')){
            props.onLogInUser(0);
        }else{
            props.onLogInUser(1, data);
        }
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        props.onLogInUser(0);
    };

    return(
        <Layout className="container" type="flex" justify="center" align="middle">
        <Form
        form={form}
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 8,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Email"
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your Email!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 8,
            }}
        >
                <Button type="primary" htmlType="submit">
                Log In
                </Button>
        </Form.Item>
        </Form>
        </Layout>
    )
}

export default LogInForm;