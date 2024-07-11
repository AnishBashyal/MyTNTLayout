import React from "react";
import "./App.css";
import Tile from "./components/Tile";
import Card from "./components/Card";
import Item from "./components/Item";

function App() {
  const divTileStyle = {
    padding: "8px 0px",
    backgroundColor: "#90B6F8",
  };

  return (
    //TODO:  Add multiple Card components inside the <Tile>
    //       Add several Item components to each <Card>
    //       (see the screenshot for the completed My TNT Exercise)

    <div style={divTileStyle}>
      <h1 className="App-header">My TNT</h1>
      <Tile name="Contacts">
        <Card
          title="New Technologist"
          description="Friends from the TNT program"
          website="https://newtechnologist.com"
        >
          <Item name="Anish Bashyal" email="v-abashyal@microsoft.com"></Item>
          <Item name="David Lee" email="v-dlee@microsoft.com"></Item>
          <Item name="Prithvi Karki" email="v-pkarki@microsoft.com"></Item>
        </Card>
        <Card
          title="Instruction"
          description="Connect on LinkdIn to keep in touch"
          website="https://linkedin.com"
        >
          <Item name="Sarah Farag" email="v-sfarag@microsoft.com"></Item>
        </Card>

        <Card title="Coach" description="Incredible support">
          <Item
            name="Komivi Agbakpem"
            email="v-koagbakp@microsoft.com"
            team="5"
          ></Item>
          <Item
            name="Munya Chiro"
            email="v-muchiro@microsoft.com"
            team="5"
          ></Item>
        </Card>
      </Tile>
    </div>
  );
}

export default App;
