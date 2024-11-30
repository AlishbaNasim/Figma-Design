import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center px-6 lg:px-16 py-4 lg:py-8 bg-gray-100 gap-4">
        <div className='text-[21px] text-blue-800'>
          Alishba Naseem ⏤ 2024
        </div>
        <div className="flex justify-around gap-4 lg:gap-8 text-[20px] lg:text-[24px]">
            <div>
              Artstation
            </div>
            <div>
              Linkedin
            </div>
            <div>
              Twitter
            </div>
        </div>
    </div>
  )
}

export default Footer