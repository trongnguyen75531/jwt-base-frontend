import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {
   const items = [
      {
         label: <Link to={'/'}></Link>,
         key: 'home',
         icon: <HomeOutlined />,
      },
      {
         label: <Link to={'/user'}></Link>,
         key: 'user',
         icon: <UserOutlined />,
      },
      {
         label: 'Welcome trongnguyendev',
         key: 'SubMenu',
         icon: <SettingOutlined />,
         children: [
            {
               label: 'Đăng nhập',
               key: 'login',
            },
            {
               label: 'Đăng xuất',
               key: 'logout',
            },
         ]
      },

   ];
   const [current, setCurrent] = useState('mail');
   const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
   };
   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;