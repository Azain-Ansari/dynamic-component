import React from 'react';
import ReactDOM from 'react-dom';
import image from "./715c0b01-e40f-4484-b847-db84176a122d.jpg"
import profile from "./download.jpg"

import "./index.css"
import 'bootstrap-icons/font/bootstrap-icons.css'; 


function Post(props) {
  return <div>
    <div className='post'>
      <div className='postHead'>
        <img className='profile' src={props.profileimage} width={65} height={65} alt="" />
        <div>
        <h1 > 
          {props.name}!
        </h1>
        <p className='date'>
          {props.date}!
        </p>
        </div>
      </div>

        <p> {props.Text} </p>

        <img className="postImg" src={props.img} alt="post" />

      <div className="postFooter">
      <div className="button">
        <i className="bi bi-hand-thumbs-up"></i> Like
      </div>
      <div className="button">
        <i className="bi bi-chat-dots"></i> Comment
      </div>
      <div className="button">
        <i className="bi bi-share"></i> Share
      </div>
    </div>

    </div>
  </div>

}

ReactDOM.render(<div><Post
  profileimage={image}
  name="Azain ansari"
  date="fariday-9pm"
  Text='Easy to Maintain
Updating your build tooling is typically a daunting and time-consuming task. When new versions of Create React App are released, you can upgrade using a single command:'
  img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" />

<Post
  profileimage={image}
  name="Shafy"
  date="fariday-9pm"
  Text='Easy to Maintain
Updating your build tooling is typically a daunting and time-consuming task. When new versions of Create React App are released, you can upgrade using a single command:'
  img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg" />
  
  <Post
  profileimage={profile}
  name="Albert Einstein"
  date="sunday-10 Am"
  Text='Easy to Maintain
Updating your build tooling is typically a daunting and time-consuming task. When new versions of Create React App are released, you can upgrade using a single command:'
  img="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSUPobOTWGGkexkI3nf8u8LFP65DSHycLqi52PJLG0IDhOHSHHPSs1iJUW09LLdUcQiKnoF93mTYz7tDaQ" /> </div>, document.querySelector('#root'));
