# react_review



## 1、结构





## 2、语法

#### 1、Render函数

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

#### 2、生命周期

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

#### 3、组件通讯

---

##### 1、父子通讯

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

  - ```react
    export const eventBus = new EventEmitter();
    ```

  - **这里需要注意导出，双方触发的方法需要是同一个**

- 然后就可以在此组件中绑定事件，然后触发此方法

  - ```react
    //添加事件并绑定
    <Button onClick={() => this.toChangeBus()}>Profile</Button>
    //触发
     toChangeBus() {
        eventBus.emit("sayHello", 123, 'hello');
     }
    ```

  - eventBus.emit(events,arg1,arg2)   第一个其他组件获取时候调用的方法名字，后面是传递的参数

- 在另一个组件中引入此组件创建的方法

  - ```react
    import { eventBus } from "./Profile";
    ```

- 然后可以调用React的生命周期来获取参数

  - ```react
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

#### 4、setState

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

  - ```react
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

#### 5、Ref

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

  ```react
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

#### 6、高阶函数和高阶组件



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

- 具体而言，**高阶组件是参数为组件，返回值为新组件的函数**
- 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件

​	下面是高阶组件的基本结构：

- 首先创建一个普通的类组件

  - ```react
    class DemoHOC extends PureComponent {
        render() {
            return (
                <div>
                    HOC
                    <br/>
                    {this.props.name}
                </div>
            )
        }
    }
    ```

- 然后创建高阶组件

  - ```react
    function enhanceComponent(WrapperComponent){
        return class NewComponent extends PureComponent{
            render() {
                return (
                    <WrapperComponent {...this.props}></WrapperComponent>
                )
            }
        }
    }
    ```

- 然后进行容器化

  - ```react
    const EnhanceComponent = enhanceComponent(DemoHOC)
    ```

- 最后导出

  - ```react
    export default EnhanceComponen
    ```



###### 1、高阶函数的增强props

---

高阶组件是有非常多的用处的，比如我们有一个需求，需要展示一个重复的内容在多个地方，那么，如果你一个一个进行编写，那么后续改变的时候，就非常难以更改这些一个一个的组件，那么可以利用高阶组件，来简化和完成复用。

例如下面这个🌰：

我们的需求是，传入的名字是自定义的，但是归属地要完成统一

那么一个一个传的话，就略显麻烦，可以利用高阶组件简化这个步骤：

- 首先定义这两个组件

  - ```react
    class Home extends PureComponent {
      render() {
        return (
          <div>
            <h2>HOME {`姓名 ${this.props.name} 区域：${this.props.local}`}</h2>
          </div>
        );
      }
    }
    
    class About extends PureComponent {
      render() {
        return (
          <div>
            <h2>About {`姓名 ${this.props.name} 区域：${this.props.local}`}</h2>
          </div>
        );
      }
    }
    ```

- 然后定义高阶组件

  - ```react
    // 定义高阶函数
    // 增强props
    function enchanceLocal(WrappedComponent) {
      return ({ ...props }) => <WrappedComponent {...props} local="中国" />;
    }
    ```

- 分别对这两个组件进行处理

  - ```react
    const EnchanceHome = enchanceLocal(Home);
    const EnchanceAbout = enchanceLocal(About);
    ```

- 那么在父组件中，我们只需要改变原本的两个组件名称，改成处理后的名称即可

  - ```react
    class EnchanceHOC extends PureComponent {
      render() {
        return (
          <div>
            <EnchanceHome name="yukiice"></EnchanceHome>
            <br />
            <EnchanceAbout name="meimei"></EnchanceAbout>
          </div>
        );
      }
    }
    //导出
    export default EnchanceHOC;
    ```



###### 2、高阶函数结合Context

----

Context在传值方面有非常多的便利，当然，高阶函数也可以结合Context使用

下面是🌰：

- 首先创建 Context 对象

  - ```react
    // 创建Context对象
    export const UserContext = createContext({
      name: "",
      level: -1,
      local: "中国",
    });
    ```

- 创建组件

  - ```react
    class Home extends PureComponent {
      render() {
        return (
          <h2>
            HOME
            {`姓名 ${this.props.name} 等级：${this.props.level}  区域：${this.props.local}`}
          </h2>
        );
      }
    }
    
    class About extends PureComponent {
      render() {
        return (
          <h2>
            HOME
            {`姓名 ${this.props.name} 等级：${this.props.level}  区域：${this.props.local}`}
          </h2>
        );
      }
    }
    ```

- 在父组件中引入，并使用Context.Provider

  - ```react
    class EnchanceHOCWithContext extends PureComponent {
      render() {
        return (
          <div>
            <UserContext.Provider
              value={{ name: "yukiice", level: 19, local: "中国" }}
            >
              <HocHome></HocHome>
              <br />
              <HocAbout></HocAbout>
            </UserContext.Provider>
          </div>
        );
      }
    }
    export default EnchanceHOCWithContext;
    ```

- 创建高阶组件

  - ```react
    function withUser(WrappedComponent) {
      return ({ ...props }) => {
        return (
          <UserContext.Consumer>
            {(value) => {
              return <WrappedComponent {...props} {...value} />;
            }}
          </UserContext.Consumer>
        );
      };
    }
    ```

  - 使用高阶组件，就不需要分别在两个子组件中都调用 Context.Consumer，但与此同时，需要在高阶组件中传入 **value**

- 处理这两个子组件

  - ```react
    const HocHome = withUser(Home);
    const HocAbout = withUser(About);
    ```

这里就可以在Context对象中处理公共的数据了。



###### 3、鉴权操作

---

高阶函数还可以用来做鉴权操作

下面是🌰：

比如我们当前有一个这样的需求，判断是否登录，如果登录后显示**CardPage**，假设没有登录，则让他返回**LoginPage**

- 首先需要创建CardPage和LoginPage两个组件

  - ```react
    class LoginPage extends PureComponent {
        render() {
            return (
                <div>
                    Login
                </div>
            )
        }
    }
    class CardPage extends PureComponent {
        render() {
            return (
                <div>
                    Card
                </div>
            )
        }
    }
    ```

- 创建高阶组件

  - ```react
    function loginHoc(WrappedComponent){
        return ({...props})=> {
        const {isLogin} = props
        if (isLogin) {
            return <WrappedComponent {...props}></WrappedComponent>
        }else {
            return <LoginPage></LoginPage>
        }
        }
    }
    ```

  - 高阶组件中我们做了一层判断，传入了  **isLogin** 的值（从传入的props解构出来），根据这个，来进行组件的分批次渲染。

- 然后处理组件

  - ```react
    const HocLogin = loginHoc(CardPage)
    ```

- 最后在父组件中做处理

  - ```react
    export default class LoginJudge extends PureComponent {
        render() {
            return (
                <div>
                   <HocLogin isLogin={true}></HocLogin> 
                </div>
            )
        }
    }
    
    ```

  - 这里我们传入了一个状态，状态名为 **isLogin** ，这里传入的值，就可以在高阶组件中通过props进行获取。

---

#### 7、Css



---

## 3、Redux

​	Redux是React生态中非常重要的一环

​	Redux是Javascript状态容器，提供可预测化的状态管理。

​	也是因为单页应用的开发，**JavaScript需要管理比任何时候都要更多的State**

​	也正是因为如此，Redux显得更为重要

---

### 1、核心原则

Redux有三个核心原则：

- 1、单一的数据源
  - 整个应用的state被储存在一棵object tree中，并且这个object tree只存在唯一一个store中
- 2、state是只读的
  - 唯一改变state的方法就是触发action，action是一个用于描述已发生事件的普通对象。
- 3、使用纯函数来执行修改
  - 为了描述 action 如何改变 state tree，你需要编写reducer

### 2、文件结构

---

#### 1、不借助中间件

​	主要由以下几个文件组成

- constances.js

  - 主要用来存储定义的字符串常量

  - ```react
    export const  ADD_ACTION = "ADD_ACTION"
    export const  DEL_ACTION = "DEL_ACTION"
    ```

- actionCreators.js

  - 参考

    [redux中关于action的描述]: https://www.redux.org.cn/docs/basics/Actions.html

  - 引入常量，定义action

  - action本质是javascript普通对象

  - 我们约定action内必须使用一个字符串类型的type字段来表示将要执行的动作，多数情况下，type会被定义为字符串常量。

  - ```react
    import { ADD_ACTION, DEL_ACTION } from "./constances";
    
    export const addAction = () => ({
      type: ADD_ACTION,
    });
    
    export const delAction = () => ({
      type: DEL_ACTION,
    });
    ```

- reducer.js

  - reducer 指定了应用状态的变化如何响应 actions 并发送到 store 中，action 只是描述了有事情发生这一事实，并没有描述应用如何更新 state 。

  - ```react
    import { ADD_ACTION,DEL_ACTION } from "./constances";
    
    const initState = {
      count: 0,
    };
    
    export default function reducer(state = initState, action) {
      switch (action.type) {
        case ADD_ACTION:
          return { ...state, count: state.count + 1 };
        case DEL_ACTION:
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    }
    ```

- index.js

  - 这里相当于 store ，用来练习我们之前写的 reducer 、action ，他的主要作用如下
  
    - 维持应用的 state
    - 提供 `getState()` 方法获取到 state
    - 提供 `dispatch(action)`方法更新 state
    - 通过`subscribe(listener)`来注册监听器
    - 通过 `subscribe(listener)`返回的函数注销监听器
  
  - **Redux应用只有一个单一的 Store ，但是可以拥有多个 Reducer**
  
  - ```react
    import { createStore } from "redux";
    import reducer from "./reducer";
    
    const store = createStore(reducer);
    export default store;
    ```
  
- App.jsx

  - 这里进行redux的引用与操作

  - 首先引入actions

    - ```react
      import { addAction, delAction } from "./actionCreators";
      ```

  - 然后在构造方法中进行赋值

    - ```react
      constructor(props) {
          super(props);
          this.state = store.getState();
        }
      ```

  - 定义事件，并完成绑定

    - ```react
      <h2>数字变换</h2>
              <br />
              <h2>{this.state.count}</h2>
              <br />
              <Button type="primary" onClick={() => this.changeClick(1)}>
                +1
              </Button>
              <br />
              <Button type="danger" onClick={() => this.changeClick(-1)}>
                -1
              </Button>
      ```

    - 这里触发了action事件

    - ```react
      changeClick(e) {
          switch (e) {
        case 1:
              store.dispatch(addAction());
            break;
            case -1:
              store.dispatch(delAction());
              break;
            default:
              message.success("error", 5);
              break;
          }
        }
      ```
      
    - 然后注册监听器和注销监听器

    - ```react
      componentDidMount() {
          this.unsubscribue = store.subscribe(() => {
            this.setState(store.getState());
          });
        }
        componentWillUnmount() {
          this.unsubscribue();
        }
      ```

#### 2、借助中间件

---

##### 1、Redux-thunk

---

**redux-thunk解决了一个问题**

  当我们在dispatch触发action更新state的时候，如果不借助中间件，那么我们只能传递一个对象，这带来了极大的限制。

  通过redux-thunk，我们可以传递一个函数。能在reducer里面进行一些异步的操作

  

  文件结构如下

- constants.js

  - ```react
    export const ADD_NUMBER = "ADD_NUMBER";
    export const SUB_NUMBER = "SUB_NUMBER";
    export const ADD_NULLNUMBER = "ADD_NULLNUMBER";
    
    export const CHANGE_BANNERS = "CHANGE_BANNERS";
    export const CHANGE_RECOMMENDS = "CHANGE_RECOMMENDS";
    export const FETCH_HOME_MUTLIDATA = "FETCH_HOME_MUTLIDATA"
    ```

- actionCreators.js

  - ```react
    import {
      ADD_NUMBER,
      SUB_NUMBER,
      ADD_NULLNUMBER,
      CHANGE_BANNERS,
      CHANGE_RECOMMENDS,
      FETCH_HOME_MUTLIDATA,
    } from "./constants.js";
    
    import axios from "axios";
    
    export const addAction = (num) => ({
      type: ADD_NUMBER,
      num,
    });
    
    export const subAction = (num) => ({
      type: SUB_NUMBER,
      num,
    });
    
    export const addNullAction = () => ({
      type: ADD_NULLNUMBER,
    });
    
    export const changeBannersAction = (banners) => ({
      type: CHANGE_BANNERS,
      banners,
    });
    
    export const changeRecommendsAction = (recommends) => ({
      type: CHANGE_RECOMMENDS,
      recommends,
    });
    
    // redux-thunk中定义的action函数
    export const getHomeMultiDataAction = (dispatch) => {
      console.log("111", dispatch);
      axios({
        url: "http://123.207.32.32:8000/home/multidata",
      }).then((res) => {
        const data = res.data.data;
        console.log(data);
        dispatch(changeBannersAction(data.banner.list));
        dispatch(changeRecommendsAction(data.recommend.list));
      });
    };
    ```

- reducer.js

  - ```react
    import {
      ADD_NUMBER,
      SUB_NUMBER,
      ADD_NULLNUMBER,
      CHANGE_BANNERS,
      CHANGE_RECOMMENDS,
    } from "./constants";
    
    const initState = {
      count: 0,
      banners: [],
      recommends: [],
    };
    
    // 这样就可以actionTypes.XXX来引入
    // import * as actionTypes from './constants'
    
    function reducer(state = initState, action) {
      switch (action.type) {
        case ADD_NUMBER:
          return { ...state, count: state.count + action.num };
        case SUB_NUMBER:
          return { ...state, count: state.count - action.num };
        case ADD_NULLNUMBER:
          return { ...state, count: state.count + 1 };
        case CHANGE_BANNERS:
          return { ...state, banners: action.banners };
        case CHANGE_RECOMMENDS:
          return { ...state, recommends: action.recommends };
        default:
          return state;
      }
    }
    
    export default reducer;
    ```

- index.js

  - ```react
    import { createStore, applyMiddleware,compose} from "redux";
    import thunkMiddleware  from 'redux-thunk'
    import reducer from "./reducer";
    
    // composeEnhancers函数
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    
    
    // 应用中间件
    const storeEnhancer =  applyMiddleware(thunkMiddleware)
    
    const storeEnhancer = applyMiddleware(thunkMiddleware)
    
    const store = createStore(reducer,composeEnhancers(storeEnhancer));
    
    export default store;
    ```

- App.jsx

  - ```react
    // 引入connect 使得 React 组件可以被连接
    import { connect } from "react-redux";
    
    import axios from 'axios'
    
    import { addAction, subAction, addNullAction,changeBannersAction,changeRecommendsAction } from "../flow/actionCreators";
    
    componentDidMount() {
            axios({
                url:'http://123.207.32.32:8000/home/multidata'
            }).then(res=>{
                const data = res.data.data
                console.log(data);
                this.props.changeBanners(data.banner.list)
                this.props.changeRecommends(data.recommend.list)
            })
        }
    ```

  - render中绑定事件

  - ```react
    <h2>Home</h2>
            <br />
            <h2>当前计数：{this.props.count}</h2>
            <br />
    
            <Button type="primary" onClick={() => this.props.addFiveClick(5)}>
              +5
            </Button>
            <br />
            <Button onClick={() => this.props.delFiveClick(5)}>-5</Button>
            <br />
            <Button type="danger" onClick={() => this.props.addOneClick()}>
              +1
            </Button>
            <br/>
            <h2>Banners</h2>
            <div>
            {
                this.props.banners.map((item,index)=>{
                    return  <li key={index}>
                        <div>
                            {item.title}
                        </div>
                        <img src={item.image} alt=""/>
                    </li>
                })
            }
            </div>
    ```

  - 触发action

  - ```react
    const mapStateToProps = (state) => {
      return {
          count: state.count,
          banners: state.banners,
          recommend: state.recommends
      }
    };
    
    const mapDispatchToProps = (dispatch) => ({
      addFiveClick() {
        dispatch(addAction());
      },
      delFiveClick() {
        dispatch(subAction());
      },
      addOneClick() {
        dispatch(addNullAction());
      },
      changeRecommends(recommends){
          dispatch(changeRecommendsAction(recommends))
      },
      changeBanners(banners){
          dispatch(changeBannersAction(banners))
      }
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    ```

##### 2、Redux-saga

---

redux-saga与redux-thunk非常类似，但有一些不同

saga 使用了 ES6 的Generator功能，这使得异步的流程更容易读取、写入和测试。通过这样的方式，这些异步的流程看起来像同步的 js 代码，有点像 `async await`  。



文件结构如下：

- constants.js

  - ```react
    export const CHANGE_BANNERS = "CHANGE_BANNERS";
    export const CHANGE_RECOMMENDS = "CHANGE_RECOMMENDS";
    
    export const FETCH_HOME_MUTLIDATA = "FETCH_HOME_MUTLIDATA"
    ```

- actionCreators.js

  - ```react
    import {
      FETCH_HOME_MUTLIDATA,
    } from "./constants.js";
    
    export const changeBannersAction = (banners) => ({
      type: CHANGE_BANNERS,
      banners,
    });
    
    export const changeRecommendsAction = (recommends) => ({
      type: CHANGE_RECOMMENDS,
      recommends,
    });
    
    // redux-saga中间件的action函数
    export const fetcHomeMultiDataAction = {
      type: FETCH_HOME_MUTLIDATA,
    };
    ```
- reducer.js

  - ```react
    import {
      CHANGE_BANNERS,
      CHANGE_RECOMMENDS,
    } from "./constants";
    const initState = {
      banners: [],
      recommends: [],
    };
    
    // 这样就可以actionTypes.XXX来引入
    // import * as actionTypes from './constants'
    
    function reducer(state = initState, action) {
      switch (action.type) {
        case CHANGE_BANNERS:
          return { ...state, banners: action.banners };
        case CHANGE_RECOMMENDS:
          return { ...state, recommends: action.recommends };
        default:
          return state;
      }
    }
    
    export default reducer;
    ```

- saga.js

  - ```react
    import { takeEvery, put, all, takeLatest } from "redux-saga/effects";
    import axios from "axios";
    import { FETCH_HOME_MUTLIDATA } from "./constants";
    import { changeBannersAction, changeRecommendsAction } from "./actionCreators";
    
    // 第二个参数  是个生成器函数
    function* fetcHomeMultiDataAction(action) {
      const res = yield axios.get(`http://123.207.32.32:8000/home/multidata`);
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommends;
      // yield put(changeBannersAction(banners))
      // yield put(changeRecommendsAction(recommends))
      yield all([
        yield put(changeBannersAction(banners)),
        yield put(changeRecommendsAction(recommends)),
      ]);
    }
    
    function* saga() {
      // takeLatest takeEvery区别
      // takeLatest 依次只能监听一个对应的action
      // takeEvery  每一个都会被监听执行
      // yield takeEvery(FETCH_HOME_MUTLIDATA,fetcHomeMultiDataAction)
      yield all([takeLatest(FETCH_HOME_MUTLIDATA, fetcHomeMultiDataAction)]);
    }
    
    export default saga;
    ```

- index.js

  - ```react
    import { createStore, applyMiddleware,compose} from "redux";
    import reducer from "./reducer";
    import createSagaMiddleware from 'redux-saga'
    import saga from './saga'
    
    // composeEnhancers函数
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    
    
    // 创建saga中间件
    const sagaMiddleware = createSagaMiddleware()
    
    // 应用saga中间件
    const storeEnhancer = applyMiddleware(sagaMiddleware)
    
    const store = createStore(reducer,composeEnhancers(storeEnhancer));
    
    sagaMiddleware.run(saga)
    export default store;
    
    ```

---

##### 3、拆分

---

​	拆分是为了更好对其进行一些细致的操作，方便管理不同的的reducer，使得代码的结构更加清晰简明



​	分别创建不同的 actionCreators、contants、index、reducer

- contants

  - ```react
    //01
    
    export const ADD_FIVE_COUNT = "ADD_FIVE_COUNT";
    export const DEL_FIVE_COUNT = "DEL_FIVE_COUNT";
    ```
    
  - ```react
    //02
    
    export const ADD_COUNT = "ADD_COUNT"
    export const DEL_COUNT = "DELETE_COUNT"
    ```
  
- actionCreators

  - ```react
    //01
    
    import { ADD_FIVE_COUNT, DEL_FIVE_COUNT } from "./contants";
    
    export const addFiveAction = (num) => ({
      type: ADD_FIVE_COUNT,
      num,
    });
    
    export const delFiveAction = (num) => ({
      type: DEL_FIVE_COUNT,
      num,
    });
    ```
    
  - ```react
    //02
    
    import { ADD_COUNT, DEL_COUNT } from "./constants";
    
    export const addAction ={
      type: ADD_COUNT,
    }
    
    export const delAction = {
        type:DEL_COUNT,
    }
    ```

- reducer

  - ```react
    //01
    
    import { ADD_FIVE_COUNT, DEL_FIVE_COUNT } from "./contants";
    
    const initialState = {
      count: 0,
    };
    
    function reducer(state = initialState, action) {
      switch (action.type) {
        case ADD_FIVE_COUNT:
          return { ...state, count: state.count + action.num };
        case DEL_FIVE_COUNT:
          return { ...state, count: state.count - action.num };
        default:
          return state;
      }
    }
    
    export default reducer;
    ```

  - ```react
    //02
    
    import { ADD_COUNT, DEL_COUNT } from "./constants";
    
    const initialState = {
      count: 0,
    };
    
    function countReducer(state = initialState, action) {
      switch (action.type) {
        case ADD_COUNT:
          return { ...state, count: state.count + 1 };
        case DEL_COUNT:
          return { ...state, count: state.count - 1 };
    
        default:
          return state;
      }
    }
    
    export default countReducer;
    ```

- index

  - ```react
    import reducer from './reducer'
    
    export{
        reducer
    }
    ```

  

  然后进行不同reducer的合并操作

- 首先合并reducer

  - ```react
    import { reducer as countReducer } from "./Demo";
    
    import { reducer as countFiveReducer } from "./CountFive";
    
    import { combineReducers } from "redux";
    
    const reducer = combineReducers({
      countInfo: countReducer,
      countFiveInfo:countFiveReducer
    });
    
    export default reducer;
    ```

- 配置saga中间件

  - ```react
    import { takeEvery } from "redux-saga/effects";
    import { ADD_COUNT, DEL_COUNT } from "./Demo/constants";
    import { addAction, delAction } from "./Demo/actionCreators";
    
    function* saga() {
      yield takeEvery([
        { ADD_COUNT, addAction },
        { DEL_COUNT, delAction },
      ]);
    }
    
    export default saga;
    ```

- 合并到store

  - ```react
    import { createStore, applyMiddleware, compose } from "redux";
    import reducer from "./reducer";
    import createSagaMiddleware from "redux-saga";
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const sagaMiddleware = createSagaMiddleware();
    
    const storeEnhancer = applyMiddleware(sagaMiddleware);
    
    const store = createStore(reducer, composeEnhancers(storeEnhancer));
    
    export default store;
    
    ```



​	然后在组件中就可以通过触发action来使用redux了

- 借助 connect 这个 redux 的 api

  - ```react
    import { connect } from "react-redux";
    ```

- 引入actionCreators

  - ```react
    import { delAction, addAction } from "../redux/Demo/actionCreators";
    import {
      delFiveAction,
      addFiveAction,
    } from "../redux/CountFive/actionCreators";
    ```

- 在组件中绑定事件

  - ```react
     <div className="cursor-wait ...">{this.props.count}</div>
     <br />
     <Button onClick={() => this.props.delCountClick()}>减少</Button>
     <br />
     <Button onClick={() => this.props.addCountClick()}>增加</Button>
      
     <h2 className="mt1">这里是+5的count展示</h2>
      
     <div className="cursor-wait ...">{this.props.countFive}</div>
     <br />
     <Button onClick={() => this.props.delCountFiveClick(5)}>减少</Button>
     <br />
     <Button onClick={() => this.props.addCountFiveClick(5)}>增加</Button>
    ```

- 触发action

  - ```react
    const mapStateToProps = (state) => {
      return {
        count: state.countInfo.count,
        countFive: state.countFiveInfo.count,
      };
    };
    
    const mapDispatchToProps = (dispatch) => ({
      addCountClick() {
        dispatch(addAction);
      },
      delCountClick() {
        dispatch(delAction);
      },
      delCountFiveClick(num) {
        dispatch(delFiveAction(num));
      },
      addCountFiveClick(num) {
        dispatch(addFiveAction(num));
      },
    });
    
    //导出
    export default connect(mapStateToProps, mapDispatchToProps)(Demo);
    ```

---

## 4、Hook

​	**Hook 是 React 16.8 新增的特性，它可以让你在不编写 Class 的情况下使用 state 以及其他的 React 特性**

​	Hook 产生的动机

 -	在组件中复用状态逻辑很难
-	复杂组件变得越来越难以理解
-	难以理解的 Class



​	**Hook 就是 javascript 函数，但是它使用的时候有两个额外的规则**

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件还有自定义 Hook 中调用 Hook，不要在其他 Javascript 函数中调用。



### 1、useState

---

```react
const [state, setState] = useState(initialState);
```

​	返回一个 state ，以及更新 state 的函数。

​	在初始渲染期间，返回的状态（ state ）与传入的第一个参数（ initialState ）相同。

​	setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

```react
setState(newState);
```

​	**React 会确保 setState 函数的标识是稳定的，并且不会在组件重新渲染的时候发生变化。这就是为什么可以安全的从 useEffect 或者 useCallback 的依赖中省略 setState**

​	state是一个懒惰初始 state

​	initialState 参数只会在组件的初始渲染中起作用，如果初始 state 需要通过复杂计算获得，那么可以传入一个函数，在函数中计算并返回初始的 state ，此函数只在初始渲染的时候被调用

```react
const [state,setState] =  useState(()=>{
    const initalState  = initEvents(props)
    return initalState
})
```

​	与 class 组件中的 `setState` 方法不同，`useState` 不会自动合并更新对象。你可以用函数式的 `setState` 结合展开运算符来达到合并更新对象的效果。

​	完成的 useState 🌰如下：

```react
import  React,{useState} from 'react'
export default function CountHook() {
    const [count,setCout] = useState(0)

    const [student,setStudent] = useState([
        {name:'yukiice',age:18},
        {name:'yukiice',age:18},
        {name:'yukiice',age:18},
    ])
    function addClick(e){
        const newStudent = [...student]
        newStudent[e].age += 1 
        setStudent(newStudent)
    }
    return (
        <div>
            <Button type="primary" onClick={()=> setCout(count + 1)}>增加</Button>
        <h2>{count}</h2>
            <Button type="primary" onClick={()=> setCout(count - 1)}>减少</Button>

            <br/>
            <br/>
            
            <h2>这里是学生页面</h2>
            <br/>
            <ul>
                {
                    student.map((item,index)=>{
                        return (
                            <li key={index}>
                                <span>姓名：{item.name} 年龄：{item.age}</span>
                                <Button size="small" onClick={()=>addClick(index)}>增加</Button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
```



---

### 2、useEffect

---

​	useEffect 该 Hook 接收一个包含命令式、且有可能是副作用代码的函数

```react
useEffect(()=>{
    
})
```

​	**useEffect 将在执行DOM更新之后调用。**

​	**useEffect 将在每次渲染后都会执行。**

​	需要在组件内部调用 useEffect，因为在组件内部 effect 中能直接访问 count、state 变量。它已经保存在函数作用域中了，Hook 使用了 Javscript 的闭包机制。

 	在函数主体内（这里指的是在 React 渲染阶段）改变 DOM 、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 BUG 并破坏 UI 的一致性。

​	使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行，

​	默认情况下，effect将在每轮渲染结束后执行，但你可以渲染让他在某些值改变的时候才执行。

#### 1、清除 effect

​	useEffect 函数可以返回一个清除函数，如下🌰：

```
useEffect(() => {
  //这里是effect作用
  return () => {
  //这里清除effect
  };
});
```

​	**为了防止内存泄露，清除函数会在组件写在组件卸载前执行，**另外，如果组件多次渲染（通常就会这样），则在执行下一个 Effect 之前，上一个 Effect 就已经被清除，在上述事例中，一味着组件的每一次更新都会创建新的订阅。

#### 2、Effect 的执行时机

​	与 componentDidMount 还有 componentDidUpdate 不同，在浏览器完成布局和绘制之后，传给 useEffect 的函数会延迟调用。这使得它试用于很多常见的副作用场景，比如订阅事件和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。

​	Hook允许我们按照代码的用途分离他们，而不是像生命周期那样，React 将按照 effect 声明的顺序依次调用组件的每一个 effect。

#### 3、Effect性能优化

​	useEffect 可以通过监听特定值在两次渲染之间是否发生变化来选择是否跳过对此 Effect 的调用。需要传递一个数组作为 useEffect 的第二个可选参数

```react
useEffect(() => {
    
}, [count]); // 仅在 count 更改时更新
```

##### 1、安全问题	

**需要注意，如果组件内部作用域中用到了什么值，那么要注意**！如下🌰

```react
function Example({ someProp }) {
  function doSomething() {
    console.log(someProp);
  }

  useEffect(() => {
    doSomething();
  }, []); // 🔴 这样不安全（它调用的 `doSomething` 函数使用了 `someProp`）
}
```

​	通常情况下，要记住 effect 外部的函数使用了哪些 props 和 state 很难，这也是为什么会想在 effect 内部去声明它所需要的函数，这样就能容易看出那个 effect 依赖了组件作用域中的哪些值。

​	需要这样处理，如下🌰：

```react
function Example({ someProp }) {
  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }

    doSomething();
  }, [someProp]); // ✅ 安全（我们的 effect 仅用到了 `someProp`）
}
```

​	当然，如果我们没有用到任何组件作用域中的任何值，那么就可以将其指定为 []

```react
useEffect(() => {
  function doSomething() {
    console.log('hello');
  }

  doSomething();
}, []); // ✅ 在这个例子中是安全的，因为我们没有用到组件作用域中的 *任何* 值
```

##### 2、effect 频繁变化问题 

​	如果你传入空的依赖数组 `[]` ，那么意味着该Hook只会在组件挂载时候运行一次，并非重新渲染。如果你这样写的话，那么相当于在 effect 执行的时候，创建了一个闭包，并将 state 的值保存在该闭包中，且一直为初始值，这样你后面的更新，state 也会一直为初始值。

```react
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // 这个 effect 依赖于 `count` state
    }, 1000);
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` 没有被指定为依赖

  return <h1>{count}</h1>;
}
```

​	**指定 `[count]` 可以解决这个问题，但是会导致每次改变发生的时候定时器都会被重置。** 因此。我们**可以使用setState 的函数式更新，它允许我们指定 state 该如何改变而不引用当前 state 。**

```react
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量

  return <h1>{count}</h1>;
}
```

​	这里每次 setCount 内部的回调取到的 count 都是最新值（在会调用变量命名为 c）

---

### 3、useContext

---

​	useContext  接收一个 context 对象并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 < .Provider> 的 `value` prop 来决定

​	当组件上层最近的 `<Context.Provider>` 更新时候，该 Hook 会触发重新渲染，并使用最新传递给 Context Provider 的 context value值。即使祖先使用了 memo、shouldComponentUpdate，也会在组件本身使用 `useContext` 时候重新渲染。 

- context.js

```react
import React,{useContext} from 'react'
import { UserContext,ThemeContext } from "./ContextHookDemo";
export default function Context() {
    const user  = useContext(UserContext);
    const theme = useContext(ThemeContext)
    console.log(user,theme)
    return (
        <div>
            context
        </div>
    )
}
```

- ContextDemo.js

```react
import Context from './Context'
export const UserContext = createContext()
export const ThemeContext = createContext()

<UserContext.Provider value={{name:'yukiice',age:18}}>
                <ThemeContext.Provider value={{name:"dell",age:20}}>
                    <Context></Context>
                </ThemeContext.Provider>
</UserContext.Provider>
```

---

### 4、useReducer

---

​	useState 的替代方案。

​	在某些场景下，useReducer 比 useState 更为适用，例如 state 逻辑复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以像子组件传递 dispatch 而不是回调函数。

```react
// 定义reducer函数
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }

        case 'decrement':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}
export default function RecucerHook() {
// userReducer实际可以传入三个值，reducer,initstate,func  但第三个是一个函数，并不经常用
const [state, dispatch] = useReducer(reducer, { count: 0 })
return (
        <div>
            <h2>当前计数：{state.count}</h2>
            <Button onClick={() => dispatch({ type: "increment" })}>增加</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>减少</Button>
        </div>
    )
}
```

---

### 5、useCallback

---

​	useCallback 在将一个组件中的函数，传递给子元素进行回调使用的时候，使用 useCallback 进行处理

```react
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },[a, b],);
```

​	返回了一个 `memoized` 回调函数

​	把内联回调函数以及依赖项数组作为参数传入`useCallBack`，它将返回该回调参数的`memoized(意味记住)`版本，该回调函数仅在某个依赖项改变的时候才会发生更新，当你把回调函数传递给经过优化并使用引用相等性去避免非必要渲染的子组件的时候，`useCallback`将会变得非常的有用。

---

### 6、useMemo

----





---

### 7、useRef

----



---

### 8、useImperativeHandle

---









​	

