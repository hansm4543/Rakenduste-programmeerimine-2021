import { Form, Input, Button, Layout } from 'antd';

function AddUserForm(props){
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        if(values.password === values.passwordconfirm){
            try{
                fetch('http://localhost:8081/api/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {'Content-Type':'application/json'}
                });

                
            }catch (error) {
                console.error(error);
            }
            form.resetFields();
            props.onAddUser(1);
        }else{
            document.getElementById("paroolconfirm").innerHTML = "Please Match the passwords!";
            form.resetFields();
            props.onAddUser(0)
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        props.onAddUser(0);
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
            label="First Name"
            name="firstName"
            rules={[
            {
                required: true,
                message: 'Please input your First Name!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
            {
                required: true,
                message: 'Please input your Last Name!',
            },
            ]}
        >
            <Input />
        </Form.Item>

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
            label="Password Confirmation"
            name="passwordconfirm"
            rules={[
            {
                required: true,
                message: 'Make sure it matches with your first input!',
            },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <label id="paroolconfirm"></label>
        <br></br>
        <br></br>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 8,
            }}
        >
            <Button type="primary" htmlType="submit">
            Registreeri
            </Button>
        </Form.Item>
        </Form>
        </Layout>
    )
}

export default AddUserForm;