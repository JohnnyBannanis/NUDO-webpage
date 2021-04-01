export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Quienes somos</h2>
              <p style={{fontSize:20}} >{props.data ? props.data.paragraph : 'loading...'}</p>
              <p style={{fontSize:20}}>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/dabout.jpg' className='img-responsive center-block abtImg' alt=''/>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
