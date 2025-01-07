import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Virtual Build Tools
                    <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent
                    bg-clip-text">{"  "}For Developers</span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fuga voluptatum consequatur, labore velit quaerat obcaecati veniam doloribus quas debitis aliquam optio cumque ad aspernatur magnam saepe earum sunt illum?</p>
                <div className="flex justify-center my-10 gap-6">
                    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 
                            py-2 px-3 border rounded-md ">Start for free</a>
                    <a href="" className="py-2 px-3 border rounded-md">Documentation</a>
                </div>
                <div className="md:flex md:flex-row sm:flex sm:flex-col sm:items-center sm:justify-center  mt-10  gap-4">
                    <video className="rounded-lg md:w-1/2 border border-red-500
                     shadow-orange-500 my-4 mx-auto"  autoPlay loop muted>
                        <source src={video1} type="video/mp4" />
                        browser not supporting
                    </video>
                    <video className="rounded-lg md:w-1/2 border border-red-500 shadow-orange-500 my-4 mx-auto" autoPlay loop muted>
                        <source src={video2} type="video/mp4" />
                        browser not supporting
                    </video>
                </div>
            </div>




        </>
    )
}

export default Hero