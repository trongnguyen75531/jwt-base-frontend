import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import { createUser } from '../utils/apis';


const Register = () => {
   const navigate = useNavigate();

   const onFinish = async (formData) => {
      const { email, password } = formData;
      try {
         const response = await createUser(email, password);
         setTimeout(() => {
            if (response) {
               notification.success({
                  message: 'Create User',
                  description: 'Đăng ký tài khoản thành công!'
               });
               navigate('/login');
            } else {
               notification.error({
                  message: 'Create User',
                  description: 'Đăng ký tài khoản thất bại!'
               });
            }
         }, 500);
      } catch (error) {
         console.log('Có lỗi', error);
      }
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
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>

   );
};


export default Register;