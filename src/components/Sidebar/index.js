import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logoAVblank.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  // faSuitcase,
  // faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
<Link 
        className="logo" to = '/'>
        <img src={LogoS} alt="Logo" />
      </Link>
    <nav>
      <NavLink
          exact="true"
          activeclassname="active"
          to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          // onClick={() => setShowNav(false)}>
          >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
      <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/aman-vahora"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/amanva"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
          </ul>
    </div>

)

export default Sidebar