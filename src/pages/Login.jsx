import React from 'react';
import { Button, Form, Input } from 'antd';


const Login = () => {
   const onFinish = (loginInfo) => {
      console.log(loginInfo);
   };

   return (
      <div style={{ margin: 48 }}>
         <Form
            name="basic"
            labelCol={{
               span: 8,
            }}
            wrapperCol={{
               span: 16,
            }}
            style={{
               maxWidth: 600,
            }}

            onFinish={onFinish}
            autoComplete="off"

         >
            <Form.Item
               label="Email"
               name="email"
               rules={[
                  {
                     required: true,
                     message: 'Please input your email!',
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


            <Form.Item label={null}>
               <Button type="primary" htmlType="submit">
                  Đăng nhập
               </Button>
            </Form.Item>
         </Form>
      </div>

   );
};


export default Login;