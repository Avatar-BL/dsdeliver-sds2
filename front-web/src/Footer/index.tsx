import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
            <a href="https://www.youtube.com/channel/UCn9oS5VNgy0QQG73EVGOMMg/featured" target="_new">
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/henrique-lopes-13a0291a1/" target="_new">
                <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/mr.rickmenswear" target="_new">
                <InstagramIcon />
            </a>
        </div>
        </footer>
    )
}

export default Footer;