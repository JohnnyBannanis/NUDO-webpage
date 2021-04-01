export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Servicios</h2>
        </div>
        <div className='row'>
          {props.data
            ? ( <><div className='col-lg-6 col-md-6 col-xs-12' >
                  {' '}
                  <i className={props.data[0].icon}></i>
                  <div >
                    <h3 style={{fontSize:23}}>{props.data[0].name}</h3>
                    <p style={{fontSize:20, textAlign:"left"}}>{props.data[0].text}</p>
                    <div class="services-text" style={{textAlign:"left"}}>
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <ul>
                        {props.data[0]
                          ? props.data[0].list.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : 'loading'}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-xs-12' >
                {' '}
                <i className={props.data[1].icon}></i>
                <div >
                  <h3 style={{fontSize:23}}>{props.data[1].name}</h3>
                  <p style={{fontSize:20, textAlign:"left"}}>{props.data[1].text}</p>
                  <div class="services-text" style={{textAlign:"left"}}>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <ul>
                      {props.data[1]
                        ? props.data[1].list.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : 'loading'}
                      </ul>
                    </div>
                  </div>
                </div>
              </div></>
                
              )
            : 'loading'}
        </div>
        <div className='row' style={{marginTop:50}}>
        {props.data
            ? ( <><div className='col-lg-6 col-md-6 col-xs-12' >
                  {' '}
                  <i className={props.data[2].icon}></i>
                  <div >
                    <h3 style={{fontSize:23}}>{props.data[2].name}</h3>
                    <p style={{fontSize:20, textAlign:"left"}}>{props.data[2].text}</p>
                    <div class="services-text" style={{textAlign:"left"}}>
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <ul>
                        {props.data[2]
                          ? props.data[2].list.map((d, i) => (
                              <li key={`${d}-${i}`}>{d}</li>
                            ))
                          : 'loading'}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-xs-12' >
                {' '}
                <i className={props.data[3].icon}></i>
                <div >
                  <h3 style={{fontSize:23}}>{props.data[3].name}</h3>
                  <p style={{fontSize:20, textAlign:"left"}}>{props.data[3].text}</p>
                  <div class="services-text" style={{textAlign:"left"}}>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <ul>
                      {props.data[3]
                        ? props.data[3].list.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : 'loading'}
                      </ul>
                    </div>
                  </div>
                </div>
              </div></>
                
              )
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
