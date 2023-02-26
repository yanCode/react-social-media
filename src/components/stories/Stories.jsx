import './stories.scss'
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";


//TEMPORARY
const stories = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];
const Stories = () => {

   const {currentUser} = useContext(AuthContext);
  return (
    <div className="stories">
       <div className="story" >
          <img src={currentUser.profilePic} alt="store"/>
          <span className='name'>{currentUser.name}</span>
         <button className='btn-plus'>+</button>
        </div>
      {stories.map(store => (
        <div className="story" key={store.id}>
          <img src={store.img} alt="store"/>
          <span className='name'>{store.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories