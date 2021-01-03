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

---

###### **1、父传子**

React实现父传子，有很多种方式，但主要是通过props来实现的

即引入子组件后，在子组件上绑定值，如下🌰：

- 首先在父组件中赋值

  - ```react
     constructor(props) {
            super(props)
            this.state = {
                count:[{
                    name:'yukiice',
                    age:18,
                    sex:'man'
                }]
            }
        }
    ```

- 引入子组件到父组件，同时在子组件上赋值

  - ```react
     <Child count={this.state.count}></Child>
    ```

- 然后在子组件中获取，运用解构赋值的方法，取出count

  - ```react
    render() {
        const { count } = this.props;
        return (
          <div>
            {count.map((item, index) => {
              return (
                <div key={index}>
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
    ```

###### 2、子传父

子传父有点类似VUE，也是需要子组件自定义事件，并传值，然后在父组件上绑定事件，进行相关操作，如下🌰：

- 在子组件中定义参数

  - ```react
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
    ```

- 然后通过props传给父组件

  - ```react
    itemClick(id) {
        this.props.FatherClick(id);
      }
    ```

- 然后在父组件中绑定事件

  - ```react
     <Child
     count={this.state.count}
     FatherClick={this.FathersClick.bind(this)}
     ></Child>
    ```

- 调用setstate

  - ```react
    FathersClick(id) {
        const titles = id + this.state.title;
        this.setState({
          title: titles,
        });
      }
    ```

###### 3、Context

​	Context也是一个重要的传值方式，如果你的项目没有那么复杂，那么使用Context也是很方便的Context解决了props属性自上而下（也就是由父及子）传递的繁琐问题，提供了一种在组件中共享此类值的方式，而不必显式的通过组件树逐层的来传递props。

​	Context设计的目的，就是为了**共享那些对于组件树而言是“全局”的数据**

​	与此同时，Context也有一些问题，它会让**组件的复用性变差**

- 首先，需要调用React.createContext这个API

  - ```react
    export const UserContext = React.createContext({
        name:'cyukiice',
        level:0
    })
    ```

  - 这里要注意，需要导出Context对象，这样才可以在外部引入这个Context对象

- 然后调用Context.Provider这个API，对子组件进行包裹

  - ```react
    <UserContext.Provider value={ this.state}>
        <Consumer></Consumer>
    </UserContext.Provider>
    ```

  - 这里的value就是传入的值，这里可以传入整个state

  - Provider 接收一个 `value` 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。**多个 Provider 也可以嵌套使用**，**里层的会覆盖外层的数据**。

  - 当 Provider 的 `value` 值发生**变化**时，它内部的**所有消费组件都会重新渲染**。Provider 及其内部 consumer 组件都不受制于  **shouldComponentUpdate**  函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

- 调用Class.contextType这个API，将其挂载在Context上

  - ```react
    Consumer.contextType = UserContext
    ```

- 然后在子组件中使用

  - 首先需要导入需要的Context

  - ```react
    import { UserContext } from "./Context";
    ```

