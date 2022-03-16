import React from 'react';
import Left3 from './Left3';

const Left2 = ({state}) => {
    return (
        <div>
            Left2 입니다 &nbsp;
            <Left3 state={state}></Left3>           
        </div>
    );
};

export default Left2;