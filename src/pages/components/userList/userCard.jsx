import React from 'react';
import "./userCard.css";
import defaultImg from "../../../images/vayuvyastra_logo_name.png"
function UserCard(props) {
  return (

    // <div className='userCardContainer'>

    //   <img src={props.src !== "" ? props.src : defaultImg} alt="user image"  className='userCardImg' id="propic" />
    //   <div id='details'>
    //     <div className='name'>{props.name}</div>
    //     <div className='id'>{props.userId}</div>
    //   </div>
    // </div>

    <div className='userCardContainer'>
      <div className='card-container'>
        {/* Uploading image size - pixels (horizontal = 294 , vertial= 170)*/}
        <img src={props.src !== "" ? props.src : defaultImg} alt="userI" className='pro' id='abc' />
        <div className='details' id='detailsid'>
          <div className='username'>
            <h2 className="title">{props.title1}</h2>
            <h3>{props.name}</h3>
          </div>
          <div className='vayu-id'>
            <h2 className="title">{props.title2} </h2>
            <h4>{props.userId}</h4>
          </div>

        </div>

      </div>

    </div>
  );
}

export default UserCard;
//
