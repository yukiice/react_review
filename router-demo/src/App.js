import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import About from './components/About.jsx'
import Home from './components/Home'
import Profile from './components/Profile'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <br/>
        <Link to="/about">关于</Link>
        <br/>
        <Link to="profile">我的</Link>
        <br/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile" component={Profile}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
