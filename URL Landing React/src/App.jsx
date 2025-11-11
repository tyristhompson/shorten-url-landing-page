import './App.css'
import ShortlyLogo from './assets/logo.svg'
import WorkingIllustration from './assets/illustration-working.svg'
import BrandRecognitionIcon from './assets/icon-brand-recognition.svg'
import DetailedRecordsIcon from './assets/icon-detailed-records.svg'
import FullyCustomizableIcon from './assets/icon-fully-customizable.svg'
import FacebookLogo from './assets/icon-facebook.svg'
import InstagramLogo from './assets/icon-instagram.svg'
import TwitterLogo from './assets/icon-twitter.svg'
import PinterestLogo from './assets/icon-pinterest.svg'


function App() {


  return (
    <>
      <nav>
        <section class="business-info">
          <img src={ShortlyLogo} alt="" />
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>

        </section>
        <section class="account-access">
          <p>Login</p>
          <button>Sign Up</button>
        </section>
      </nav>

      <header class="hero">
        <div class="call-to-action">
          <h2>More than just shorter links</h2>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <div class="desk-img-container">
          <img src={WorkingIllustration} alt="" />
        </div>
      </header>

      <section class="url-field">
        <form>
          <div class="enter-url">
            <input type="text" id="url-input" name="Shorten url" placeholder="Shorten a link here..." />
          </div>

          <input type="submit" id="url-submit" value="Shorten it!" />
        </form>
      </section>

      <section class="stats">
        <div class="stats-title-container">
          <h3>Advanced Statistics</h3>
          <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
      </section>

      <section class="benefits">
        <div class="benefit-card brand">
          <div class="img-container">
            <img src={BrandRecognitionIcon} alt="" />
          </div>
          <h4>Brand Recognition</h4>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. </p>
        </div>

        <div class="blue-line"></div>

        <div class="benefit-card records">
          <div class="img-container">
            <img src={DetailedRecordsIcon} alt="" />
          </div>
          <h4> Detailed Records</h4>
          <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>

        <div class="blue-line"></div>

        <div class="benefit-card customizable">
          <div class="img-container">
            <img src={FullyCustomizableIcon} alt="" />
          </div>
          <h4>Fully Customizable</h4>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>

        <div class="line"></div>
      </section>

      <section class="boost">
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </section>

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

export default App
