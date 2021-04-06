export const Bim = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>BIM</h2>
          <p style={{textAlign:"left",fontSize:20}}>
          Desde el 2009, NUDO ha desarrollado sus proyectos bajo el concepto Building Information Modeling (BIM) o también conocido como Modelado de Información para la Construcción. El objetivo de esta plataforma es la incorporación de información paramétrica al modelado 3D, la que abarca la geometría de la obra, las relaciones espaciales, la información geográfica, así como las cantidades y las propiedades de los componentes de una obra. Esto mejora la dinámica de desarrollo de un proyecto, siendo posible evaluar una mayor cantidad de soluciones y alternativas de diseño.
          </p>
        </div>
        <div id='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='s-title'>
              <h3>Coordinacion BIM</h3>
            </div>
            <p style={{textAlign:"left",fontSize:20}}>
            El trabajo de coordinación en una plataforma BIM mejora considerablemente la capacidad para evaluar distintas alternativas. El objetivo de esto, es disminuir los costos asociados a los imprevistos que normalmente se generan en la construcción de una obra, mejorando la gestión entre las diferentes especialidades, con lo que se logra anticipar las interferencias en obra, y con ello, acotar los plazos de ejecución.
            </p>
            <div class="bim-text" style={{textAlign:"left"}}>
            <div style={{paddingTop:15}}>
              <h4>Ventajas</h4>
            </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <ul>
                  <li>Mejora la coordinación y comunicación entre disciplinas.</li>
                  <li>Permite obtener información paramétrica (áreas, volúmenes, información técnica, etc) de los distintos elementos constructivos.</li>
                  <li>Permite la detección de interferencias entre disciplinas, anticipándose a los errores en obras.</li>
                  <li>Aumenta la capacidad resolutiva dado que las modificaciones de las especialidades pueden ser verificadas de forma virtual.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-6 bim-col-bg'  style={{paddingTop:30, paddingBottom:30}} >
            <iframe width="355" height="200" src="https://www.youtube.com/embed/pTZ5vvp-9f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{paddingBottom:20}}></iframe>
            <iframe width="355" height="200" src="https://www.youtube.com/embed/Hc9fePr8zPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{paddingBottom:20}} ></iframe>
            <iframe width="355" height="200" src="https://www.youtube.com/embed/rwZWdDiopvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
