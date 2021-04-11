import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedSection } from '../redux/actions.js';
import Header from './header/Header.js'
import Home from './home/Home.js';
import Services from './services/Services.js';
import About from './about/About.js';
import Work from './work/Work.js';
import Contacts from './contacts/Contacts.js';

import '../styles/app.scss';

function App(props) {

    useEffect(() => {
        const WheelIndicator = require('wheel-indicator');

        const indicator = new WheelIndicator({
            elem: document.querySelector('body'),
            callback: function(event){
                scrollHandler(event);
            },
            preventMouse: true
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                props.setSelectedSection('down');
            }

            if (event.key === 'ArrowUp') {
                event.preventDefault();
                props.setSelectedSection('up');
            }
        })
    }, [])

    useEffect(() => {
        scrollToSection(props.activeSection);
    })
    
    function scrollToSection(section) {
        document.querySelector(`#${section}`).scrollIntoView();
    }

    function scrollHandler(event) {
        if (event.direction === 'down') {
            props.setSelectedSection('down');
        }

        if (event.direction === 'up') {
            props.setSelectedSection('up');
        }
    }

    function mouseDownHandler(event) {
        if (event.button === 1) {
            event.preventDefault();
        }
    }

    return (
        <div className="wrapper" onMouseDown={mouseDownHandler}>
            <Header />
            <Home />
            <Services />
            <About />
            <Work />
            <Contacts />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        activeSection: state.app.activeSection
    }
}

const mapDispatchToProps = {
    setSelectedSection
}

export default connect(mapStateToProps, mapDispatchToProps)(App);