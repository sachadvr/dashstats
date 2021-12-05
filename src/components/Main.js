import "./css/Main.css";
import Grid from "./Grid.js";
import myJson from "../values.json";

function Main() {
    const newdata = myJson.map((myJson) => {
        return (
            <Grid name={myJson.name} value={myJson.value} />
        )
    })
    return (
        <div id="main">
            <div id="homepage">
                <div id="search">
                    <i className="fas fa-search"></i>
                    <input
                        type="search"
                        id="site-search"
                        name="q"
                        aria-label="Search through site content"
                    ></input>
                </div>
                <div id="toppanel">
                    <p>Bonjour Sacha</p>
                    <span>De retour parmis-nous?</span>
                    <div id="btn">
                        <a href="#">Filtres </a>
                        <i className="fas fa-sliders-h"></i>
                    </div>
                </div>
                <div id="secondpanel">
                    <div id="grid">
                        {newdata}
                        <Grid name="lol" value="30" />
                    </div>
                </div>
            </div>
            <div id="rightsidebar">
                <p>Sales</p>
            </div>
        </div>
    );
}

export default Main;
