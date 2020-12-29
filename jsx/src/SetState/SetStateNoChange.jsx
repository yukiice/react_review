import React, { PureComponent} from "react";
import { Button } from "antd";
export default class SetStateNoChange extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        {
          name: "yukiice",
          age: 15,
          from: "china",
        },
        {
          name: "kate",
          age: 20,
          from: "Uk",
        },
        {
          name: "tom",
          age: 25,
          from: "US",
        },
      ],
    };
  }
  shouldComponentUpdate(newProps,newState){
      if (newState.item !== this.state.item) {
          return true
      }
      return false       
  }
  changeClick(){
    const newItem = [...this.state.item]
    newItem.push({name:'jack',age:20,from:'japan'})
    this.setState({
        item:newItem
    })
  }
  render() {
    return (
      <div>
        <h2>好友列表：</h2>
        <div>
          {this.state.item.map((item, index) => {
            return (
              <div key={index}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.from}</div>
                <br/>
              </div>
            );
          })}
        </div>
        <Button onClick={()=>this.changeClick()}>增加</Button>
      </div>
    );
  }
}
