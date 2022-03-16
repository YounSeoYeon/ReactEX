import React from 'react';

const Right3 = ({onCountAdd,onCountMinus}) => {
    return (
        <div>
            right3입니다 &nbsp;
            <button onClick={onCountMinus}>-</button>
            <button onClick={onCountAdd}>+</button>
        </div>
    );
};

export default Right3;