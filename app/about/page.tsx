import React from 'react'
import Image from 'next/image'
import heroImage from "../../assets/images/hero.png"
function About() {
    return (
        <div className=' px-10 pt-7 '>
            <div className="flex justify-between px-8 pt-8 w-[590px] h-[370px] ">
                <div>
                    <h1 className="w-[325px] h-36 text-4xl  ">Hi I'm Mehmet Akif Karasu, 3D artist & sculptor.</h1>
                    <p className="w-[575px] text-[20px]  h-48">
                        My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
                    </p>
                    <p className="w-[575px] h-36 text-[20px]">
                        Now I'm an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
                    </p>
                </div>
                <div >
                    {/* <div className="w-[590px] h-[370px]  bg-pink-400  pt-[160px]"></div> */}
                    <Image src={heroImage} width={421} height={590} alt='profile-picture'/>

                  
                </div>
            </div>
            <div className='text-[18px] px-8'>
                <div className='flex gap-12 pt-28'>
                    {/* sec1 */}
                    <h3 className='text-xl underline flex'>Main Software</h3>
                    <div className='flex flex-col'>
                        <p className='w-[436px] h-[54px]'>
                            Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
                        </p>
                        <p className='pt-5'>
                            Adobe CC, Figma, Ableton
                        </p>
                    </div>
                </div>
                {/* sec2 */}
                <div className='flex gap-20 pt-8'>
                    <h3 className='text-xl underline'>Main Skills</h3>
                    <div className='flex'>
                        <p className='w-[436px] h-[150px]'>
                            Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design
                        </p>
                    </div>
                </div>
            </div>
            <hr className='text-black h-2'></hr>
            <div className='flex justify-between pt-20 px-16'>
                <p className='w-[347px] h-[71px] text-[32px]'>
                    I am thrilled to answer to your next project   
                    <span className=' inline-block rotate-[-90deg] gap-3'> ↓</span>
                </p>
                <h2 className='w-[347px] h-[37px] text-[32px]'>
                    makifkarasu@outlook.com
                    <p className='text-[18px] h-[22px]'>
                        View Resume
                    </p>
                </h2>
            </div>
        </div>
    )
}

export default About