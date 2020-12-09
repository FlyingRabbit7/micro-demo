import React, {useState} from "react";

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = (props) => {
  console.log(props, 'app2props')
  function getInitState(){
    return props.num;
  }
  const count = props.num;
  // const [count, setCount] = useState(getInitState);

  const handleAdd = () => {
    // setCount(count+1);
    props.onAdd(count+1);
  }

  return (
    <div style={{padding: '20px', border: '1px solid #000'}}>
      <h1 style={{color: '#fff'}}>这是react17版本APP2应用</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleAdd}>
        Click me
      </button>
    </div>
  );
};

export default Button;
