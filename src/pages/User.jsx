import { Table } from 'antd';
import Header from '../components/Header';

function User() {

   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         age: 32,
         address: '10 Downing Street',
      },
      {
         key: '2',
         name: 'John',
         age: 42,
         address: '10 Downing Street',
      },
   ];

   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Age',
         dataIndex: 'age',
         key: 'age',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         key: 'address',
      },
   ];



   return (
      <>
         <Header />
         <div className="list-users" style={{ padding: 24 }}>
            <Table bordered dataSource={dataSource} columns={columns} />
         </div>
      </>
   );
}

export default User;