import React, { useState } from "react";
import Counter from "./Counter";

const Tile = (props) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="Tile">
      <h1>{props.name}</h1>
      <div>{props.children}</div>
      <Counter message="&hearts;:" likes={likes} />
    </div>
  );
};

export default Tile;
//Usage sample: <Tile> ... Card components go here ... </Tile>
