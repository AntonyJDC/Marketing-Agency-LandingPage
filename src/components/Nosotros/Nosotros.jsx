import React from 'react'
import { vector } from '../../assets';

const Nosotros = () => {
    return (
        <section class="bg-whitepb-0" id='Nosotros'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pt-24">
                ACERCA DE <span className='bg-gradient-to-r from-red-800 via-rose-500 to-red-700 bg-clip-text text-transparent'>NOSOTROS</span>
            </h2>
            <div class="gap-16 items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg px-8 py-8 text-center sm:text-center lg:text-start sm:p-8 lg:p-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">¿Quiénes somos y qué hacemos?</h2>
                    <p class="mb-4">Somos un laboratorio creativo que utiliza como activos principales la creatividad, pasión, innovación y disrupción para lograr resultados en el entorno digital.</p>
                    <p>Centrados en nuestro concepto de Agencia Inbound Marketing, fusionamos estrategias innovadoras y contenidos de valor para obtener fórmulas de crecimiento adaptadas a las necesidades de nuestros clientes.</p>
                </div>
                <div class="flex justify-center items-center">
                    <img class="w-96 rounded-lg" src={vector} alt="office content 1" />
                </div>
            </div>
        </section>
    )
}

export default Nosotros