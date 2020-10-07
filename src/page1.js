/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { Link } from "react-router-dom";
import { extendObservable } from "mobx";
import { inject, observer } from "mobx-react";
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import "./index.css";

const Page1 = ({ store }) => {
  // поля таблицы
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, string) => (
        // переход по нажатию на имя
        <Link to="/page2">
          <Button
            type="link"
            onClick={() => {
              extendObservable(store, { info: string }); // запись значения в store
            }}
          >
            {name}
          </Button>
        </Link>
      ),
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
      render: (condition) => {
        // вывод логических значений в таблицу
        if (condition === true) {
          return <div key={condition}>True</div>;
        }
        return <div key={condition}>False</div>;
      },
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Addresses",
      key: "addresses",
      dataIndex: "addresses",
      render: (addresses) => {
        // вывод адресов в виде списка
        // eslint-disable-next-line no-shadow
        const elements = addresses.map((addresses) => (
          // eslint-disable-next-line react/jsx-key
          <li>{addresses}</li>
        ));
        return <ul>{elements}</ul>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (string) => (
        <Link to="/page2">
          <Button
            onClick={() => {
              extendObservable(store, { info: string }); // запись значения в store
            }}
          >
            Редактировать № {string.key}
          </Button>
        </Link>
      ),
    },
  ];

  const { data } = store; // вывод data из store

  return (
    <div className="App">
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default inject("store")(observer(Page1));
