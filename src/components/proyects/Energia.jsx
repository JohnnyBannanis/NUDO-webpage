import { ProyectCard } from './ProyectCard'

export const Energia = (props) => {
    return (
        <>
        <ProyectCard 
            title={
                <h3>CENTRAL HIDROELECTRICA LA MINA</h3>
            }
            content={<>
                <h5>Comuna de San Clemente</h5>
                <h5>COLBÚN</h5>
                <h5>Coordinación, Revisión de planos, Asesoría de obra</h5>
                <h5>2013</h5>
                </>
            }
            img='img/proyects/energia/01.jpg'/>
            <ProyectCard 
            title={
                <h3>PLANTA GENERADORA 13,6 MW</h3>
            }
            content={<>
                <h5>Planta Teno</h5>
                <h5>Cementos Bio Bio</h5>
                <h5>Diseño Estructural</h5>
                <h5>2008</h5>
                </>
            }
            img='img/proyects/energia/02.jpg'/>
            </>
    )}