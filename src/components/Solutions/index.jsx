import React from 'react';

const Solutions = () => {
    return(
        <section className="solutions posr" id="solutions">
            <img src="./assets/img/solutions-bg.png" alt="bg" className="solutions__bg pen" />

            <div className="container">
                <div className="solutions__inner w100 df fdc aic posr">
                    <h2 className="title text__center">
                        Solutions
                    </h2>

                    <div className="solutions__content w100">
                        <div className="solutions__item">
                            <div className="solutions__box df fdc aic">
                                <img src="./assets/img/a.svg" alt="img" className="img" />

                                <p className="solutions__text">
                                    Cross-border Money Transfer Solutions
                                </p>
                            </div>
                        </div>

                        <div className="solutions__item">
                            <div className="solutions__box df fdc aic">
                                <img src="./assets/img/v.svg" alt="img" className="img" />

                                <p className="solutions__text">
                                    Foreign Exchange Hedging
                                </p>
                            </div>
                        </div>

                        <div className="solutions__item">
                            <div className="solutions__box df fdc aic">
                                <img src="./assets/img/e.svg" alt="img" className="img" />

                                <p className="solutions__text">
                                    Virtual IBANs
                                </p>
                            </div>
                        </div>

                        <div className="solutions__item">
                            <div className="solutions__box df fdc aic">
                                <img src="./assets/img/n.svg" alt="img" className="img" />

                                <p className="solutions__text">
                                    Domestic Money Transfer Solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions;