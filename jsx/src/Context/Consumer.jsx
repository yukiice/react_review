import React from "react";
import { UserContext } from "./Context";
// React内部是有Context的   但仅限于类组件
// export default class Consumer extends Component {
//   render() {
//     return (
//       <div>
//         <div>{this.context.name}</div>
//         <br />
//         <div>{this.context.level}</div>
//       </div>
//     );
//   }
// }

// 那么在函数组件中
export default function Consumer() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <div>{value.name}</div>
            <br />
            <div>{value.level}</div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
