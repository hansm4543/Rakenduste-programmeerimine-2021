import { Form, Input, Button, Layout } from 'antd';

function AddPostForm(props){
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        try{
            fetch('http://localhost:8081/api/post/create', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            });

            
        }catch (error) {
            console.error(error);
        }
        form.resetFields();
        props.onAddPost(1);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        props.onAddPost(0);
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
            label="Title"
            name="title"
            rules={[
            {
                required: true,
                message: 'Please input post Title!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Text"
            name="text"
            rules={[
            {
                required: true,
                message: 'Please input post Text!',
            },
            ]}
        >
            <Input.TextArea showCount maxLength={1500} />
        </Form.Item>

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

export default AddPostForm;