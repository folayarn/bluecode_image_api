
import classes from './index.module.scss'

const List= ({ title, icon,time,src }) => {
    

    return(
        <>
            
            <div className={classes.list}>
          <img src={src} alt='load again' className={classes.img} />
          <div className={classes.textDiv}><span style={{ fontWeight:'bold' }}>{title}</span>
          
          <span style={{ fontSize:'8pt' }}>{time}</span></div>
               <div className={classes.iconDiv}>{icon}</div>
          
                </div>
                
        </>)
}

export default List