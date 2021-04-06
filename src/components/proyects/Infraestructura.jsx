import { ProyectCard } from './ProyectCard'

export const Infraestructura = (props) => {
    return (
        <>
        <ProyectCard 
          title={
              <h3>PLAZAS DE PEAJE, EDIFICIOS ADMINISTRACIÓN Y SERVICIOS</h3>
          }
          content={<>
              <h5>Ruta H-60</h5>
              <h5>CONCESIONARIA OHL</h5>
              <h5>Gestión de Proyectos (Arquitectura, Diseño Estructural, Especialidades y Coordinación)</h5>
              <h5>2007</h5>
              </>
          }
          img='img/proyects/Infraestructura/01.jpg'
        />
        <ProyectCard 
          title={
                <h3>ESTRUCTURA PÓRTICOS PEAJES LIBERADOS RUTA 5</h3>
            }
            content={<>
                <h5>AUTOPISTA DEL MAIPO</h5>
                <h5>Arquitectura y Estructural</h5>
                <h5>2002</h5>
                </>
            }
          img='img/proyects/Infraestructura/02.jpg'
        />
        <ProyectCard 
          title={
                <h3>PLAZAS DE PEAJE ANGOSTURA, QUINTA</h3>
            }
            content={<>
                <h5>Acceso Oriente</h5>
                <h5>AUTOPISTA DEL MAIPO</h5>
                <h5>Diseño Estructural</h5>
                <h5>2001</h5>
                </>
            }
          img='img/proyects/Infraestructura/03.jpg'
        />
        <ProyectCard 
          title={
              <h3>PLAZAS DE PEAJE LATERALES RUTA 5</h3>
          }
          content={<>
              <h5>Santiago-Talca</h5>
              <h5>AUTOPISTA DEL MAIPO</h5>
              <h5>Arquitectura y Estructural</h5>
              <h5>2001</h5>
              </>
          }
          img='img/proyects/Infraestructura/04.jpg'
        />
        </>
    )}