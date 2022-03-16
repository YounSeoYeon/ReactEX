import React from 'react';

const Content = ({onAdd}) => {
    return (
        <div className='content'>
            content영역입니다 &nbsp;
            <button onClick={onAdd}>+</button>
        </div>
    );
};

export default Content;