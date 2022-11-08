import React from 'react';
import UserCard from "./userCard.jsx"
import { useState, useEffect } from "react"
function UserList(props) {
    const [data, setData] = useState();
    useEffect(

        () => {
            fetch("https://vayuyastra.herokuapp.com/users")
                .then(res => {
                    return res.json()
                }).then(data => {
                    setData(data);
                    console.log(data)

                })

        }, []
    );
    return (

        <div>
     
            {
                data &&
                data.map(user => {
                    return <UserCard title1="NAME:" title2="ID:" name={user.name} userId={user.userId}  src={user.profilePicture} key={user._id}/>

                })
            }
        </div>
    );
}

export default UserList;