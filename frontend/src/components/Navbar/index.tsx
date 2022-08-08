import {ReactComponent as Icon } from '../../assets/img/github.svg';
import './styles.css'

const Navbar = () => {
  return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/Marycorreia12" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <Icon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
</header>
  )
}

export default Navbar
