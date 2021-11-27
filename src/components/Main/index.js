import ContentDiv from '../ContenDiv'
import Sidebar from '../Sidebar'
import classes from './index.module.scss'
import { useSelector } from 'react-redux'
import Drawer from '../Drawer'

const Main = () => {
    const {openDrawer}=useSelector(state=>state.other)
    return(
        <>
            <div className={classes.Section}>
                {openDrawer? <Drawer/>:null}
                <Sidebar/>
                <ContentDiv/>
            </div>
        
        
        </>)
}

export default Main