import './Footer.scss'
import logo from './logo.svg'
import facebook from './Vector.jpg'
import linkedin from './Vector (1).jpg'
import twitter from './Vector (2).jpg'


export const Footer = () => {
    return(
    <footer>
      <div className="bottom">
        <div className="info">
          <div className="info1">
            <p>Address:</p>
            <p>Phone:</p>
            <p>Email:</p>
            <img src={logo} />
          </div>
          <div className="info2">
            <p>6391 Elgin St. Celina, Delaware 10299</p>
            <p>+84 1102 2703</p>
            <p>hello@thebox.com</p>
          </div>
        </div>
        <div className="newsletter info1">
          <p>Newsletter:</p>
          <div className="input">
            <input type="text" placeholder="Your email here" />
            <button>Subscribe</button>
          </div>
          <p>Social:</p>
          <div className="icons">
            <img src={facebook} />
            <img src={linkedin} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    <div className="footer">TheBox Company © 2022. All Rights Reserved</div>
  </footer>
    );
}