
import './App.css';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

function App() {
  const routes = (<>
    <Switch>
            <Route exact path='/' component={Main} /> 
            <Route exact path='*' component={PageNotFound}/> 
</Switch>
    
    
    </>)
  return (
    <>
      {routes}
    </>
  );
}

export default App;
