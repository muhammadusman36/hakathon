import React from 'react'

import { BiDrink } from 'react-icons/bi'
import { GiPartyPopper, GiPartyFlags, GiJuggler } from 'react-icons/gi'
import { MdCameraRoll } from 'react-icons/md'
import { BsFillSpeakerFill } from 'react-icons/bs'
function Services() {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h3 className='text-center text-secondary'>Our Services</h3>
                        <h2 className='text-center py-1'>We Provide The Best Service For Your Event</h2>
                        <p className='text-center py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><GiPartyPopper /></h3>
                                    <h5 className="card-title">Venue Selection</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><MdCameraRoll /></h3>
                                    <h5 className="card-title">Documentation</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><BiDrink /></h3>
                                    <h5 className="card-title">Invitation</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row py-3">
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><GiPartyFlags /></h3>
                                    <h5 className="card-title">Entertainment</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><GiJuggler /></h3>
                                    <h5 className="card-title">Jugglers</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="py-3 card" >
                            <div className="ps-3">
                                <div className="card-body">
                                    <h3 className=' text-secondary fs-1'><BsFillSpeakerFill /></h3>
                                    <h5 className="card-title">Events & Party</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
