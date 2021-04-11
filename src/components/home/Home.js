import React, { useEffect } from 'react';
import Slider from '@farbenmeer/react-spring-slider';

export default function home() {

    return(
        <div id="home" className="home">
            <div className="home__container">
                <Slider 
                    hasArrows={true}
                    hasBullets={true}
                    >
			        <div className="slider-element">
                        <div className="slider-element__label">
                            <div className="tagline-left">
                                <p className="tagline-left__text"><span>good ideas</span> comes</p>
                            </div>
                            <div className="tagline-right">
                                <p className="tagline-right__text">first!</p>
                            </div>
                        </div>
                    </div>
			        <div className="slider-element">
                        <div className="slider-element__label">
                            <div className="tagline-left">
                                <p className="tagline-left__text"><span>good ideas</span> comes</p>
                            </div>
                            <div className="tagline-right">
                                <p className="tagline-right__text">first!</p>
                            </div>
                        </div>
                    </div>
			        <div className="slider-element">
                        <div className="slider-element__label">
                            <div className="tagline-left">
                                <p className="tagline-left__text"><span>good ideas</span> comes</p>
                            </div>
                            <div className="tagline-right">
                                <p className="tagline-right__text">first!</p>
                            </div>
                        </div>
                    </div>
		        </Slider>
            </div>
        </div>
    )
}