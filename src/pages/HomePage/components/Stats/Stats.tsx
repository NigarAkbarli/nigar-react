import './Stats.scss'
import rectangle from './Rectangle 19.svg'

export const Stats = () => {
    return(
        <div className="stats desktop-only">
        <div className="stats-left">
          <div className="happy-clients stats-box">
            <h1>84</h1>
            <div>
              <img src={rectangle} alt="" />
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="projects-completed stats-box">
            <h1>123</h1>
            <div>
              <img src={rectangle} alt="" />
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="awards-win stats-box">
            <h1>37</h1>
            <div>
              <img src={rectangle} alt="" />
              <p>Awards Win</p>
            </div>
          </div>
          <div className="last stats-box">
            <h1>30</h1>
            <div>
              <img src={rectangle} alt="" />
              <p>Years in Business</p>
            </div>
          </div>
        </div>
        <div className="stats-right">
          <h2>
            30 Years<br />
            Experience
          </h2>
          <p>
            Our company has been the <br />leading provided construction<br />
            services to clients throughout <br />the USA since 1988.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    );
}