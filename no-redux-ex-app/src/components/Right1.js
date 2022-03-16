import React from 'react';
import Right2 from './Right2';

const Right1 = ({onCountAdd,onCountMinus}) => {
    return (
        <div>
            Right1입니다 &nbsp;
            <Right2 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right2>  
        </div>
    );
};

export default Right1;