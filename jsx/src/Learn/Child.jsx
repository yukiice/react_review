import React, { Component } from "react";

export default class Child extends Component {
  itemClick(id) {
    this.props.FatherClick(id);
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        {count.map((item) => {
          return (
            <div key={item.id} onClick={() => this.itemClick(item.id)}>
              {item.name}
              <br />
              {item.age}
              <br />
              {item.sex}
            </div>
          );
        })}
      </div>
    );
  }
}
