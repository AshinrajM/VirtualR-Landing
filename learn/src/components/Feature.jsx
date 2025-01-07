import { features } from "../constants"
const Feature = () => {
    return (
        <>
            <div className="mt-20 border-b border-neutral-800 min-h-[800px]">
                <div className="text-center">
                    <span className="bg-neutral-900 text-orange-500 rounded-full h-8 text-sm font-semibold px-2 py-2 uppercase">Features</span>
                    <h2 className="text-3xl sm:text-4xl md:text-7xl mt-10 lg:mt-20">Easily build your code <span className="bg-gradient-to-r from-orange-500 to-orange-900  text-transparent bg-clip-text">{" "}With Us</span>
                    </h2>
                </div>

                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {features.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 justify-center">
                            <div className="flex justify-center">
                                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center rounded-full items-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                                    <p className="text-md mb-20 p-2 text-neutral-500">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                

            </div>
        </>
    )
}

export default Feature