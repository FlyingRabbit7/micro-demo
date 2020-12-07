import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>You clicksfsdfded {num} times</p>
      <button onClick={() => setNum(num + 1)}>
        Click mesdf
      </button>
    </div>
  );
}

// function Example() {
//   // 声明一个叫 "count" 的 state 变量
//   // const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked 1 times</p>
//       <button >
//         Click me
//       </button>
//     </div>
//   );
// }

export default Example;