import { NavLink } from 'react-router-dom';
import './index.scss';
// import LogoS from '../../assets/images/solid-logo.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => (
    <div className = "nav-bar">
        {/* Logo at top of sidebar */}
        {/* <Link className="logo" to="/">
            <img src ={LogoS} alt="logo"/>
            <img className="sub-logo" src ={LogoSubtitle} alt="sublogo"/>
        </Link> */}
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target = "_blank" 
                rel="noreferrer"
                href="https://www.linkedin.com/in/jedctan/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar