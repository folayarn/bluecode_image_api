import React from 'react'
import classes from './index.module.scss'

import axios from 'axios'
import { MdFavorite, MdThumbDown } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import { setData,setLoading,setErr } from '../../slices/allState'

const url='https://api.unsplash.com/'
const DataContainer = () => {
    const {data,iserr,loading}= useSelector(state=>state.other)
    let dispatch=useDispatch()
    React.useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`${url}/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
            .then(response => {
                dispatch(setData(response.data))
                dispatch(setLoading(false))

            }).catch(error => {
                dispatch(setLoading(false))
                dispatch(setErr(true))
        })
    
    },[dispatch])
    
    return(
        <>
            {loading ? (<div style={{ width:'100%' }}>
                
<span style={{ margin:'45% 45%' }}>Please Wait...</span>

            </div>) : (<>
                    {iserr?(<div style={{ width:'100%' }}>
                    
                    <span style={{width:'100%', margin:'45% 45%', color:'red' }}>Error Occured</span>
                    
                    </div>): (
                        <div className={classes.Section}>
                {data.map(item => {
                    return (

                        <div key={item.id} className={classes.card}>
                        <img src={item.urls.small} alt='reload' className={classes.image} />
                            <div className={classes.thumbnail}>
                                <span>{item.user.name}</span>
                                
                            </div>
                            <div >
                                <div style={{ width:'100%' }}>
                                    <span style={{ 
                                        fontSize: '9pt',
                                        wordWrap:'break-word',
                                        padding: '7px',
                                        textAlign:'center'
                                     }}>{item.user.bio}</span>
</div>
                                <div style={{ width:'100%',padding:'10px' }}>
                                    <button
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            width: '45%',
                                            padding: '7px',
                                            borderRadius:'5px'
                                            
                                        }}><MdFavorite /></button>
                                    {' '}
                                    <button
                                     style={{
                                            backgroundColor: 'purple',
                                            color: 'white',
                                            border: 'none',
                                            width: '45%',
                                            padding: '7px',
                                            borderRadius:'5px'
                                            
                                        }}
                                    ><MdThumbDown /></button>
                                </div>
                            </div>
                        </div>
                        
                    )
                        
                    
                  
    })}
            </div>

                    )}

            </>)}
            
        
        
        </>)
}

export default DataContainer