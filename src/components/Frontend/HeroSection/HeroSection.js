import React from 'react'
import { Link } from 'react-router-dom'
import TopCard from '../TopCard/TopCard'

function HeroSection() {
    return (
        <>
                <div className="container-fluid ms-0 ps-0 me-0 w-100">
                    <div className="row">
                        <div className="col">
                            <div className="position-relative">
                                <img className='img-fluid object-fit-fill w-100' src='https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=50' alt="" style={{ height: "80vh" }} />
                                <div className="col-4 position py-2 py-md-4 px-2 px-md-5 fw-bold">
                                    <h1 className='fw-bold f2 text-white'>Let's Celebrate Your Events Party With Us</h1>
                                    <h6 className='disabled f3 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusantium nihil.</h6>
                                    <Link to={'/trendingEvents'}>
                                        <button className='btn btn-secondary borderBottom text-white fw-bold rounded-0 mt-1 mt-md-3 mb-0 mb-md-2 f4' >DISCOVER MORE</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            <TopCard />

        </>
    )
}

export default HeroSection
