import React, {useState} from 'react';

const Content = function () {
    const [name, setName] = useState('leo1');
    return (
        <div>{name}</div>
    )
}

export default Content