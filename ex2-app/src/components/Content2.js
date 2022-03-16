import React from 'react';

const Content2 = ({onPlus,onMinus}) => {
    return (
        <div className='content'>
        Content2 입니다 :
        <button onClick={onMinus}>-</button>
        <button onClick={onPlus}>+</button>
        </div>
    );
};

export default Content2;