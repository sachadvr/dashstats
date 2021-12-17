const Item = (props) => {
  return (
    <li>
      <a id={props.id} href="index.html">
        <i className={props.c}></i>
        <span>{props.value}</span>
      </a>
    </li>
  );
};

export default Item;
