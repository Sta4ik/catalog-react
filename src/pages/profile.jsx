import {users} from "../storage/profile_data"
import Avatar from '@mui/material/Avatar';
import Favorite from "../components/Favorite";
import { useState } from "react";
import '../styles/profile.css'

function Profile(){
    const [showFavorite, setShowFavorite] = useState(true);
    return(
        <div className="profileContainer">
            {users.map((item)=>{
                return (
                    <>
                        <Avatar src={item.image}/>
                        <div className="profileInfo">
                            <h1>{item.name}</h1>
                            <h3>{item.info}</h3>
                            <h2>Избранные фильмы</h2>
                            {
                                setShowFavorite && <Favorite></Favorite>
                            }
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Profile