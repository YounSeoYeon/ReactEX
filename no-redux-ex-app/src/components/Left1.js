import React from 'react';
import Left2 from './Left2';

const Left1 = ({state}) => {
    return (
        <div>
            left1입니다 : {state}
            <Left2 state={state}></Left2>
        </div>
    );
};

export default Left1;