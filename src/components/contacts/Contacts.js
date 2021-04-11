import React, { useState } from 'react';

export default function Contacts() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        question: '',
    })

    function inputChangeHadler(event) {
        const type = event.target.getAttribute('data-type');
        const newValue = {...formValue};
        newValue[type] = event.target.value;

        switch (type) {
            case 'name':
                if (newValue[type].length < 2) {
                    event.target.classList.add('error-input');
                    break;
                }
                event.target.classList.remove('error-input');
                break;
            case 'email':
                const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (!reg.test(newValue[type])) {
                    event.target.classList.add('error-input');
                    break;
                } 
                event.target.classList.remove('error-input');
                break;
            default: break;
        }

        setFormValue(() => {
            return newValue;
        })
    }

    return(
        <div id="contacts" className="contacts">
            <div className="contacts__container">
                <h2>contact us</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="contacts__bottom-block">
                    <div className="map-wrapper">
                        <div className="left-content">
                            <p className="title">Address</p>
                            <div className="address">
                                <p className="country">Acrostia</p>
                                <p className="street">Sevenoaks TN14 7HR, UK</p>
                            </div>

                            <div className="left-content__item">
                                <p>Phone:</p>
                                <a href="tel:+44-556-555-555">+44 556 555 555</a>
                            </div>
                            <div className="left-content__item">
                                <p>Email:</p>
                                <a href="mailto:info@acrostia.com">info@acrostia.com</a>
                            </div>
                            <div className="left-content__item">
                                <p>Skype:</p>
                                <a href="skype:AcOstia">AcOstia</a>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="yandex-map">
                                <img src="../../../img/contacts/yandex-map.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <p className="title">Ask a question</p>
                        <form className="request-form">
                            <div className="form-contacts">
                                <input value={formValue.name} data-type="name" placeholder="Name" onChange={inputChangeHadler}/>
                                <input value={formValue.email} data-type="email" placeholder="Email" onChange={inputChangeHadler}/>
                            </div>
                            <textarea value={formValue.question} data-type="question" placeholder="Your question" onChange={inputChangeHadler}/>
                            <button type="submit">send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}