import React from 'react'

function FooterComponent({ heading, text1, text2, text3, text4 }) {
    return (
        <>
            <h5 className='text-secondary'>{heading}</h5>
            <p><a href="" className='text-decoration-none text-white'>{text1}</a></p>
            <p><a href="" className='text-decoration-none text-white'>{text2}</a>
            </p>
            <p><a href="" className='text-decoration-none text-white'>{text3}</a>
            </p>
            <p><a href="" className='text-decoration-none text-white'>{text4}</a></p>
        </>
    )
}

export default FooterComponent
