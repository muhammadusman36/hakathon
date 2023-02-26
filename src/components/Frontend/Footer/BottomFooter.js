import React from 'react'

function BottomFooter() {
    return (
        <>
            <div className="py-2 bg-dark">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center justify-content-between text-white">
                                <p>Developed By Muhammad Usman</p>
                                <p>{new Date().getFullYear} &copy; All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomFooter
