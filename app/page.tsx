export default function Home() {
  return (
    <div className="px-4">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-around items-center py-10 lg:py-32 space-y-10 lg:space-y-0">
        <div className="text-center lg:text-left text-[40px] lg:text-[60px] w-full lg:w-[500px]">
          <h1>Hello&#44; I&apos;m Mehmet Akif.</h1>
          <p className="mt-6 text-3xl animate-bounce">↓</p>
        </div>
        <div className="text-center lg:text-left w-full lg:w-[580px] text-[24px] lg:text-[32px]">
          <p>
            A senior-year design student specializing in 3D modeling & texturing.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col items-center space-y-20">
        {/* Project 01 */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[1120px] space-y-10 lg:space-y-0">
          <div className="w-full lg:w-auto">
            <h1 className="text-4xl mb-4">01 / PROJECT NAME</h1>
            <p className="text-lg mb-4">
            Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
</p>
            <p className="text-lg mb-4">
              Sculpted in ZBrush&#44; Retopologized and UVs done in Maya&#44; Textured in Mari&#44; Rendered using Arnold.
            </p>
            <p className="font-semibold text-lg underline cursor-pointer hover:text-pink-500">
              More shots from this project ↗
            </p>
          </div>
          <div className="w-full lg:w-[640px] h-[200px] lg:h-[366px] bg-pink-400"></div>
        </div>

        {/* Project 02 */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[1120px] space-y-10 lg:space-y-0">
          <div className="w-full lg:w-auto">
            <h1 className="text-4xl mb-4">02 / PROJECT NAME</h1>
            <p className="text-lg mb-4">
              Subsurface weight, specular roughness, diffuse maps generated with procedural and manual techniques.
            </p>
            <p className="font-semibold text-lg underline cursor-pointer hover:text-pink-500">
              See case study →
            </p>
          </div>
          <div className="w-full lg:w-[640px] h-[200px] lg:h-[366px] bg-pink-400"></div>
        </div>

        {/* Project 03 */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-[1120px] space-y-10 lg:space-y-0">
          <div className="w-full lg:w-auto">
            <h1 className="text-4xl mb-4">03 / PROJECT NAME</h1>
            <p className="text-lg mb-4">
              Experimental creature modeling for a school project.
            </p>
            <p className="font-semibold text-lg underline cursor-pointer hover:text-pink-500">
              Project WIP
            </p>
          </div>
          <div className="w-full lg:w-[640px] h-[200px] lg:h-[366px] bg-pink-400"></div>
        </div>
      </div>
    </div>
  );
}
