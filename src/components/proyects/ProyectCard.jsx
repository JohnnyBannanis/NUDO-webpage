export const ProyectCard = (props) => {
    return (
    <div className='col-sm-6 col-md-4 col-lg-4'>
      <div className='portfolio-item'>
        <div className='hover-bg fullBg'>
          {' '}
            <div>
              <div className="row hover-text">
                <div className="col-12 hover-card-text">
                  {props.title}
                </div>
                <div className="col-12 hover-card-text">
                  {props.content}
                  
                </div>
              </div>
            </div>
            <img
              src={props.img}
              className='img-responsive'
              alt='Project Title'
            />{' '}
        </div>
      </div>
    </div>
)}