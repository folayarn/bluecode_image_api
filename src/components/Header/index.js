
import InputComponent from '../InputComponent'
import classes from './index.module.scss'
import {
    MdExpandMore,
    MdFavorite,
    MdMenu,
    MdMessage,
    MdNotifications
} from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../../slices/allState';
import { useState } from 'react';
import List from '../List';

const Header = () => {
    const [show,setShow]=useState(false)
    const { openDrawer } = useSelector(state => state.other)
    let dispatch = useDispatch()

    const toggle = () => {
        dispatch(setDrawer(!openDrawer))
    }
    
    const toggleDiv = () => {
        setShow(!show)
    }
    return(
        <>
            <div className={classes.header}>
                <div className={classes.toggle}>
        <MdMenu size='20pt' onClick={toggle} />
                        
    
                </div> 
                
                <InputComponent />
                <div className={classes.row}>
                    <div onClick={toggleDiv} className={classes.notify}>
                        <MdNotifications size='25pt' style={{ color: 'rgb(44, 4, 119)' }} />
                    
                        <div className={classes.circle}>3</div>

                        
                    </div> 
                    {show && (<div className={classes.card}>

                        <List icon={<MdFavorite style={{ color:'grey' }} />} time={'20 minutes ago'}
                            src={'/personal-avatar.jpg'}
                            title={'Tunde lke you'} />
                        <hr className={classes.hr} />
                        <List icon={<MdFavorite style={{ color:'red' }} />} time={'20 minutes ago'}
                            src={'/personal-avatar.jpg'}
                            title={'Tunde lke you'} />
                        <hr className={classes.hr} />
                        <List icon={<MdMessage style={{ color:'rgb(44, 4, 119)' }} />} time={'20 minutes ago'}
                            src={'/personal-avatar.jpg'}
                            title={'Tunde lke you'} />
                
                    </div>)}
                    
                <div><img src='/personal-avatar.jpg' alt='reload' className={classes.img} />
                    <div className={classes.circle2}></div></div>
                
                <div className={classes.label}><span >Abigail</span> <MdExpandMore/></div>

                </div>
               
            </div>
        
            
        
        </>)
}

export default Header