import './Hero.scss'
import hero from './Hero.jpg'
import arrow from '../../../../assets/images/Vector.svg'
import arrow1 from '../../../../assets/images/Vector (1).svg'

export const Hero = () => {
    return(
        <div className="hero narrow-container">
        <h1>Building things <br />is our mission.</h1>
        <img src={hero} alt="hero" />
        <div className="feature-pj">
          <div className="blue">
            <p className="p1">Feature Projects</p>
            <p className="p2">The National University of Architecture</p>
          </div>
          <div className="buttons">
            <button className="but">
              <div>
                <img src={arrow} width="26px" height="17px" />
                Back
              </div>
            </button>
            <div style ={{width: '2px'}}></div>
            <button className="but">
              <div>
                Next
                <img src={arrow1} width="26px" height="17px" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
}