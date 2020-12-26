# react_review



## 1、结构





## 2、语法

#### Render函数

当Rednder函数被调用的时候，他会检查this.props和this.state的变化并返回以下类型之一

- React元素：
  - 通常通过tsx来创建
  - 例如`<div><div/>`会被React渲染成DOM节点，`<MyComponent>`会被React渲染为自定义组件
  - 无论是`<div />`还是还是 `<MyComponent>`均为React元素
- 数组或者Fragments 
  - 使得Render方法可以返回多个元素
- Portals
  - 可以渲染子节点到不同的DOM树上
- 字符串或者数值类型
  - 它们在DOM中都会被渲染为文本节点
- 布尔型或者null
  - 什么都不渲染

---

#### 生命周期

- constructor
  - 如果不初始化state或者不进行方法的绑定，则不需要为Reat组件实现构造函数
  - constructor通常只做两件事情
    - 通过给`this.state`赋值对象来初始化内部的state
    - 为事件绑定实例(this)
- componentDidMount
  - componentDidmount会在组件挂载后（插入DOM树种）立即调用
  - componentDidMount中通常进行以下操作
    - 依赖于DOM的操作可以在这里进行
    - 发送网络请求最好的地方（**官方建议**）
    - 在此处可以添加一些订阅（需要在componentWillUnMount中取消订阅）
- componentDidUpdate
  - 在更新后会被立即调用，**但首次渲染的时候，不会执行此方法**
    - 当组件更新后，你可以在此处对DOM进行操作，
    - 假如你对更新前后的props进行了比较，则也可以在此处进行网络请求（**如当props未发生变化的时候，不执行这个网络请求**）
- componentWillUnMount
  - 会在组件卸载以及销毁之前直接调用
    - 在此方法中执行必要的清理操作
    - 如清楚timer,取消网络请求或者清除在componentDidMount中创建的订阅

#### 组件通讯

---

##### 父子通讯





