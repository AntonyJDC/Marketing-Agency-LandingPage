import React from 'react'

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 ">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-5 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            ¿Quieres hacer crecer tu negocio o marca?{' '}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className='bg-gradient-to-r from-red-800 to-rose-500 bg-clip-text text-transparent'>JO</span> AGENCIA DIGITAL
          </h1>
          <p className="mt-6 text-xl italic leading-8 text-gray-600">
            "Conectando ideas, creando futuro"
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md shadow-xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-secondary duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Más información <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero