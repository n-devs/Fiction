import React from 'react'
import firebase from "firebase"
import './styles.css'

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slides: [
                {
                    img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
                    num: 1
                },
                {
                    img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
                    num: 2
                },
                {
                    img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
                    num: 3
                }
            ],
            slideIndex: 1
        }
    }

    componentDidMount() {
        this.showSlides(this.state.slideIndex)
        var num = 0;
        const setTime = setInterval(function () {
            //สไลด์ อัตโนมัต
            clickDot(num)
            num += 1
            if (num === document.getElementsByClassName("slider-image").length) {
                num = 0
            }
        }, 10000)

        function clickDot(n) {
            const dots = document.getElementsByClassName("dot");
            return dots[n].click()
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                clearInterval(setTime)
            }

        })
    }

    currentSlide(n) {
        this.showSlides(this.state.slideIndex = n)
        this.setState({ slideIndex: n })
    }

    showSlides(n) {
        let i;
        const dots = document.getElementsByClassName("dot");


        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[this.state.slideIndex - 1].className += " active";


    }



    render() {
        const innerWidth = window.innerWidth
        const innerHeight = window.innerHeight
        const Width = `${innerWidth}px`
        const Height = `${innerHeight - 145}px`


        return (
            <React.Fragment>
                <div className="freed_news slider-holder"
                    style={{
                        width: `${Width}`,
                        height: `${Height}`,
                        backgroundColor: ' aquamarine'
                    }}>
                    <div className="slider-holder">
                        <React.Fragment>
                            {this.state.slides.map(slide =>
                                <span id={`slider-image-${slide.num}`}></span>
                            )}
                        </React.Fragment>
                        <div className="image-holder">
                            {this.state.slides.map(slide =>
                                <img
                                    src={slide.img}
                                    style={{
                                        width: '800px',
                                        height: '100%',
                                    }}
                                    className="slider-image"
                                />
                            )}
                        </div>

                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '5px',
                            width: `${Width}`
                        }}>
                        <center>
                            {this.state.slides.map(slide =>
                                <a href={`#slider-image-${slide.num}`} className="dot" onClick={(e) => this.currentSlide(slide.num, e)}></a>
                            )}
                        </center>
                    </div>
                </div>
                <dev className="login_laout"
                    style={{
                        height: '145px',
                        width: `${Width}`,
                        backgroundColor: ' whitesmoke'
                    }}
                >
                    {this.props.children}
                </dev>
            </React.Fragment>
        )
    }
}