import React, { PureComponent } from 'react'
import "./App.css";
// Link,


import { BrowserRouter,  Route, NavLink,Switch,withRouter} from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home";
import Profile from "./components/Profile";
import User from './components/User'
import NoMatch from './components/NoMatch'
class App extends PureComponent {
  btnClick(){
    this.props.history.push('/nomatch')
  }
  render() {
    return (
      <div>
      <button onClick={()=>this.btnClick()}>点击进行跳转</button>
      <BrowserRouter>
        <NavLink to="/" activeClassName="hover" exact>首页</NavLink>
        <NavLink to="/about" activeClassName="hover">关于</NavLink>
        <NavLink to="/profile" activeClassName="hover">我的</NavLink>
        {/* <Link to="/"> 首页</Link>
        <br />
        <Link to="/about">关于</Link>
        <br />
        <Link to="profile">我的</Link>
        <br /> */} 
       <Switch>
       <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route></Route>
       </Switch> 
      </BrowserRouter>
    </div>
    )
  }
}


export default withRouter(App);
