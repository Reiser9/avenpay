import React from 'react';

const Contact = () => {
    return(
        <section className="contact" id="contacts">
            <div className="container">
                <div className="contact__inner w100 df jcfs posr">
                    <img src="./assets/img/contact-bg.png" alt="bg" className="contact__bg pen" />
                    <img src="./assets/img/contact-img.svg" alt="img" className="contact__img pen" />

                    <div className="contact__content w100 df fdc aifs posr">
                        <h2 className="title">
                            Conact Us
                        </h2>

                        <div className="contact__data w100">
                            <div className="contact__data--item df fdc aifs">
                                <div className="contact__data--img--inner df aic jcc">
                                    <img src="./assets/img/mail.svg" alt="mail" className="img__auto light" />
                                    <img src="./assets/img/mail-dark.svg" alt="mail" className="img__auto dark" />
                                </div>

                                <p className="contact__data--title">
                                    email us
                                </p>

                                <a href="mailto:index@avenpay.com" className="contact__data--link">
                                    index@avenpay.com
                                </a>
                            </div>

                            <div className="contact__data--item df fdc aifs">
                                <div className="contact__data--img--inner df aic jcc">
                                    <img src="./assets/img/phone.svg" alt="phone" className="img__auto light" />
                                    <img src="./assets/img/phone-dark.svg" alt="phone" className="img__auto dark" />
                                </div>

                                <p className="contact__data--title">
                                    call us
                                </p>

                                <a href="tel:14006289" className="contact__data--link">
                                    14006289
                                </a>
                            </div>

                            <div className="contact__data--item big df fdc aifs">
                                <div className="contact__data--img--inner df aic jcc">
                                    <img src="./assets/img/pin.svg" alt="phone" className="img__auto light" />
                                    <img src="./assets/img/pin-dark.svg" alt="phone" className="img__auto dark" />
                                </div>

                                <p className="contact__data--title">
                                    Avenpay Limited
                                </p>

                                <p href="tel:14006289" className="contact__data--text">
                                    10 Kenelm Road, Rhos on Sea Colwyn Bay LL28 4EE
                                </p>
                            </div>
                        </div>

                        <div className="contact__social--inner w100 df aic">
                            <a href="https://google.com" className="contact__social--link df aic jcc twitter">
                                <img src="./assets/img/twitter-dark.svg" alt="twitter" className="img__auto" />
                            </a>

                            <a href="https://google.com" className="contact__social--link df aic jcc facebook">
                                <img src="./assets/img/facebook-dark.svg" alt="facebook" className="img__auto" />
                            </a>

                            <a href="https://google.com" className="contact__social--link df aic jcc reddit">
                                <img src="./assets/img/reddit-dark.svg" alt="reddit" className="img__auto" />
                            </a>

                            <a href="https://google.com" className="contact__social--link df aic jcc instagram">
                                <img src="./assets/img/instagram-dark.svg" alt="instagram" className="img__auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;