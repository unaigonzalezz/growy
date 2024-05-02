import React from 'react'
import './aboutUsPrincipal.css'

export default function aboutUsComponent() {
  return (
<>
<div className="custom-shape-divider-bottom-1714476826">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className=''>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
<section className="pt-8 lg:pt-32 bg-center dark:bg-gray-900 bg-cover">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">¿Quien soy?</h2>
            <p className="mb-4">Soy Unai González y llevo mordiéndome las uñas desde que tengo conciencia, mis padres dicen que empecé a los 3 años, aunque no recuerdo nada de tan temprana edad, si tengo algún recuerdo suelto mordiéndome las uñas siendo un poco más mayor, seguramente mientras escriba este trabajo, alguna vez me muerda las uñas.</p>
            <p className="mb-4">Mi relación con la Onicofagia es más tóxica de lo que querría, muerdo mis uñas más de 20 veces al día de forma inconsciente, astillo las uñas levantando la parte superior, me muerdo los padrastros superiores y laterales, llegándome a abrir heridas y dejar la piel en carne viva. Tengo las cutículas muy debilitadas, la uña más frágil que un papel y la piel de la uña destrozada.</p>
            <p>Pero esto se ha acabado, he creado Growy para acabar con esta mala práctica.</p>
            <br/>
            <h2 className='h2'>Bienvenido a la revolución, bienvenido a...</h2>
            <img
                    className="h-8 w-auto mt-4"
                    src="/assets/logo.png"
                    alt="Your Company"
                  />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://unaigonzalez.es/static/media/me.735ddc8c35966ca68eeb.jpg" alt="office content 1" />
            <img className="w-full rounded-lg" src="https://unaigonzalez.es/static/media/me.735ddc8c35966ca68eeb.jpg" alt="office content 1" />
        </div>
    </div>
</section>
</>
  )
}
