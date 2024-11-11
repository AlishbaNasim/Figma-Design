import React from 'react'
import Link from 'next/link'
function Header() {
    return (
        <div className='flex justify-between px-16 text-[24px]'>
            <div className='text-[40px] font-bold'>
             ma.
            </div>
            <div className='flex gap-8 items-center'>
                <Link href={"/"}>
                    <div>Work</div>
                </Link>
                <Link href={"/about"}>
                    <div>About</div>
                </Link>
                <div> 
                    Playground
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Header