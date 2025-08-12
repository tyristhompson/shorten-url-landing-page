const businessInfo = document.querySelector('.business-info');
const accountAccess = document.querySelector('.account-access');
const mediaQuery = window.matchMedia('(max-width: 650px)');

function setNavStyles(mq) {
  if (mq.matches) {
    accountAccess.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;

    accountAccess.addEventListener('click', openMenu)

    businessInfo.innerHTML = `<img src="images/logo.svg" alt="">`;
  } else {

    accountAccess.innerHTML = `
    <p>Login</p>
    <button>Sign Up</button>`;

    businessInfo.innerHTML = `
    <img src="images/logo.svg" alt="">
    <p>Features</p>
    <p>Pricing</p>
    <p>Resources</p>`;
  }
}

function openMenu() {
  accountAccess.classList.toggle('open')

  if(accountAccess.classList.contains('open')) {
    accountAccess.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    
    <section class="menu">
     <p>Features</p>
     <p>Pricing</p>
     <p>Resources</p>
     <span></span>
     <p>Login</p>
      <button>Sign Up</button>
    </section>
`;
  } else {
    accountAccess.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;
  }
};


setNavStyles(mediaQuery);
mediaQuery.addEventListener('change', setNavStyles);