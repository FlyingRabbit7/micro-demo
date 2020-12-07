import React, {useState} from 'react';

const Table = function () {
    require('react-dom');
    window.React2 = require('react');
    console.log(window.React1 === window.React2);
    const [num, setNum] = useState(0);
    const onAdd = function() {
        setNum(num + 1);
    } 
    return (
        <div>
            <h1>hooks {num}</h1>
            <button onClick={onAdd}>add</button>
        </div>
    )
}

export default Table;



// class Table extends React.Component {
//     render() {
//       return (
//         <>
//           <h1>
//             Hello 11111
//           </h1>
//         </>
//       );
//     }
//   }
  
//   export default Table;