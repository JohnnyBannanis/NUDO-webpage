import { ProyectCard } from './ProyectCard'

export const Energia = (props) => {
    return (
        <>
        <ProyectCard 
            title={
                <h3>CENTRAL HIDROELECTRICA LA MINA</h3>
            }
            content={<>
                <h4>Comuna de San Clemente</h4>
                <h4>COLBÚN</h4>
                <h4>Coordinación, Revisión de planos, Asesoría de obra</h4>
                <h4>2013</h4>
                </>
            }
            img='img/proyects/energia/01.jpg'/>
            <ProyectCard 
            title={
                <h3>PLANTA GENERADORA 13,6 MW</h3>
            }
            content={<>
                <h4>Planta Teno</h4>
                <h4>Cementos Bio Bio</h4>
                <h4>Diseño Estructural</h4>
                <h4>2008</h4>
                </>
            }
            img='img/proyects/energia/02.jpg'/>
            </>
    )}