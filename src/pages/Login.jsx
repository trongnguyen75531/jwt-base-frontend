import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import { handleLogin } from '../utils/apis';
import { AuthContext } from '../components/AuthContext';

const Login = () => {
   const navigate = useNavigate();
   const { auth, setAuth } = useContext(AuthContext);
   console.log(auth);

   const onFinish = async (loginInfo) => {
      const { email, password } = loginInfo;
      try {
         const response = await handleLogin(email, password);
         setTimeout(() => {
            if (response.data && response.data.code === 0) {
               localStorage.setItem('token', response.data.token);
               notification.success({
                  message: 'Login User',
                  description: 'Đăng nhập tài khoản thành công!'
               });

               setAuth({
                  isAuthenticated: true,
                  user: {
                     email: response.data.user.email || "",
                     username: response.data.user.email || ""
                  }
               })

               navigate('/');
            } else {
               notification.error({
                  message: 'Login User',
                  description: 'Đăng nhập tài khoản thất bại!'
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
                  Đăng nhập
               </Button>
            </Form.Item>
         </Form>
      </div>

   );
};


export default Login;