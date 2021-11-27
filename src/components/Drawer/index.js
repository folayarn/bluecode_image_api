
import ListItem from '../ListItem'
import classes from './index.module.scss'
import {
    MdGroup, MdHome, MdMessage, MdMusicVideo, MdOutlineBarChart,
    MdOutlineConnectWithoutContact, MdPerson, MdTaskAlt,
    MdClose
} from "react-icons/md";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDrawer } from '../../slices/allState';


const Drawer = () => {
     const { openDrawer } = useSelector(state => state.other)
    let dispatch = useDispatch()

    const toggle = () => {
        dispatch(setDrawer(!openDrawer))
    }

    
   
    return(
        <>
            <div  className={openDrawer?classes.open:classes.sidebar}>
                <div className={classes.closeBtn}> <MdClose size='20pt' onClick={toggle} /></div>
                <div className={classes.header}>blueCube</div>
            <div className={classes.icon_section}>
                <ListItem icon={<MdHome size={'17pt'} />} title={'Home'} event={'home'} link={`/`} />  
            <ListItem icon={<MdMessage size={'17pt'}/>} title={'Message'} event={'messge'} link={`/message`} />      
            </div>
            <div style={{ color: 'black', margin: '10px  0px 10px -55px', padding:'7px',fontWeight:'bold' }}>Share</div>
            <div className={classes.icon_section}>
                <ListItem icon={<MdOutlineBarChart size={'17pt'} />} title={'Ranking'} event={'rank'} link={`/rank`} />  
                <ListItem icon={<MdTaskAlt size={'17pt'} />} title={'Challenge'} event={'challenge'} link={`/challenge`} />  
                <ListItem icon={<MdMusicVideo size={'17pt'} />} title={'Party'} event={'party'} link={`/party`} />     
                <ListItem icon={<MdOutlineConnectWithoutContact size={'17pt'} />} title={'Connect'} event={'connect'} link={`/connect`} />    
                <ListItem icon={<MdPerson size={'17pt'} />} title={'Parade'} event={'parade'} link={`/parade`} />    
                 <ListItem icon={<MdGroup size={'17pt'}/>} title={'Group'} event={'group'} link={`/group`} />  
        </div>
           
            
        </div>
        
        
        </>)
}

export default Drawer