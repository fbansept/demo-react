import "./App.css";
import Sidemenu from "./composants/common/Sidemenu/Sidemenu";
import Header from "./composants/common/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <Sidemenu></Sidemenu>
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
