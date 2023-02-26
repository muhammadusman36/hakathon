import React from 'react'

import logo from '../../../assets/Images/logo.png'
import { GoLocation } from 'react-icons/go'
import { AiFillPhone, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import FooterComponent from './FooterComponent'
import BottomFooter from './BottomFooter'
function Footer() {
    return (
        <>
            <footer>
                <div className="pb-3 bg-dark pt-5">
                    <div className="container text-white">
                        <div className="row text-center">
                            <div className="col-6 col-md-3 col-12 text-start">
                                <img src={logo} alt="" className='img-fluid' />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><GoLocation className='text-secondary' /> <a href="https://goo.gl/maps/sUdnga56BvPAJrvv7" className='text-decoration-none text-white' target={'_blank'}>saylani Lal Mill chok faisalabad</a></p>
                                <p><MdEmail className='text-secondary' /> <a href="mailto: usman853136@gmail.com" className='text-decoration-none text-white'>uman853136@gamil.com</a></p>
                                <p><AiFillPhone className='text-secondary' /> <a href="tel:+923018531368" className='text-decoration-none text-white'>+923018531368</a></p>

                            </div>
                            <div className="col-6 col-md-3 col-12 text-start">
                                <FooterComponent heading={'Quick Links'} text1={'About'} text2={'services'} text3={'pricing'} text4={'contact'} className="mx-2" />
                            </div>
                            <div className="col-6 col-md-3 col-12 text-start">
                                <FooterComponent heading={'UseFull Links'} text1={'privacy policay'} text2={'terms 7 condations'} text3={'Disclaimer'} text4={'Support'} />
                            </div>
                            <div className="col-6 col-md-3 col-12 text-start">
                                <h5 className='text-secondary'>NewLetter</h5>
                                <input
                                    type="email"
                                    className="form-control py-3 border-radius-none my-3"
                                    placeholder="Your email address"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="button"
                                    id="button-addon2"
                                >
                                    Send Email
                                </button>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <a href="" className='rounded-circle h3 text-secondary '  ><BsFacebook /></a>
                                <a href="" className='rounded-circle h3 ms-3 text-secondary '  ><AiFillInstagram /></a>
                                <a href="" className='rounded-circle h3 mx-3 text-secondary '  ><AiFillLinkedin /></a>
                                <a href="" className='rounded-circle h3 text-secondary '  ><AiFillYoutube /></a>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <BottomFooter />
            </footer>
        </>
    )
}

export default Footer
