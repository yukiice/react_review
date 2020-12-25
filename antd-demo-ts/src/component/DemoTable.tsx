import { Table,  Space } from "antd";
import React, { FC } from "react";
import './style.css'
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <div className="names">处理数据</div>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    number:"50",
    price: "50",
    
  },
  {
    key: "2",
    name: "Jim Green",
    number:'40',
    price: "60",
    
  },
  {
    key: "3",
    name: "Joe Black",
    number:'30',
    price: "70",
  
  },
];
export const DemoTable: FC = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};
