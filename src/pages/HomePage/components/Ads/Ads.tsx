import './Ads.scss'
import ads from './unsplash_MP0bgaS_d1c.jpg'

export const Ads = () => {
    return(
        <div className="ads desktop-only">
        <div className="ads-text">
          <h4>Free consultation with exceptional quality</h4>
          <p>Just one call away: +84 1102 2703</p>
        </div>
        <button>Get your consultation</button>
        <img src={ads} alt="" />
      </div>
    );
}