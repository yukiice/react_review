import './App.css';
import { Demo } from "./component/Demo";
import { Jsx1 } from './component/jsx1';
import { Number } from "./component/Number";
function App() {

  return (
    <div>
      <Demo></Demo>
      <div>
        Demo下面
     </div>
      <br />
      <Number></Number>
      <br/>
      <Jsx1></Jsx1>
    </div>
  );
}

export default App;
