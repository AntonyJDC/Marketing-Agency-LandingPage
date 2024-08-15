import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-primary rounded-lg shadow m-4 mt-12">
            <div class="w-full mx-auto max-w-screen-lg p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center">© 2024 <a href="https://github.com/AntonyJDC/" class="hover:underline">AntonyJDC</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Acerca</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Politica de privacidad</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licencia</a>
                    </li>
                    <li>
                        <a href="https://github.com/AntonyJDC" class="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer