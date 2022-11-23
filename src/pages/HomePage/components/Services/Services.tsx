import './Services.scss'
import construction from './icon.svg'
import renovation from './icon (1).svg'
import Consultation from './icon (2).svg'
import RepairServices from './icon (3).svg'
import Architecture from './icon (4).svg'
import Electric from './icon (5).svg'
import greyLine from './line.jpg'
import whiteLine from './wline.jpg'

export const Services = () =>{
    return(
        <div className="services">
        <h2>Services</h2>
        <div className="grid-container">
          <div className="white-little-box">
            <img src={construction} alt="" />
            <img src={greyLine} alt="" />
            <p>Construction</p>
          </div>
          <div className="blue-little-box">
            <img src={renovation} alt="" />
            <img src={whiteLine} alt="" />
            <p>Renovation</p>
          </div>
          <div className="white-little-box">
            <img src={Consultation} alt="" />
            <img src={greyLine} alt="" />
            <p>Consultation</p>
          </div>
          <div className="blue-little-box">
            <img src={RepairServices} alt="" />
            <img src={whiteLine} alt="" />
            <p>Repair Services</p>
          </div>
          <div className="white-little-box">
            <img src={Architecture} alt="" />
            <img src={greyLine} alt="" />
            <p>Architecture</p>
          </div>
          <div className="blue-little-box">
            <img src={Electric} alt="" />
            <img src={whiteLine} alt="" />
            <p>Electric</p>
          </div>
        </div>
      </div>
    );
}