import "./css/Main.css";

function Main() {
    return (
        <div id="main">
            <div id="homepage">
                <div id="search">
                    <i class="fas fa-search"></i>
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
                        <p>
                            <i className="far fa-eye"></i>
                            <span>Views </span>500
                        </p>
                        <p>
                            <i className="far fa-eye"></i>
                            <span>Visists </span>2000
                        </p>
                        <p>
                            <i className="far fa-eye"></i>
                            <span>Orders </span>5100
                        </p>
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
