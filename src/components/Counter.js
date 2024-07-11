import React, {useState} from "react";

const Counter = (props) => {
  const [count, setCount] = React.useState(props.likes); //CONFIRM: You can set a different initial value for the count and have it display in the browser
  const [color, setColor] = useState("black");

  const handleColorChange = () => {
    const colors = ["blue", "red", "green", "purple", "orange", "pink", "white", "navy", "gray"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const increment = () => {
    //TODO: Finish the increment function to set a new state object with the incremented count
    setCount(count + 1);
    handleColorChange();
  };

  return (
    <div className="Hearts" onClick={increment} style={{color:color}}>
      {props.message} {count}
    </div>
  );
  //props.message = "Way to go!" //CONFIRM: Properties CAN'T be changed; uncommenting this line causes an error
};

export default Counter;
