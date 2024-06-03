import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">     
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">{new Date().getFullYear()} © - Hecho con ❤️ por <a className='underline' href="https://unaigonzalez.es">Unai González.</a>
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="https://twitter.com/unaiitxuu" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} />
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="https://instagram.com/unaiitxuu" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span className="sr-only">Instagram account</span>
                    </a>
                    <a href="https://github.com/unaigonzalezz" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
