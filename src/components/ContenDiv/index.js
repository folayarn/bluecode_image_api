
import classes from './index.module.scss'
import Home from '../Home'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'



const ContentDiv = () => {
    
    const routes = (<>
    <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/message' component={null} /> 
        
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

export default ContentDiv