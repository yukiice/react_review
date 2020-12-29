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

​	比如你调用了多次setState来操作数据，那么react会只取你的其中一次，如下🌰

- ```
  this.setState((prevState,props)=>{
          return { 
              count:prevState.count + 1
          }
      })
      this.setState((prevState,props)=>{
          return {
              count:prevState.count + 1
          }
      })
  ```

- **这里的prevState是之前的state**

  但如果你确实是想要执行多次同样的setState，那么，你可以如下🌰所示

- 

