import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
function Home(Items) {
  const itemsArr = Items.props;
  console.log(Items.props);
  return (
    <div>
      {itemsArr.map((item) => {
        return <Item key={JSON.stringify(item)} props={item}></Item>;
      })}
    </div>
  );
}
export default Home;
