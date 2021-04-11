import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActiveSection } from '../../redux/actions.js';

function header(props) {
    function getPosition (activeSection) {
        switch (activeSection) {
            case 'home':
                return {
                    top: 0,
                };
            case 'services':
                return {
                    top: '100vh',
                };
            case 'about':
                return {
                    top: '200vh',
                };
            case 'work':
                return {
                    top: '300vh',
                };
            case 'contacts':
                return {
                    top: '400vh',
                };
            default: return {
                top: 0,
            };
        }
    }

    function setActiveClass(activeSection) {
        document.querySelectorAll('[data-item="link"]').forEach((link) => {
            link.classList.remove('selected-link');
        })

        switch (activeSection) {
            case 'home':
                document.querySelector(`[data-name="${activeSection}"]`).classList.add('selected-link');
                break;
            case 'services':
                document.querySelector(`[data-name="${activeSection}"]`).classList.add('selected-link');
                break;
            case 'about':
                document.querySelector(`[data-name="${activeSection}"]`).classList.add('selected-link');
                break;
            case 'work':
                document.querySelector(`[data-name="${activeSection}"]`).classList.add('selected-link');
                break;
            case 'contacts':
                document.querySelector(`[data-name="${activeSection}"]`).classList.add('selected-link');
                break;
            default: return 
        }
    }

    useEffect(() => {
        setActiveClass(props.activeSection);
    }, [props.activeSection])

    function clickLinkHandler(e) {
        const section = e.target.parentNode.getAttribute('data-name');

        props.setActiveSection(section)
    }

    return(
        <div className="header" style={getPosition(props.activeSection)}>
            <div className="header__container">
                <ul className="header__nav">
                    <li className="header__nav-item" data-name="home" data-item="link"><span onClick={clickLinkHandler}>Home</span></li>
                    <li className="header__nav-item" data-name="services" data-item="link"><span onClick={clickLinkHandler}>Services</span></li>
                    <li className="header__nav-item" data-name="about" data-item="link"><span onClick={clickLinkHandler}>About</span></li>
                    <li className="header__nav-item" data-name="work" data-item="link"><span onClick={clickLinkHandler}>Work</span></li>
                    <li className="header__nav-item" data-name="contacts" data-item="link"><span onClick={clickLinkHandler}>Contacts</span></li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activeSection: state.app.activeSection
    }
}

const mapDispatchToProps = {
    setActiveSection
}

export default connect(mapStateToProps, mapDispatchToProps)(header);