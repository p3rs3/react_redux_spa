import React, { useState, useEffect } from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

export default function work() {

    const PIXABAY_KEY = '20794741-8bbb549ee5a27c80192457383';
    const [images, setImages] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(`https://pixabay.com/api/?key=${PIXABAY_KEY}&per_page=8`)
            .then(response => response.json())
            .then(result => {
                setImages(result.hits);
                setLoader(false);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    function getImages(e) {
        const cat = e.target.getAttribute('data-cat-name');
        let category;

        switch (cat) {
            case 'all':
                category = 'backgrounds';
                break;
            case 'photography':
                category = 'fashion';
                break;
            case 'logoDesign':
                category = 'science';
                break;
            case 'webDesign':
                category = 'nature';
                break;
            default: return
        }

        setLoader(true);
        fetch(`https://pixabay.com/api/?key=${PIXABAY_KEY}&per_page=8&category=${category}`)
            .then(response => response.json())
            .then(result => {
                setImages(result.hits);
                setLoader(false);
            })
            .catch(e => {
                console.log(e);
            })
    }

    function changeCategory(e) {
        getImages(e);
        const category = e.target.getAttribute('data-cat-name')

        document.querySelectorAll('[data-item="image-category"]').forEach((item) => {
            item.classList.remove('selected-category');
        })

        switch (category) {
            case 'all':
                document.querySelector(`[data-cat-name="${category}"]`).classList.add('selected-category');
                break;
            case 'photography':
                document.querySelector(`[data-cat-name="${category}"]`).classList.add('selected-category');
                break;
            case 'logoDesign':
                document.querySelector(`[data-cat-name="${category}"]`).classList.add('selected-category');
                break;
            case 'webDesign':
                document.querySelector(`[data-cat-name="${category}"]`).classList.add('selected-category');
                break;
            default: return
        }
    }

    return(
        <div id="work" className="work">
            <div className="work__container">
                <h2>our work</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="images-nav">
                    <div className="images-nav__title">
                        portfolio
                    </div>
                    <div className="images-nav__buttons">
                        <button onClick={changeCategory} data-item="image-category" data-cat-name="all">All</button>
                        <button onClick={changeCategory} className="selected-category" data-item="image-category" data-cat-name="photography">Photography</button>
                        <button onClick={changeCategory} data-item="image-category" data-cat-name="logoDesign">Logo design</button>
                        <button onClick={changeCategory} data-item="image-category" data-cat-name="webDesign">Web design</button>
                    </div>
                </div>


                <div className="images-wrapper">
                    {!loader && images && images.map((image, index) => {
                        return (
                            <div className="image-block" key={index}>
                                <ReactFancyBox thumbnail={image.webformatURL} image={image.webformatURL} />
                                <div className="image-name">
                                    lorem
                                </div>
                            </div>)
                    })}
                    {loader && <div>Loading...</div>}
                </div>
            </div>
        </div>
    )
}