import React from "react";
import {ReactComponent as StarFull} from "assets/img/full.svg";
import {ReactComponent as StarHalf} from "assets/img/half.svg";
import {ReactComponent as StarEmpty} from "assets/img/empty.svg";
import "./styles.css"


function MovieStars() {
    return(
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}

export default MovieStars;