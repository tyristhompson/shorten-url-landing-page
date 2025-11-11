import './Footer.css'
import ShortlyLogo from '../assets/logo.svg'
import FacebookLogo from '../assets/icon-facebook.svg'
import InstagramLogo from '../assets/icon-instagram.svg'
import TwitterLogo from '../assets/icon-twitter.svg'
import PinterestLogo from '../assets/icon-pinterest.svg'

export function Footer() {
    return (
        <>
            <footer>
                <div class="company-name">
                    <img src={ShortlyLogo} alt="" />
                </div>

                <div class="page-links">
                    <p>Features</p>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>

                <div class="page-links">
                    <p>Resources</p>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div class="page-links">
                    <p>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div class="socials">
                    <img src={FacebookLogo} alt="" />
                    <img src={TwitterLogo} alt="" />
                    <img src={PinterestLogo} alt="" />
                    <img src={InstagramLogo} alt="" />
                </div>
            </footer>
        </>
    )
}