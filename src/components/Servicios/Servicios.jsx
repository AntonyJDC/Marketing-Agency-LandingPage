import React from 'react'
import { FaPaintbrush } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";
import { FaPhotoVideo, FaCode } from "react-icons/fa";
import { ImBullhorn, ImFacebook2  } from "react-icons/im";

const Servicios = () => {
    const services = [
        { title: "Posicionamiento SEO", icon: <TbSeo /> },
        { title: "Diseño y desarrollo de sitios web", icon: <FaCode /> },
        { title: "Diseño gráfico", icon: <FaPaintbrush/>},
        { title: "Branding", icon: <ImBullhorn /> },
        { title: "Redes sociales", icon: <ImFacebook2 /> },
        { title: "Fotografía y video", icon: <FaPhotoVideo /> },
    ];

    return (
        <div className="bg-white text-gray-900 py-16 px-8" id='Servicios'>
            <div className="max-w-7xl mx-auto">
                <div className='relative isolate text-center py-8 mb-10'>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        NUESTROS <span className='bg-gradient-to-r from-red-800 via-rose-500 to-red-700 bg-clip-text text-transparent'>SERVICIOS</span> 
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            {services.slice(2, 6).map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f5f5f5] p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-xl border-2"
                                >
                                    <div className="text-primary text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-normal text-gray-900">
                                        {service.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {services.slice(0, 2).map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#f5f5f5] p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-xl border-2"
                            >
                                <div className="text-primary text-4xl mb-4 lg:text-6xl">{service.icon}</div>
                                <h3 className="text-xl font-normal text-gray-900">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios