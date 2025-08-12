const businessInfo = document.querySelector('.business-info');
const accountAccess = document.querySelector('.account-access');
const mediaQuery = window.matchMedia('(max-width: 540px)');

function handleMediaQueryChange(mq) {
  if (mq.matches) {
    accountAccess.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;
    
    businessInfo.innerHTML = `<img src="images/logo.svg" alt="">`;
  } else {

    accountAccess.innerHTML = `
    <p>Login</p>
    <button>Sign Up</button>
  </section>`;

    businessInfo.innerHTML = `
    <img src="images/logo.svg" alt="">
    <p>Features</p>
    <p>Pricing</p>
    <p>Resources</p>`;
  }
}

// Initial check on page load
handleMediaQueryChange(mediaQuery);

// Add listener for future changes
mediaQuery.addEventListener('change', handleMediaQueryChange);