import React from 'react'
import TopFooter from './top-footer'
import BottomFooter from './bottom-footer'

const Footer = () => {
    return (
        <div className='text-[#F8F8F8] bg-black/90 mt-16'>
            <TopFooter />
            <div className='h-[1px] bg-white w-11/12 mx-auto'></div>
            <BottomFooter />
        </div>
    )
}

export default Footer