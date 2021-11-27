
import classes from './index.module.scss'

import { Link} from 'react-router-dom'


const PageNotFound = () => {
    
   
    return(
        <>
            
            <div className={classes.Section}>
                <span style={{ textAlign: 'center' }}>Page does not exist</span>
                <br/>
                <Link to='/'><button className={classes.btn}>Go back home</button></Link>
            </div>
        
        
        </>)
}

export default PageNotFound