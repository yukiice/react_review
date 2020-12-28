/*
 * @Author: your name
 * @Date: 2020-12-26 19:51:44
 * @LastEditTime: 2020-12-28 16:37:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_review/jsx/src/demo.js
 */
import React from "react";
import { Book } from "./component/Book";
import { Demo } from "./component/Demo";
import { Jsx1 } from "./component/jsx1";
import { Number } from "./component/Number";

export const Demo1 = () => {
  return (
    <div>
      <br/>
      <Demo> </Demo> 
      <div> Demo下面 </div>
       <br />
      <Number> </Number>
       <br />
      <Jsx1> </Jsx1> 
      <br />
      <Book> </Book>
    </div>
  );
};
