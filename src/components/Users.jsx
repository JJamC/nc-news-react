import { useEffect } from "react";
import { fetchUser } from "../api";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Users() {

  const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser().then((userData) => {
            setUser(userData.data.user)
            setLoading(false)
        })
    }, [])

    return loading ? (
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <CircularProgress />
      </Box>
    ) : (
      <div className="users-page">
        <h2 className="user-header">Users</h2>
        <div className="user-card">
          <div className="user-info">
            <h3 className="user-card-header">{user.username}'s Profile</h3>
            <p>
              Username: <br />
              {user.username}
            </p>
            <p>
              Full Name: <br />
              {user.name}
            </p>
          </div>
          <div className="user-profile-pic">
            <img src={user.avatar_url} />
          </div>
        </div>
      </div>
    );
}
