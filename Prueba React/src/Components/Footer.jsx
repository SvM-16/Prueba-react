import '../Css/Footer.css'
import Facebook from '../assets/social/facebook-blue.svg'
import Instagram from '../assets/social/instagram-blue.svg'
import Twitter from '../assets/social/twitter-blue.svg'
import App from '../assets/store/app-store.svg'
import Play from '../assets/store/play-store.svg'
import Windows from '../assets/store/windows-store.svg'

const Footer = () => {
  return (
    <div className='Container2'>
      <div className="footer">
        <div className="header">
          <ul className="ul">
            <li className="li"><a href="">Home</a></li>
            |
            <li className="li"><a href="">Terms and Conditions</a></li>
            |
            <li className="li"><a href="">Privacy Policy</a></li>
            |
            <li className="li"><a href="">Collection Statement</a></li>
            |
            <li className="li"><a href="">Help</a></li>
            |
            <li className="li"><a href="">Manage Account</a></li>
          </ul>
          <p className='p'>Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
        </div>
        <div className="redesApp">
          <div className="redes">
            <img src={Facebook} alt="" className="redesimg" />
            <img src={Twitter} alt="" className="redesimg" />
            <img src={Instagram} alt="" className="redesimg" />
          </div>
          <div className="app">
            <img src={App} alt="" className="appimg" />
            <img src={Play} alt="" className="appimg" />
            <img src={Windows} alt="" className="appimg" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer