// LikeButton.jsx code 

import { useState } from "react";

let likeStyle = {
    color: "red",
};

export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return(
        <div>
            <button className="like-button" onClick={toggleLike}>
                {isLiked ? (
                        <i className="fa-solid fa-heart" style={likeStyle}></i>
                    ):(
                        <i className="fa-regular fa-heart"></i>
                    )
                }
            </button>
        </div>
    );
}