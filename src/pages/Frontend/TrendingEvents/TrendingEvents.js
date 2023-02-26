import React from 'react'
import Events from '../../../components/Frontend/Events/Events'

function TrendingEvents() {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-secondary'>The Treanding Events </h1>
                    </div>
                </div>
                <Events />
            </div>
        </>
    )
}

export default TrendingEvents
