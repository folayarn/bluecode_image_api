
import DataContainer from '../DataContainer'
import SecondHeader from '../SecondHeader'
import classes from './index.module.scss'

const Home = () => {
    
    return(
        <>
            <div className={classes.Section}>
                <SecondHeader/>
                <div>
                    <DataContainer/>

</div>

            </div>
        
        
        </>)
}

export default Home