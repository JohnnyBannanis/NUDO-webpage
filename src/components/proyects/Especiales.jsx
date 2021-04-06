import { ProyectCard } from './ProyectCard'

export const Especiales = (props) => {
    return (
        <>
        <ProyectCard 
          title={
              <h3>CUBIERTA ESTADIO REGIONAL, ANTOFAGASTA</h3>
          }
          content={<>
              <h5>Navarrete & Diaz Cumsille Ingenieros</h5>
              <h5>Diseño Estructural</h5>
              <h5>2012</h5>
              </>
          }
          img='img/proyects/especiales/01.jpg'
        />
        <ProyectCard 
          title={
              <h3>OFICINAS SGS RUSSO, TALCA</h3>
          }
          content={<>
              <h5>CONSTRUCTORA LA PROVINCIA</h5>
              <h5>Diseño Estructural</h5>
              <h5>2004</h5>
              <h5>583 m<sup>2</sup></h5>
              </>
          }
          img='img/proyects/especiales/02.jpg'
        />
        <ProyectCard 
          title={
              <h3>TALLER RUSSO, TALCA</h3>
          }
          content={<>
              <h5>Paulo Russo</h5>
              <h5>Diseño Estructural</h5>
              <h5>2000</h5>
              <h5>2.230 m<sup>2</sup></h5>
              </>
          }
          img='img/proyects/especiales/03.jpg'
        />
        <ProyectCard 
          title={
              <h3>CAPILLA COLEGIO SAN JOSÉ, CURICÓ</h3>
          }
          content={<>
              <h5>Fundación Educacional San José de Curicó</h5>
              <h5>Diseño Estructural</h5>
              <h5>2000</h5>
              </>
          }
          img='img/proyects/especiales/04.jpg'
        />
        </>
    )}