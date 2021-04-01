import { Energia } from './proyects/Energia'
import { Especiales } from './proyects/Especiales'
import { Industriales } from './proyects/Industriales'
import { Infraestructura } from './proyects/Infraestructura'
import { Inmobiliarios } from './proyects/Inmobiliarios'
import { Institucionales } from './proyects/Institucionales'

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Proyectos</h2>
          <p style={{textAlign:"left",fontSize:20}}>
            Nuestro compromiso es con el cliente cualquiera sea la escala de su proyecto. Es por eso que con más de 700 obras construidas contamos con una larga trayectoria y experiencia que asegura la calidad de nuestros servicios.
          </p>
          <p style={{textAlign:"left",fontSize:20}}>
            Los proyectos presentados en este portafolio son solo algunos de los elaborados a lo largo de nuestra historia, que van desde proyectos industriales e inmobiliarios, y que demuestran nuestra experiencia en el área de Gestión, Coordinación y Diseño estructural.  
          </p>
        </div>
        <div className='s-title'>
          <h3>Energia</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Energia/>
          </div>
        </div>

        <div className='s-title'>
          <h3>Especiales</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Especiales/>
          </div>
        </div>

        <div className='s-title'>
          <h3>Industriales</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Industriales/>
          </div>
        </div>

        <div className='s-title'>
          <h3>Infraestructura</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Infraestructura/>
          </div>
        </div>

        <div className='s-title'>
          <h3>Inmobiliarios</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Inmobiliarios/>
          </div>
        </div>

        <div className='s-title'>
          <h3>Institucionales</h3>
        </div>
        <div className='row' style={{marginBottom:42}}>
          <div >
            <Institucionales/>
          </div>
        </div>
      </div>
    </div>
  )
}

