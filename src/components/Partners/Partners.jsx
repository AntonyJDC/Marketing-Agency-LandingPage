import React from 'react'
import {companyLogo1, companyLogo2, companyLogo3, companyLogo4} from '../../assets';

const Partners = () => {
    return (
        <div className='bg-[#f5f5f5] p-8'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px] md:px-0'>
                <h2 className='text-center text-2xl font-bold text-[#536E96]'>Equipos de todo el mundo confían en nosotros.</h2>
                <p className='text-center  text-[#536E96] text-xl'>Somos una agencia de marketing digital, que aumenta las ventas de nuestros clientes.</p>
                <div className='flex justify-center py-8 md:gap-8'>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                        <img src={companyLogo1} alt='Partnert 1'/>
                        <img src={companyLogo2} alt='Partnert 2'/>
                        <img src={companyLogo3} alt='Partnert 3'/>
                        <img src={companyLogo4} alt='Partnert 4'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners