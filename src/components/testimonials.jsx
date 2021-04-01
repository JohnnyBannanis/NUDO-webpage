export const Testimonials = (props) => {
  /*{props.data
    ? props.data.map((d, i) => (
        <div key={`${d.name}-${i}`} className='col-md-4'>
          <div className='testimonial'>
            <div className='testimonial-image'>
              {' '}
              <img src={d.img} alt='' />{' '}
            </div>
            <div className='testimonial-content'>
              <p>"{d.text}"</p>
              <div className='testimonial-meta'> - {d.name} </div>
            </div>
          </div>
        </div>
      ))
    : 'loading'}*/
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Algunos de nuestros clientes</h2>
        <div className='col-md-12' >
          <img src="img/clientes.png" alt="" width="100%" style={{marginTop: 30, borderRadius:15, boxShadow: "0 12px 16px 0 rgb(0 0 0 / 5%)" }}/>
        </div>
        </div>
      </div>
    </div>
  )
}
