import React from 'react'
import { GiBigDiamondRing } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { HiCake } from 'react-icons/hi'
function TopCard() {
    return (
        <>
            <div className="card--heroSection py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <div className="card py-3" >
                                <h3 className='text-center text-secondary fs-3'><GiBigDiamondRing /></h3>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Wedding Party</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-6">    <div className="card py-3" >
                            <h3 className='text-center text-secondary fs-3'><HiCake /></h3>
                            <div className="card-body">
                                <h5 className="card-title text-center">Birthday Party</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </div></div>
                        <div className="col-md-4 col-6">    <div className="py-3 card" >
                            <h3 className='text-center text-secondary fs-3'><BiDrink /></h3>
                            <div className="card-body">
                                <h5 className="card-title text-center">Events & Party</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCard
