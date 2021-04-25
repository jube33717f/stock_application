import React from 'react';
import './style.css'
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
const Register = ()=>{
    let history = useHistory();
    const onFinish = (values) => {
        

        if(values.password !== values.password2){
            console.log(a+' '+b)
            alert('twice input are different')
        }else{
            alert('register success')
            console.log('Success:', values);
            history.push("/login");
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return <div className='form'>
        <h2 className='form__h2'>Register</h2>
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
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
                label="Password"
                name="password2"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
            

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
    </div>
}

export default Register;