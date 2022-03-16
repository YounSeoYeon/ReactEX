import React, { useState } from 'react';

const Content2 = ({onTitleChange}) => {
    const [inputValue,setInputValue] = useState('');
    const onChange = (e) => setInputValue(e.target.value);
    return (
        <div className='content2'>
            <input type='text' value={inputValue} onChange={onChange} />
            <button onClick={()=>{
                onTitleChange(inputValue);
                setInputValue('');
            }}>변경</button>
        </div>
    );
};

export default Content2;