import Image from "next/image";


function Featured() {
  return (
    <div className="py-1">
      {/* Header */}
      <div className="flex justify-between items-center px-1 py-2">
        <h1 className="text-lg font-bold text-blue-600">Featured Games</h1>
        <button className="text-[var(--secondary-color)] font-bold text-sm hover:text-[var(--primary-color)] transition 3s ease-in cursor-pointer">View All</button>
      </div>

      {/* Images */}
      {/* <div className="px-1">
        <div className="grid grid-cols-3 gap-2 h-[300px]">
          
          
          <div className="col-span-2 row-span-2 relative">
            <Image
              src={Featured1}
              alt="Featured Game"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
            <video
              src="/assets/videos/haritari.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="relative">
            <Image
              src={Featured2}
              alt="Game"
              fill
              className="rounded-lg object-cover"
            />
          </div>

         
          <div className="relative">
            <Image
              src={Featured2}
              alt="Game"
              fill
              className="rounded-lg object-cover"
            />
          </div>

        </div>
      </div> */}
      <div className="px-1">
        <div className="grid grid-cols-3 gap-2 h-[300px]">
          {/* Large Left*/}
          <div className="col-span-2 row-span-2 relative h-full overflow-hidden rounded-lg">
            <video
              src="/assets/videos/haritari.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="relative overflow-hidden rounded-lg ">
             <video
              src="/assets/videos/haritari.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* <Image src={Featured2} alt="Game" fill className="object-cover" /> */}
          </div>

          {/* Bottom Right */}
          <div className="relative overflow-hidden rounded-lg">
             <video
              src="/assets/videos/haritari.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* <Image src={Featured2} alt="Game" fill className="object-cover" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
