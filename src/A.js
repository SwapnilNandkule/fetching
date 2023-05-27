import React,{useEffect} from 'react';
import { fetchData } from './Redux/Action';
import {useSelector, useDispatch} from 'react-redux';

const A = () => {

    const dispatch = useDispatch();
    const users = useSelector((state)=> state.data);

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);
    
      useEffect(() => {
        console.log(users);
      }, [users]);
    

    return (
        <div>
            <h1>A</h1>
            {users.map((items)=>{
                return(
                    <div>{items.title}</div>
                ) 
            })}
        </div>
    );
}

export default A;
