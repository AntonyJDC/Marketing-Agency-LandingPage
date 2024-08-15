import React from 'react'

const Visitanos = () => {
    return (
        <section class="bg-[#f5f5f5]">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8" id='Visitanos'>
                <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        <span className='bg-gradient-to-r from-red-800 via-rose-500 to-red-700 bg-clip-text text-transparent'>VISITANOS</span>
                    </h2>
                    <p class="mt-4 text-lg text-gray-500">Descubre todo lo nuevo que tenemos para ti.</p>
                </div>
                <div class="mt-16 lg:mt-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="rounded-lg overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.34456775979!2d-75.00357780273433!3d11.019051300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c6a20b68621%3A0x5c3de7e774806ad1!2sUniversidad%20del%20Norte%2C%20Colombia!5e0!3m2!1sen!2sco!4v1723691567657!5m2!1sen!2sco" width="100%" height="480"></iframe>
                        </div>
                        <div>
                            <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div class="px-6 py-4">
                                    <h3 class="text-lg font-medium text-gray-900">Dirección</h3>
                                    <p class="mt-1 text-gray-600">Fundación Universidad Del Norte</p>
                                </div>
                                <div class="border-t border-gray-200 px-6 py-4">
                                    <h3 class="text-lg font-medium text-gray-900">Horario</h3>
                                    <p class="mt-1 text-gray-600">Lunes - Viernes: 8am - 5pm</p>
                                    <p class="mt-1 text-gray-600">Sabados: 8am - 12pm</p>
                                    <p class="mt-1 text-gray-600">Domingos y Feriados: Cerrado</p>
                                </div>
                                <div class="border-t border-gray-200 px-6 py-4">
                                    <h3 class="text-lg font-medium text-gray-900">Contacto</h3>
                                    <a class="mt-1 text-gray-600 hover:underline" href='https://github.com/AntonyJDC'>Email: jaconsuegra@uninorte.edu.co</a>
                                    <p class="mt-1 text-gray-600">Telefono: +573233414963</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Visitanos