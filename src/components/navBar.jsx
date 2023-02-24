import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";
import './navbar.scss'
import {useContext} from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import {WbSunnyOutlined} from "@mui/icons-material";


const NavBar = () => {

  const {darkMode, toggle} = useContext(DarkModeContext);
  return (<div className='navBar'>
    <div className='left'>

      <Link to="/" style={{textDecoration: "none"}}>
        <span>mysocial</span>
      </Link>
      <HomeOutlinedIcon />
        {darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlined onClick={toggle}/>}
      <GridViewOutlinedIcon/>
      <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
    <div className='right'>
      <PersonOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className="user">
        <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
             alt=""/>
        <span>Jone</span>
      </div>
    </div>
  </div>)
}
export default NavBar