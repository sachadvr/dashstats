import './css/Sidebar.css'
import Item from './Item.js'

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="title"><p>Dash</p></div>
      <div id="drop">
        <ul>
          <Item c="fas fa-home" active="true" value="Home"/>
          <Item c="fas fa-trophy" value="Projects"/>
          <Item c="fas fa-house-damage" value="Billings"/>
          <Item c="fas fa-user" value="Team Members"/>
          <Item c="fas fa-chart-line" value="Stats"/>
          <Item c="fas fa-cog" value="Settings"/>
        
        </ul>
        </div>
      
    </div>
  );
}

export default Sidebar;
