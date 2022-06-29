import React from 'react';

const Our = () => {
    return(
        <section className="our posr">
            <img src="./assets/img/our-bg.png" alt="bg" className="our__bg pen" />

            <div className="container">
                <div className="our__inner w100 df aifs jcsb">
                    <div className="our__text--inner w100 df fdc aifs posr">
                        <h2 className="title">
                            Our Vision
                        </h2>

                        <p className="our__text--text">
                            Avenpay works with individuals and SMEs to provide simplistic solutions for complex foreign exchange and remittance challenges worldwide
                        </p>

                        <button className="button button__default our__button">
                            <span>Contact Us</span>
                        </button>
                    </div>

                    <div className="our__content w100 posr">
                        <div className="our__item df fdc aifs">
                            <div className="our__item--img--inner df aic jcc">
                                <img src="./assets/img/our1.svg" alt="img" className="img" />
                            </div>

                            <p className="our__item--title">
                                Real-time tracking of transactions
                            </p>

                            <p className="our__item--text">
                                You can track your financial portfolio in real-time, from anywhere
                            </p>
                        </div>

                        <div className="our__item df fdc aifs">
                            <div className="our__item--img--inner df aic jcc">
                                <img src="./assets/img/our2.svg" alt="img" className="img" />
                            </div>

                            <p className="our__item--title">
                                Reduced cost
                            </p>

                            <p className="our__item--text">
                                You can track yoour financial portfolio in real-time, from anywhere
                            </p>
                        </div>

                        <div className="our__item df fdc aifs">
                            <div className="our__item--img--inner df aic jcc">
                                <img src="./assets/img/our3.svg" alt="img" className="img" />
                            </div>

                            <p className="our__item--title">
                                User-friendly interface
                            </p>

                            <p className="our__item--text">
                                You can track yoour financial portfolio in real-time, from anywhere
                            </p>
                        </div>

                        <div className="our__item df fdc aifs">
                            <div className="our__item--img--inner df aic jcc">
                                <img src="./assets/img/our4.svg" alt="img" className="img" />
                            </div>

                            <p className="our__item--title">
                                Smart reporting
                            </p>

                            <p className="our__item--text">
                                You can track yoour financial portfolio in real-time, from anywhere
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Our;