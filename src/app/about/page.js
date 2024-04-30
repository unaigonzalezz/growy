import React from 'react'
import NavBar from '../components/navBarComponent/navBarComponent'

export default function page() {
return (
    <>
    <NavBar />
    <div className='bg-gray-900 text-white'>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-white flex justify-center ">
                    <div class="flex flex-col lg:flex-row justify-between gap-8">
                            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">¿Que es la Onicofagia?</h1>
                                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Según un estudio realizado por Ipsos, el 15% de españoles se muerden las uñas, lo que equivale a 7 millones de personas, mucha gente asume esto como algo normal, pero lo que no todo el mundo sabe es que detrás se esconde una enfermedad, la Onicofagia. </p>
                                    <br/>
                                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">La Onicofagia (del griego ονυξ onyx, 'uña', y φαγειν phagein, 'comer') es el trastorno que recibe el hábito de comerse las uñas, este trastorno normalmente incontrolable puede llegar a precisar de ayuda psicológica e incluso médica, ya que la persona que padece onicofagia normalmente se produce heridas en dedos, labios y encías, así como diversas infecciones por microbios, pudiéndose manifestar este trastorno en todas las falanges e incluso se dan casos donde se produce la ingesta de la uña tras morderla.</p>
                                    
                                    
                            </div>
                            <div class="w-full lg:w-8/12">
                                    <img class="w-full h-full border-rad rounded-lg" src="https://clinicadentaljzapata.es/images/blog/1088b823.jpg" alt="A group of People" />
                            </div>
                    </div>
            </div>
            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-white flex justify-center">
                    <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-8/12">
                                    <img class="w-full h-full border-rad rounded-lg" src="https://reviveclinic.com/wp-content/uploads/2020/04/stock-image-113032662.jpg" alt="A group of People" />
                            </div>
                            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">¿Y que puedo hacer?</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Si bien es cierto que parece un hábito inofensivo, no lo es, la Onicofagia está reconocida como un tipo de Canibalismo, llamado Auto canibalismo, donde una persona se come una parte de si misma, como un pellejo de la uña, la propia uña o la carne del labio. Cosas tan banales como abrir una lata, retirar la piel de una mandarina o incluso rascarse resultan un reto para los pacientes de Onicofagia, ya que la uña es de gran ayuda en tareas cotidianas.
Los motivos que producen la Onicofagia pueden ser varios: Estrés, aburrimiento, ansiedad, nerviosismo o incluso, costumbre. De forma habitual muchos niños pequeños de entre 3 y 6 años comienzan a una temprana edad a morderse las uñas, y aunque esto puede parecer peligroso normalmente suele desaparecer con el tiempo, aunque en casos extremos esto se puede prolongar a su vida adulta.
</p>
                    
                </div>  
            </div>
            <br/>
            
        </div>
        <div className='text-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5'>¡Quiero dejar de morderme las uñas!</button>
        </div>
        </div>
    </>
  )
}
