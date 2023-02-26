import React from 'react'

import { SlBadge } from "react-icons/sl"
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=90" alt="img" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 col-12">
                        <p className='text-secondary fw-bold fs-4'>About Evenizer</p>
                        <h3>We Are The Best Event Planner & Organizer In Town
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="col-md-4 col-8 py-3">
                            <div className="card bg-light">
                                <h2 className='text-secondary text-center fs-1'><SlBadge /></h2>
                                <h2 className='text-secondary text-center fs-1'>10 +</h2>
                                <p className='text-center'>Years Of Experiences</p>
                            </div>
                        </div>
                        <Link to={'/about'}>
                            <button className='btn btn-secondary text-white'>About us</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
