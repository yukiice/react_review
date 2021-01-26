import React, { useRef, useState, useEffect } from "react";
import { Button } from "antd";

// useRef 返回的是一个ref对象，返回的ref对象在组件的整个生命周期中保持不变

// 可以利用useRef和Effect 来获取这次的值和上次的值
export default function RefHook() {
  const [count, setCount] = useState(0);
  const titleRef = useRef(count);
  useEffect(() => {
    titleRef.current = count;
  }, [count]);
  return (
    <div>
      <h2>
        {titleRef.current}
        <br />
        上一次的值：{count}
      </h2>
      <Button onClick={() => setCount(count + 1)}>改变</Button>
    </div>
  );
}
