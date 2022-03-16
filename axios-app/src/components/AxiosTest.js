import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {
    // state
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async ()=>{
        setLoading(true);
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
        setData(response.data);
    }

    // 렌더링 할 때 마다 호출
    // 빈배열 : loadData() 한번만 호출
    useEffect(()=>{
        loadData();
    },[]);

    // data를 JSON 오브젝트로 변환해서 key,value 추출
    const jsonObj = JSON.parse(JSON.stringify(data)); // 변환
    let result = [];
    for(var key in jsonObj){ //key-인덱스 / jsonObj-전체배열
        result.push(
            <tr><td>{key}</td><td>{jsonObj[key]}</td></tr>
        )
    }

    return (
        <div>
            axios입니다
            <h3>서버로 부터 받아온 값</h3>
            {/* 데이터를 문자열로 변환 */}
            {JSON.stringify(data)}
            <br/>
            <table border='1'>
                {result}
            </table>
        </div>
    );
};

export default AxiosTest;