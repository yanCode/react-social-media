import {MoreHorizOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Post = ({post}) => {
  return (<div className="post">
    <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.img} alt=""/>
          <div className='details'>
            <Link to={`profile/{post.id}`} style={{textDecoration: 'none', color: "inherit"}}>
              <span>{post.name}</span>
            </Link>
            <span className='time'>1 min ago</span>
          </div>
        </div>
        <MoreHorizOutlined/>
      </div>
      <div className="content"></div>
      <div className="info"></div>
    </div>
  </div>);
}

export default Post;