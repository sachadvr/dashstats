function Item(props) {
    function check() {
        if (props.active != null && props.active == "true") {
            return (
                <li>
                    
                    <a id="active" href="#"><i className={props.c}></i>{props.value}</a>
                </li>
            );
        } else {
            return (
                <li>
                    
                    <a href="#"><i className={props.c}></i>{props.value}</a>
                </li>
            );
        }
    }
    return check();
}

export default Item;
