import { ProyectCard } from './ProyectCard'

export const Infraestructura = (props) => {
    return (
        <>
        <ProyectCard 
          title={
              <h3>PLAZAS DE PEAJE, EDIFICIOS ADMINISTRACIÓN Y SERVICIOS</h3>
          }
          content={<>
              <h4>Ruta H-60</h4>
              <h4>CONCESIONARIA OHL</h4>
              <h4>Gestión de Proyectos (Arquitectura, Diseño Estructural, Especialidades y Coordinación)</h4>
              <h4>2007</h4>
              </>
          }
          img='img/proyects/Infraestructura/01.jpg'
        />
        <ProyectCard 
          title={
                <h3>ESTRUCTURA PÓRTICOS PEAJES LIBERADOS RUTA 5</h3>
            }
            content={<>
                <h4>AUTOPISTA DEL MAIPO</h4>
                <h4>Arquitectura y Estructural</h4>
                <h4>2002</h4>
                </>
            }
          img='img/proyects/Infraestructura/02.jpg'
        />
        <ProyectCard 
          title={
                <h3>PLAZAS DE PEAJE ANGOSTURA, QUINTA</h3>
            }
            content={<>
                <h4>Acceso Oriente</h4>
                <h4>AUTOPISTA DEL MAIPO</h4>
                <h4>Diseño Estructural</h4>
                <h4>2001</h4>
                </>
            }
          img='img/proyects/Infraestructura/03.jpg'
        />
        <ProyectCard 
          title={
              <h3>PLAZAS DE PEAJE LATERALES RUTA 5</h3>
          }
          content={<>
              <h4>Santiago-Talca</h4>
              <h4>AUTOPISTA DEL MAIPO</h4>
              <h4>Arquitectura y Estructural</h4>
              <h4>2001</h4>
              </>
          }
          img='img/proyects/Infraestructura/04.jpg'
        />
        </>
    )}