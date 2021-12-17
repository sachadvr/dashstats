import "./App.scss";
import "../Media/mediaq.scss";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Main from "../Main/Main.jsx";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
