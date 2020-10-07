/* eslint-disable react/prop-types */
import React from "react";
import "antd/dist/antd.css";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import { inject, observer } from "mobx-react";

// поля таблицы
const columns = [
  {
    title: "ID",
    dataIndex: "getKey",
    key: "getKey",
    editable: false,
  },
  {
    title: "Name",
    dataIndex: "getName",
    key: "getName",
    editable: true,
  },
  {
    title: "Condition",
    dataIndex: "getCondition",
    key: "getCondition",
    editable: true,
    render: (getCondition) => {
      // вывод логических значений в таблицу
      if (getCondition === true) {
        return <div key={getCondition}>True</div>;
      }
      if (getCondition === false) {
        return <div key={getCondition}>False</div>;
      }
      return [];
    },
  },
  {
    title: "Email",
    key: "getEmail",
    dataIndex: "getEmail",
    editable: true,
  },
  {
    title: "Addresses",
    key: "getAddresses",
    dataIndex: "getAddresses",
    editable: true,
  },
];

const Page2 = ({ store }) => {
  const { getKey } = store;
  const { getName } = store;
  const { getCondition } = store;
  const { getEmail } = store;
  const { getAddresses } = store;

  const dataTable = [{ getKey, getName, getCondition, getEmail, getAddresses }];

  return (
    <div className="App">
      <div className="table">
        <Table columns={columns} dataSource={dataTable} />
      </div>
      <Link to="/">
        <Button type="primary">Сохранить</Button>
      </Link>
      <Link to="/">
        <Button type="primary">Отменить</Button>
      </Link>
    </div>
  );
};

export default inject("store")(observer(Page2));
