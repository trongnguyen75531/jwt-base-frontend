import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from './AuthContext';

const Header = () => {
   const { auth, setAuth } = useContext(AuthContext);
   console.log(auth);
   const navigate = useNavigate();
   const items = [
      {
         label: <Link to={'/'}></Link>,
         key: 'home',
         icon: <HomeOutlined />,
      },
      (auth.isAuthenticated ? {
         label: <Link to={'/user'}></Link>,
         key: 'user',
         icon: <UserOutlined />,
      } : null),
      {
         label: `Welcome ${auth.user.email || "(Guest)"}`,
         key: 'SubMenu',
         icon: <SettingOutlined />,
         children: (auth.isAuthenticated ? [{
            label: <span onClick={() => {
               localStorage.clear("token");
               navigate("/");
            }}>Đăng xuất</span>,
            key: 'logout'
         }] : [{
            label: <Link to={'/login'}>Đăng nhập</Link>,
            key: 'login'
         }])
      },

   ];
   const [current, setCurrent] = useState('');
   const onClick = (e) => {
      setCurrent(e.key);
   };
   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;