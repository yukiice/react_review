/*
 * @Author: your name
 * @Date: 2020-12-25 20:37:42
 * @LastEditTime: 2020-12-25 22:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_review/jsx/src/App.js
 */
import "./App.css";
import { Book } from "./component/Book";
import { Demo } from "./component/Demo";
import { Jsx1 } from "./component/jsx1";
import { Number } from "./component/Number";

function App() {
  return (
    <div>
      <Demo> </Demo>
      <div>Demo下面 </div>
      <br />
      <Number> </Number>
      <br />
      <Jsx1> </Jsx1>
      <br />
      <Book> </Book>
    </div>
  );
}

export default App;
