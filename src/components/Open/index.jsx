import React from 'react';

const Open = () => {
    return(
        <section className="open posr">
            <div className="container">
                <div className="open__inner w100 df fdc aic posr">
                    <h2 className="title text__center">
                        Open Account
                    </h2>

                    <p className="open__text text__center">
                        Opening an account takes 2 minutes and is absolutely free
                    </p>

                    <div className="open__content w100">
                        <div className="open__item df fdc aic">
                            <div className="open__item--img--inner df aic jcc green">
                                <img src="./assets/img/personal.svg" alt="person" className="img__auto" />
                            </div>

                            <p className="open__item--title text__center">
                                Personal
                            </p>

                            <p className="open__item--text text__center">
                                For our personal or joint accounts
                            </p>

                            <button className="button button__default open__item--button">
                                <span>Open Account</span>
                            </button>
                        </div>

                        <div className="open__item df fdc aic">
                            <div className="open__item--img--inner df aic jcc blue">
                                <img src="./assets/img/business.svg" alt="person" className="img__auto" />
                            </div>

                            <p className="open__item--title text__center">
                                Business
                            </p>

                            <p className="open__item--text text__center">
                                For all types of business accounts
                            </p>

                            <button className="button button__default open__item--button">
                                <span>Open Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Open;