- 然后调用Context.Consumer这个API

  - ```react
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
    ```

  - 这需要[函数作为子元素 `function as a chil` 这种做法。这个函数**接收当前的 context 值**，**返回一个 React 节点**。传递给函数的 `value` 值等同于往上组件树离这个 context 最近的 Provider 提供的 `value` 值。如果没有对应的 Provider，`value` 参数等同于传递给 `createContext()` 的 `defaultValue`。

###### 4、事件总线

​	react本身，你想完成兄弟组件的传值，方法是比较麻烦的，比如现在有三个组件，分别为组件A，组件B和父组件，你如果想要通过组件A来获取组件B中的某个属性，那么你只能通过组件B先传值给父组件，然后通过父组件再传递给子组件，这样略显麻烦，于是乎，就需要一个方法，来完成兄弟组件的相互传值，Redux是一种方法，但还有一个更简单的方法---**EventBus**

​	EventBus---也叫事件总线，在Vue，Node，Ng中都有这个概念，就是以一个公共组件，来充当中间缓冲地带，来处理数据，完成组件中的数值传递。

​	React他本身是没有这个的，因此需要一个第三方库来引入使用--- **events**

​	**events的API都遵循Node的文档所描述**

- 首先需要安装events

  - `yarn add events`

- 然后在其中的一个组件中引入

  - `import { EventEmitter } from "events";`
  - EventEmitter可以传任意数量的参数到监听器函数

- 创建并导出EventEmitter方法

  - ```
    export const eventBus = new EventEmitter();
    ```

  - **这里需要注意导出，双方触发的方法需要是同一个**

- 然后就可以在此组件中绑定事件，然后触发此方法

  - ```
    //添加事件并绑定
    <Button onClick={() => this.toChangeBus()}>Profile</Button>
    //触发
     toChangeBus() {
        eventBus.emit("sayHello", 123, 'hello');
     }
    ```

  - eventBus.emit(events,arg1,arg2)   第一个其他组件获取时候调用的方法名字，后面是传递的参数

- 在另一个组件中引入此组件创建的方法

  - ```
    import { eventBus } from "./Profile";
    ```

- 然后可以调用React的生命周期来获取参数

  - ```
    //首先需要创建出处理这两个参数的方法
    handleCatch(name, age) {
        console.log(name, age);
    }
    //然后在生命周期的函数中获得
    componentDidMount() {
        eventBus.addListener("sayHello", this.handleCatch);
      }
    //'removeListener' 事件在 listener 被移除后触发。
    componentWillUnmount() {
        eventBus.removeListener("sayHello", this.handleCatch);
    }
    ```

#### setState

---

​	首先，setState是**异步更新**

​	这源于react的设计理念，也是为了更好的处理组件之间传值的互相影响

​	如果你每次都调用setstate进行一次更新的话，那么意味着，render函数会被频繁的调用，界面重新渲染，这样效率太低

​	最好的办法是获取到多个更新，之后进行批量更新

​	如果同步更新了state，但是还没有执行render函数，那么state和props中就无法保持同步

​	state和props不能保持一致性，会在开发中产生非常多的问题。

​	**所以，setState是异步的**

​	也因为如此，我们在进行setstate操作的时候，尽管页面发生了刷新，但是实际上，state中的数据并没有发生变化。如果你想改变其中的数值，那么有以下两种方法

- 首先是this.setState本身是可以进行两次操作的，如🌰而言

  - ```react
     this.setState({
              count:this.state.count +1,
              text:'最新的文本'
              
          },()=>{
              console.log(this.state.text,'这里是回调函数里面的东西');
      })
    ```

  - 你在后面的回调函数中，是可以拿到最新的state的

- 其次就是在生命周期中，我们知道生命周期的运行他是这样的

- constructor =>  componentWillMount => render => componentDidMount

- 因此 我们也可以在**componentDidMount**中拿到这些数据，如下🌰

  - ```react
    componentDidMount(){
          console.log(this.state.text,'这里是生命周期中的东西');
      }
    ```

  当然，**setState也可以是同步更新的**，他出现在以下两种情况中

- 将setState放在定时器中

  - ```
    setTimeout(this.setState({
    count:this.state.count +1
    }),1000)
    ```

- 还有就是你使用原生方法事件，比如通过id绑定dom节点，添加原生事件进行操作，同时调用setState

---

​	其次 ，setState是会默认合并你的操作的，

​	比如你调用了多次setState来操作数据，那么react会只取你的其中一次，如下

​	但如果你确实是想要执行多次同样的setState，那么，你可以如下🌰所示

- **这里的prevState是之前的state**

  - ```react
    this.setState((prevState,props)=>{
            return { 
                count:prevState.count + 1
            }
        })
    ```

#### Ref

​	与Vue相同，在React中，我们有时候也需要对DOM进行一些操作，方法也近乎相同，那就是通过Ref转发来获取DOM属性。

​	**Ref 转发是一个可选特性，其允许某些组件接收 `ref`，并将其向下传递（换句话说，“转发”它）给子组件。**

​	Ref在React中有三种方式

- string类型（**已被废弃，在17版本中**）

  - 方法很很像Vue，下面是🌰
  - 首先在DOM上绑定ref属性`<div ref="focusRef" >Focus</div>`
  - 然后就可以通过`this.refs.focusRef`来操作DOM

- react.CreateRef() （**主流**）

  - 这是ref主要使用的方法，下面是🌰
  - 首先需要引入

  ```
  import React, { Component,createRef } from 'react'
  ```

  - 在constructor中创建ref属性

  ```react
  constructor(props){
  super(props)
  this.objRef = createRef()
  }
  ```

  - 然后绑定ref

  ```react
  <h2 ref={this.objRef}>
  hello Yukiice
  </h2>
  <Button onClick={()=>this.changeClick()}>change</Button>
  ```

  - 最后调用ref属性，做DOM操作

  ```react
  changeClick(){
  console.log(this.objRef.current);
  this.objRef.current.innerHTML = 'hello'
  }
  ```

  Ref的值根据根节点的类型不同而有所不同

  当ref属性作用于HTML元素时候，构造函数中使用createRef创建的ref接收底层DOM元素将其作为current属性

  当ref属性用于自定义class组件时候，ref对象接收组件的挂载实例作为其current属性

  你不能在函数组件中使用ref对象，因为他们没有实例

  但是如果你真的想要获取函数组件中的某个DOM元素

  那么可以通过React.forwardRef，还有就是HOOKS里面

---

#### 高阶函数和高阶组件

##### 1、高阶函数

​	首先，高阶函数需要满足以下条件之一：

	-	接受一个或者多个函数作为输入
	-	输出一个函数

​	在javascript中比较常见的filter、map、reduce都是高阶函数

##### 2、高阶组件

​	如何说明是高阶组件：

- 高阶组件的英文是 **High-Order Components** ，简称为HOC
- 官方的定义：高阶组件是参数为组件，返回值为新组件的函数

​	那么我们可以进行如下解析：

- 首先，高阶组件本身不是一个组件，而是一个函数。
- 其次，这个函数的参数是一个组件，返回值也是一个组件。

​	高阶组件：



​	



