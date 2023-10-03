import '../Css/Footer.css'
import Facebook from '../assets/social/facebook-blue.svg'
import Instagram from '../assets/social/instagram-blue.svg'
import Twitter from '../assets/social/twitter-blue.svg'
import App from '../assets/store/app-store.svg'
import Play from '../assets/store/play-store.svg'
import Windows from '../assets/store/windows-store.svg'

function FooterPages() {
  return (
    <div className="footer">
      <ul className="navegador ">
        <li>
          <a href="#">Home</a> | 
          <a href="#">Terms and Conditions</a> | 
          <a href="#">Privacy Policy</a> | 
          <a href="#">Collection Statemet</a> | 
          <a href="#">Help</a> | 
          <a href="#">Manage Account</a> 
        </li>
        <div className='copy'>&copy; 2006 Línea de Código</div>
      </ul>
      <div className='log-img'>
      <div className='logo'>
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
      </div>
      <div className='img'>
        <img src={App} alt="" />
        <img src={Play} alt="" />
        <img src={Windows} alt="" />
      </div>
      </div>
    </div>
  );
}

export default FooterPages