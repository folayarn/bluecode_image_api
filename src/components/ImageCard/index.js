
import classes from './index.module.scss'
import Home from '../Home'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'


const Image = () => {
    
    const routes = (<>
    <Switch>
<Route exact path='/' component={Home}/> 
</Switch>
    
    
    </>)
    return(
        <>
            
            <div className={classes.Section}>
    <Header/>

{routes}
            </div>
        
        
        </>)
}

export default ImageCard