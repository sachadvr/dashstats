import myJson1 from "../../values.json";
import Grid from "./Grid.jsx";

const GridList = (props) => {
  const myJson = props.json;
  return (
    <>
      {myJson.map((key) => {
        if (props.type === "list") {
          return <p key={key.name}>{key.name}</p>;
        } else if (props.type === "grid") {
          return <Grid key={key.name} name={key.name} value={key.value} />;
        }
      })}
    </>
  );
};

export default GridList;
