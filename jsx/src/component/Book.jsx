/*
 * @Author: your name
 * @Date: 2020-12-25 22:05:28
 * @LastEditTime: 2020-12-25 23:07:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_review/jsx/src/component/Book.jsx
 */
import { Button } from "antd";
import React, { Component } from "react";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dis: false,
      books: [
        {
          id: 1,
          name: "书名1",
          price: 50,
          count: 2,
        },
        {
          id: 2,
          name: "书名2",
          price: 60,
          count: 10,
        },
        {
          id: 3,
          name: "书名3",
          price: 80,
          count: 2,
        },
        {
          id: 4,
          name: "书名1",
          price: 70,
          count: 2,
        },
      ],
    };
  }

  priceInit = (price) => {
    return `$` + price;
  };
  changeClick(datas, index) {
    if (datas === "add") {
      const newdata = [...this.state.books];
      newdata[index].count++;
      this.setState({
        books: newdata,
      });
    } else {
      const newdata = [...this.state.books];
      newdata[index].count--;
      this.setState({
        books: newdata,
      });
    }
  }
  //   添加
  addClick = () => {};

  // 移除
  removeClick(data) {
    this.setState({
      books: this.state.books.filter((item) => item.id !== data),
    });
  }

  render() {
    return (
      <div>
        <thead>
          <tr>
            <th>编号</th>
            <th>书名</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.length === 0
            ? `暂无数据`
            : this.state.books.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>

                    <td>{this.priceInit(item.price)}</td>
                    <Button
                      disabled={item.count <= 1}
                      onClick={(e) => this.changeClick("dec", index)}
                    >
                      -
                    </Button>
                    <td>{item.count}</td>
                    <Button onClick={(e) => this.changeClick("add", index)}>
                      +
                    </Button>
                    <td>
                      <Button onClick={(e) => this.removeClick(item.id)}>
                        移除
                      </Button>
                      <Button onClick={this.addClick}>增加</Button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
        <h2>总价格: {this.getTotalPrice()}</h2>
      </div>
    );
  }
  getTotalPrice = () => {
    //   使用reduce来处理这些东西
    const totalPrice = this.state.books.reduce((prevalue, item) => {
      return prevalue + item.price * item.count;
    }, 0);
    return this.priceInit(totalPrice);
  };
}
