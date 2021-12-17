import "./Sidebar.scss";
import ItemList from "../Item/Itemlist.jsx";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="title">
        <p>Dash</p>
      </div>
      <div id="drop">
        <ul>
          <ItemList />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
