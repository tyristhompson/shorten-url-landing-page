import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <section class= "business-info">
          <img src="images/logo.svg" alt="" />
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>

        </section>
        <section class="account-access">

        </section>
      </nav>

      <header class="hero">
        <div class="call-to-action">
          <h2>More than just shorter links</h2>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <div class="desk-img-container">
          <img src="images/illustration-working.svg" alt="" />
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
   </>
  )
}

export default App
