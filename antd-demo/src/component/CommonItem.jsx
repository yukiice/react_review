import { Comment, Tooltip, Avatar, Button } from "antd";
import React, { PureComponent } from "react";

export default class CommonItem extends PureComponent {
    removeItem(){
        this.props.removeItem()
    }
  render() {
    const { name, avatar, datetime, content } = this.props.items;
    return (
      <Comment
        author={name}
        avatar={<Avatar src={avatar} alt={name} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={
            [
               <Button size="small" type="dashed" onClick={()=>this.removeItem()}>删除</Button> 
            ]
        }
      />
    );
  }
}
