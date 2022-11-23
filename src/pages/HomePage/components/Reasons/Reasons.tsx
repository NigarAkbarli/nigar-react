import './Reasons.scss'
import icon1 from './Vector.png'
import icon2 from './icon.png'

export const Reasons = () => {
    return(
        <div className="reasons">
        <h1>Our Reputation</h1>

        <div className="boxes">
          <div className="box">
            <img src={icon1} alt="vector" />
            <h3>Best Services</h3>
            <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
          </div>

          <div className="box">
            <img src={icon1} alt="vector" />
            <h3>Best Teams</h3>
            <p>Cursus semper tellus volutpat aliquet lacus.</p>
          </div>
          <div className="box">
            <img src={icon2} alt="vector" />
            <h3>Best Designs</h3>
            <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
          </div>
        </div>
      </div>
    );
}