import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Alert } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import "./index.css";

const Page3 = () => {
  return (
    <div className="Page3">
      <Alert
        message={<h3>Ошибка</h3>}
        description="К сожалению, такой страницы не существует. Вероятно, она была удалена автором с сервера, либо её здесь никогда не было. Попробуйте перейти на главную страницу"
        type="error"
        showIcon
      />
      <Link to="/">
        <Button type="primary" icon={<ReloadOutlined />}>
          Перейти на главную страницу
        </Button>
      </Link>
    </div>
  );
};

export default Page3;
