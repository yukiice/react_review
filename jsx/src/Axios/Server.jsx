import React, { PureComponent, Fragment } from "react";
import { Form, Input, Button } from "antd";
import { addHomeList } from "../request/index";
export default class Server extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      title: "",
    };
  }
  valueChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  btnClick() {
    const form = Object.assign({}, this.state);
    addHomeList(form).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          layout="horizontal"
        >
          <Form.Item label="name">
            <Input
              name="name"
              value={this.state.name}
              onChange={(e) => this.valueChange(e)}
            />
          </Form.Item>
          <Form.Item label="desc">
            <Input
              name="desc"
              value={this.state.desc}
              onChange={(e) => this.valueChange(e)}
            />
          </Form.Item>
          <Form.Item label="title">
            <Input
              name="title"
              value={this.state.title}
              onChange={(e) => this.valueChange(e)}
            />
          </Form.Item>
          <Form.Item label="Button">
            <Button onClick={() => this.btnClick()}>Button</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
