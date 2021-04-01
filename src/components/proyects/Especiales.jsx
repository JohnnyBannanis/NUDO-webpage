import { ProyectCard } from './ProyectCard'

export const Especiales = (props) => {
    return (
        <>
        <ProyectCard 
          title={
              <h3>CUBIERTA ESTADIO REGIONAL, ANTOFAGASTA</h3>
          }
          content={<>
              <h4>Navarrete & Diaz Cumsille Ingenieros</h4>
              <h4>Diseño Estructural</h4>
              <h4>2012</h4>
              </>
          }
          img='img/proyects/especiales/01.jpg'
        />
        <ProyectCard 
          title={
              <h3>OFICINAS SGS RUSSO, TALCA</h3>
          }
          content={<>
              <h4>CONSTRUCTORA LA PROVINCIA</h4>
              <h4>Diseño Estructural</h4>
              <h4>2004</h4>
              <h4>583 m<sup>2</sup></h4>
              </>
          }
          img='img/proyects/especiales/02.jpg'
        />
        <ProyectCard 
          title={
              <h3>TALLER RUSSO, TALCA</h3>
          }
          content={<>
              <h4>Paulo Russo</h4>
              <h4>Diseño Estructural</h4>
              <h4>2000</h4>
              <h4>2.230 m<sup>2</sup></h4>
              </>
          }
          img='img/proyects/especiales/03.jpg'
        />
        <ProyectCard 
          title={
              <h3>CAPILLA COLEGIO SAN JOSÉ, CURICÓ</h3>
          }
          content={<>
              <h4>Fundación Educacional San José de Curicó</h4>
              <h4>Diseño Estructural</h4>
              <h4>2000</h4>
              </>
          }
          img='img/proyects/especiales/04.jpg'
        />
        </>
    )}