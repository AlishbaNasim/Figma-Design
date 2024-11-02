import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-around ">
        <div className="  text-[60px] pt-[160px] px-6 w-[500px]">
          <h1 >Hello, I'm Mehmet Akif.</h1>   
          <p className="h-[38.09px] w-[35px] pt-6">↓</p>
        </div>
        <div className="w-[580px] text-[32px] pt-[210px] ">
          <p>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
        </div>
      </div>


      {/* 01 */}
      <div className="flex flex-col items-center">
        <div className="flex justify-between pt-[200px] w-[1120px] h-[473px]">
          <div >
            <h1 className="w-[325px] h-24 text-4xl  ">01 / PROJECT NAME</h1>
            <p className="w-[356px] text-[20px]  h-28">Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</p>
            <p className="w-[315px] h-36"> Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
            <p className="font-semibold text-[22px] underline">More shots from this project ↗</p>
          </div>
          <div>
            <div className="w-[640px] h-[366px]   bg-pink-400  pt-[160px]"></div>
          </div>
        </div>


        {/* 02 */}
        <div className="flex justify-between pt-[200px] w-[1120px] h-[473px]">
          <div >
            <h1 className="w-[325px] h-24 text-4xl  ">02 / PROJECT NAME</h1>
            <p className="w-[356px] text-[20px]  h-48">
              Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques
            </p>
            <p className="font-semibold text-[22px] pt-7 underline">See case study →</p>
          </div>
          <div>
            <div className="w-[640px] h-[366px]   bg-pink-400  pt-[160px]"></div>
          </div>

        </div>
        {/* 03 */}
        <div className="flex justify-between pt-[200px] w-[1120px] h-[473px]">
          <div >
            <h1 className="w-[325px] h-24 text-4xl  ">03 / PROJECT NAME</h1>
            <p className="w-[356px] text-[20px]  h-60">Experimental creature modeling for school project.</p>
            <p className="font-semibold text-[22px] underline">Project WIP</p>
          </div>
          <div>
            <div className="w-[640px] h-[366px]   bg-pink-400   pt-[160px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
