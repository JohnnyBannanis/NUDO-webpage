import { useState, useEffect } from 'react'

export const Header = (props) => {

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const bgArray = ["url('../img/nudo/slide1.png')",
    "url('../img/nudo/slide2.png')",
    "url('../img/nudo/slide3.jpg')",
    "url('../img/nudo/slide4.jpg')"]
  
  return (
    <header id='header'>
      <div className='intro' style={{backgroundImage:bgArray[index % bgArray.length]}}>

        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 intro-text'>
                <div className="row rowHeader">
                  <div className='col-xs-12 col-md-6'>
                    <img src="img/logo-light.png" alt=''/>
                  </div>
                  <div className='col-xs-12 col-md-6'>
                    <p className='pFont' style={{margin:35, fontWeight:500,lineHeight: 1.4}} >{props.data ? props.data.paragraph : 'Loading'}</p>
                    <a href='#about' className='btn btn-custom btn-lg page-scroll'>
                  Conoce Más
                </a>{' '}
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
