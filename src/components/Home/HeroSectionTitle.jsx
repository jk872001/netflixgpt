/* eslint-disable react/prop-types */

const HeroSectionTitle = ({original_title,overview}) => {
   
  return (
    <div className="pt-[20%] px-10 w-full aspect-video overflow-hidden absolute bg-gradient-to-r from-black">
       <h1 className="font-bold text-6xl text-white">{original_title}</h1>
       <p className="w-1/3 text-md my-2 text-white">{overview}</p>
       <div className="my-3">
       <button className="bg-white px-12 py-3 rounded-md "> Play</button>
       <button className="bg-gray-400 px-10 py-3 rounded-md text-white mx-3"> More Info</button>
       </div>
    
    </div>
  )
}

export default HeroSectionTitle