
import classes from './index.module.scss'
import {
    MdExpandMore
} from "react-icons/md";

const SecondHeader = () => {
    let title = ['World', 'Following', 'Popular', 'Post', 'Gender','Location','Profession']
    return(
        <>
            <div className={classes.div}>
        {title.map((index, dat) =>
            <div className={classes.card} key={dat}>
                    {index}
                    <MdExpandMore style={{ margin:'5px 5px' }}/>
            </div>
            
            )}

            </div>
            
            
        
        
        </>)
}

export default SecondHeader