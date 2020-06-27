import React from 'react';
import main from '../assets/sortinghat.png';
import StyledHat from '../styles/styledhat';
import axios from 'axios';
import Gryffindor from '../assets/audio/Gryffindor.mp3';
import Hufflepuff from '../assets/audio/Hufflepuff.mp3';
import Ravenclaw from '../assets/audio/Ravenclaw.mp3';
import Slytherin from '../assets/audio/Slytherin.mp3';

import config from '../../config';


const hatclickHandler = () => {



    axios(config)
        .then(function (response) {
            var result = response.data.data.sortingHat;
            switch (result) {
                case "Gryffindor":

                    var audio = new Audio(Gryffindor)
                    audio.play();
                    break;
                case "Hufflepuff":

                    var audio = new Audio(Hufflepuff)
                    audio.play();
                    break;
                case "Ravenclaw":

                    var audio = new Audio(Ravenclaw)
                    audio.play();
                    break;
                case "Slytherin":

                    var audio = new Audio(Slytherin)
                    audio.play();
                    break;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

const Hat = () => {
    return (
        <StyledHat>
            <div className="main">
                <h1>Sorting Hat</h1>
                <div className="line" />
                <p>Click on Hat to know your House</p>
                <input type="image" src={main} onClick={hatclickHandler} />
            </div>
        </StyledHat>
    )
}


export default Hat;