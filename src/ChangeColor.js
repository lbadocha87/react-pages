import React, { useState } from 'react';


const  ChangeColor = () => {
    const [classValue, setClassValue] = useState('green');

    console.log(useState('test'));

 
    
    return (
        <div>
            <h2 className={classValue}>{classValue}</h2>
            <button onClick={()=>setClassValue('red')}>red</button>
            <button onClick={()=>setClassValue('green')}>green</button>
            <button onClick={()=>setClassValue('blue')}>blue</button>
        </div>
    );
}


export default ChangeColor;