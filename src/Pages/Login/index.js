import React,{useEffect,useState} from 'react';
import './style.css'
import { Form, Input, Button, Checkbox } from 'antd';
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
const Login = ()=>{
    let history = useHistory();
    const onFinish = (values) => {
        
        console.log('Success:', values);
        history.push("/");
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return <div className='form'>
            <h2 className='form__h2'>Login</h2>
        <Form
            {...layout}
            style={{paddingTop: '8%'}}
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
    </div>
}

export default Login;