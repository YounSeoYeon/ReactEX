import { useDispatch } from 'react-redux';

function Right3() {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Right3</h3>
            <button onClick={
                () => { dispatch({ type: "MINUS" }) }
            }>-</button> &nbsp;
            <button onClick={
                () => { dispatch({ type: "ADD" }) }
            }>+</button>
        </div>
    );
}

export default Right3;