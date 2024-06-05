import { useEffect } from "react";
import { fetchUser } from "../api";
import { useState } from "react";

export default function Users() {

    const [user, setUser] = useState({})

    useEffect(() => {
        fetchUser().then((userData) => {

            setUser(userData.data.user)
              console.log(user);
        })
    }, [])

    return (
      <div className="users-page">
        <h2 className="user-header">Users</h2>
        <div className="user-card">
          <div className="user-info">
          <h3 className="user-card-header">{user.username}'s Profile</h3>
            <p>Username: <br/>
              {user.username}</p>
            <p>Full Name: <br/>
              {user.name}</p>
            </div>
          <div className="user-profile-pic">
            <img src={user.avatar_url} />
            </div>
        </div>
      </div>
    );
}
