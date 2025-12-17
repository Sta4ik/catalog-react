import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react';

function Favorite(){
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const saved = localStorage.getItem("favorite")
        if(saved){
            setFavorite(JSON.parse(saved))
        }
    }, [])

    return (
        <div className='favoriteContainer'>
            {favorite.map(item => (
                <div key={item.title}>
                    <Avatar src={item.img} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Favorite;