import { useState, useEffect } from 'react';
import { Table } from 'antd';
import Header from '../components/Header';
import { getUsers } from '../utils/apis';

function Users() {
   const [dataSource, setDataSource] = useState([]);

   useEffect(() => {
      (async () => {
         const response = await getUsers();
         response.data && setDataSource(response.data);
      })();
   }, []);

   const columns = [
      {
         title: 'ID',
         dataIndex: '_id',
      },
      {
         title: 'Email',
         dataIndex: 'email',
      },
      {
         title: 'Role',
         dataIndex: 'role',
      },
      {
         title: 'Created At',
         dataIndex: 'createdAt',
      }
   ];



   return (
      <>
         <Header />
         <div className="list-users" style={{ padding: 24 }}>
            <Table bordered dataSource={dataSource} columns={columns} rowKey={'_id'} />
         </div>
      </>
   );
}

export default Users;