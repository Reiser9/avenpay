import React from 'react';

const Main = () => {
    return(
        <section className="main posr">
            <img src="./assets/img/main-bg.jpg" alt="bg" className="main__bg pen w100" />

            <div className="container">
                <div className="main__inner w100 df aic jcsb">
                    <div className="main__text--inner w100 df fdc aifs">
                        <h1 className="main__title">
                            Specialized Leader in Global Currency Solutions
                        </h1>

                        <div className="main__points--inner w100 df fdc aifs">
                            <p className="main__point">
                                1. Handle and process transactions from payment processors
                            </p>

                            <p className="main__point">
                                2. Push notifications and spending alerts
                            </p>

                            <p className="main__point">
                                3. Supports large volume transactions without moving the market
                            </p>

                            <p className="main__point">
                                4.Analytics tool for monitoring purchases
                            </p>

                            <p className="main__point">
                                5. Diverse Liquidity
                            </p>
                        </div>

                        <div className="main__button--inner w100 df aic">
                            <button className="button button__default main__button">
                                <span className="aic">
                                    Contact Us

                                    <img src="./assets/img/arrow-right.svg" alt="arrow" className="main__button--icon" />
                                </span>
                            </button>

                            <div className="main__wrapper df aic">
                                <div className="main__pay">
                                    <span className="df aic jcc">
                                        <img src="./assets/img/visa.svg" alt="visa" className="main__pay--icon img__auto" />
                                    </span>
                                </div>

                                <div className="main__pay">
                                    <span className="df aic jcc">
                                        <img src="./assets/img/mastercard.svg" alt="mastercard" className="main__pay--icon img__auto" />
                                    </span>
                                </div>

                                <div className="main__pay">
                                    <span className="df aic jcc">
                                        <img src="./assets/img/iban.svg" alt="iban" className="main__pay--icon img__auto" />
                                    </span>
                                </div>

                                <div className="main__pay">
                                    <span className="df aic jcc">
                                        <img src="./assets/img/swift.svg" alt="swift" className="main__pay--icon img__auto" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main__cards--inner posr">
                        <div className="main__card w100 df fdc aifs card1">
                            <img src="./assets/img/ee.svg" alt="img" className="img" />

                            <p className="main__card--title">
                                Efficient payments
                            </p>

                            <p className="main__card--text">
                                Use our amazing credit system to manage easy payments to all countries
                            </p>
                        </div>

                        <div className="main__card w100 df fdc aifs card2">
                            <img src="./assets/img/p.svg" alt="img" className="img" />

                            <p className="main__card--title">
                                Partnership
                            </p>

                            <p className="main__card--text">
                                Grow sales and increase conversions by offering more payment options
                            </p>
                        </div>

                        <div className="main__card w100 df fdc aifs card3">
                            <img src="./assets/img/s.svg" alt="img" className="img" />

                            <p className="main__card--title">
                                Simple payments
                            </p>

                            <p className="main__card--text">
                                through digitally connected platform - cross border, domestic, derivative &amp; virtual IBANs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;