import axios from 'axios'
import classes from './index.module.scss'
import {
    MdSearch
} from "react-icons/md";
import { useDispatch } from 'react-redux'
import { setData,setLoading,setErr,setSearch } from '../../slices/allState'
import { useState } from 'react';

const url='https://api.unsplash.com'
const InputComponent = () => {
const [value,setValue]=useState('')
    
    let dispatch=useDispatch()
    const searchData = () => {

        dispatch(setLoading(true))
        dispatch(setSearch(true))
         axios.get(`${url}/search/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&&query=${value}`)
            .then(response => {
                dispatch(setData(response.data.results))
                console.log(response.data.results)
                dispatch(setLoading(false))
            }).catch(error => {
                dispatch(setLoading(false))
                dispatch(setErr(true))
        })
    }
    
    return(
        <>
            <div className={classes.inputContainer}>
            <MdSearch size={'20pt'} style={{ marginTop:'6px' }} />
                <input type="text" placeholder='Find Something...'
                    
                    className={classes.input}
                onChange={(e)=>setValue(e.target.value)}/>

<button type='button' className={classes.btn} onClick={searchData}>Search</button>
            </div>
        
        
        </>)
}

export default InputComponent