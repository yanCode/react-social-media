import {FavoriteSharp, MoreHorizOutlined, ShareOutlined, TextsmsOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import './post.scss'
import Comments from "../comments/Comments";
import {useState} from "react";

const Post = ({post}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" draggable="false"/>
            <div className='details'>
              <Link to={`profile/${post.id}`} style={{textDecoration: 'none', color: "inherit"}}>
                <span className='name'>{post.name}</span>
              </Link>
              <span className='time'>1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlined/>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt=""/>
        </div>
        <div className="info">
          <div className="item">
            {/*<FavoriteBorderOutlined/>*/}
            <FavoriteSharp/>
            12 likes
          </div>
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            15 comments
          </div>
          <div className="item">
            <ShareOutlined/>
            15 shares
          </div>
        </div>
        {commentOpen && <Comments/> }
      </div>
    </div>
  );
}

export default Post;