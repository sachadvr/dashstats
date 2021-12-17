import Item from "./Item.jsx";
import SidebarJson from "../Sidebar/sidebar.json";

const Itemlist = () => {
  return (
    <>
      {SidebarJson.map((e) => {
        if ((e.active !== null) & (e.active === "true")) {
          return (
            <Item
              key={e.className}
              c={e.className}
              id="active"
              value={e.value}
            />
          );
        } else {
          return <Item key={e.className} c={e.className} value={e.value} />;
        }
      })}
    </>
  );
};

export default Itemlist;
