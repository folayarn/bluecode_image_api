import { Link, useRouteMatch } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import classes from './index.module.scss'

const ListItem = ({ title, icon,link,event }) => {
    var even='home'
    let {path} = useRouteMatch()
    let { pathname } = useLocation()
    
    const onToggle = () => {
    if (pathname === link) {
      even =event;
    }
    };
    if (pathname === path + "/message") {
    even = "message";
  }
    if (pathname === path + "/challenge") {
    even = "challenge";
  }
  if (pathname === path + "/parade") {
    even = "parade";
  }
  if (pathname === path + "/rank") {
    even = "rank";
  }
if (pathname === path + "/party") {
    even = "party";
  }
  if (pathname === path + "/group") {
    even = "group";
  }
  if (pathname === path + "/") {
    even = "home";
  }

    return(
        <>
            <Link to={link} >
            <div className={even === event ? classes.active :classes.list }
                onClick={onToggle}>
               
                {icon}
           <span style={{ marginLeft:'20px' }}>{title}</span>
               
                
               
                
                </div>
                 </Link>
        </>)
}

export default ListItem