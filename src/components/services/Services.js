import React from 'react';

export default function services() {
    return(
        <div id="services" className="services">
            <div className="services__container">
                <div className="services__top-content">
                    <h2>our services</h2>
                    <p className="text">cras commodo mattisuusto nec <span>lobortis</span>. nam ut tellus lobortis, ullamcorper massa sit amet</p>
                    <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="services__bottom-content">
                    <ul className="services__list">
                        <li className="services__element">

                            <div className="element-contour">
                                <div className="element-icon">
                                    <img src="../../img/services/lightball.png"></img>
                                </div>
                            </div>
                            
                            <p className="element-title">researching</p>
                            <p className="element-text">Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        </li>

                        <li className="services__element">

                            <div className="element-contour">
                                <div className="element-icon">
                                    <img src="../../img/services/wand.png"></img>
                                </div>
                            </div>
                            
                            <p className="element-title">design</p>
                            <p className="element-text">Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        </li>

                        <li className="services__element">

                            <div className="element-contour">
                                <div className="element-icon">
                                    <img src="../../img/services/giars.png"></img>
                                </div>
                            </div>
                            
                            <p className="element-title">development</p>
                            <p className="element-text">Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        </li>

                        <li className="services__element">

                            <div className="element-contour">
                                <div className="element-icon">
                                    <img src="../../img/services/rocket.png"></img>
                                </div>
                            </div>
                            
                            <p className="element-title">launch</p>
                            <p className="element-text">Praesent interdum blandit quam. Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}