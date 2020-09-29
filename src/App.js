import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // импорт стилей библиотеки Ant Design
import { Table, Button } from 'antd'; // импорт элементов из библиотеки Ant Design
import data from './data.json'; // импорт файла json

const App = () => {
  const columns = [
    // заголовки таблицы
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line react/display-name
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Condition',
      dataIndex: 'condition',
      key: 'condition',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Addresses',
      key: 'addresses',
      dataIndex: 'addresses',
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: (text, record) => (
        <Button size="middle">
          <p>Редактировать {record.name}</p>
        </Button>
      ),
    },
  ];

  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default App;
