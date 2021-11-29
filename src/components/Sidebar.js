import './css/Sidebar.css'

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="title"><p>Dash</p></div>
      <div id="drop">
        <ul><li id="active"><i className="fas fa-home"></i><a href="#">Home</a></li>
        <li><i className="fas fa-trophy"></i><a href="#">Projects</a></li>
        <li><i className="fas fa-house-damage"></i><a href="#">Billings</a></li>
        <li><i className="fas fa-user"></i><a href="#">Team Members</a></li>
        <li><i className="fas fa-chart-line"></i><a href="#">Stats</a></li>
        <li><i className="fas fa-cog"></i><a href="#">Settings</a></li></ul>
        </div>
      
    </div>
  );
}

export default Sidebar;
