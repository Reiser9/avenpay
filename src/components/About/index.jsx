import React from 'react';

const About = () => {
    return(
        <section className="about posr" id="about">
            <img src="./assets/img/about-img.png" alt="img" className="about__bg pen" />

            <div className="container">
                <div className="about__inner w100 df jcfe">
                    <div className="about__text--inner w100 df fdc aifs">
                        <h2 className="about__text--title title">
                            About AvenPay
                        </h2>

                        <p className="about__text--text">
                            Avenpay works with individuals and SMEs and multinational companies providing simplistic solutions to complex foreign exchange and remittance challenges worldwide
                        </p>

                        <button className="button button__default about__button">
                            <span>Contact Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;