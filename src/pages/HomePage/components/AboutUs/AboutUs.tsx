import './AboutUs.scss'
import aboutUs from './about-us.jpg'

export const AboutUs = () => {
    return (
        <div className='about-us'>
        <img src={aboutUs} alt="about us" />
        <div className='blue-box'>
          <h2>About us</h2>
          <p>
            For more than 30 years we have been <br />delivering world-class
            construction <br />and we’ve built many lasting <br />relationships
            along the way.
          </p>
          <p>
            We’ve matured into an industry leader<br />
            and trusted resource for those seeking <br />quality, innovation and
            reliability when <br />building in the U.S.
          </p>
          <button>More on Our History</button>
        </div>
      </div>
    );
}