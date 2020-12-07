import React, {useState} from "react";

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{padding: '20px', border: '1px solid #000'}}>
      <h1>这是react17版本APP2应用</h1>
      <p>You clicked {count} times1</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Button;
