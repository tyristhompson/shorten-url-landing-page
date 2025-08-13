const businessInfo = document.querySelector('.business-info');
const accountAccess = document.querySelector('.account-access');
const form = document.querySelector('form');
const input = document.querySelector('#url-input');
const inputContainer = document.querySelector('.enter-url');
const errorMessage = document.createElement('p');
errorMessage.className = 'error-message';
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
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();
  const url = input.value.trim();
  if(url === "") {
    errorMessage.textContent = `Please enter a url.`;
    inputContainer.appendChild(errorMessage);
    input.classList.add('error');
    input.addEventListener('keypress', removeError);
    return
  }
  isValidURL(url);
};


function isValidURL(url) {
  try {
    const validURL = new URL(url);
    const encodedURL = encodeURIComponent(validURL);
    shortenURL(encodedURL);

  } catch (error) {
    errorMessage.textContent = `The URL you entered is not valid.`;
    inputContainer.appendChild(errorMessage);
    input.classList.add('error');
    input.addEventListener('keydown', removeError);
    console.log(error);
  }
}


function removeError() {
  if(input.classList.contains('error')) {
    input.classList.remove('error');
    inputContainer.removeChild(errorMessage);
  }
}


async function shortenURL(validURL) {
  try {
    const response = await fetch(
    "https://corsproxy.io/?" + "https://cleanuri.com/api/v1/shorten",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: validURL,
      }),
    }
  );

  const data = await response.json();
  console.log(data.result_url);
} catch (error) {
      console.log(error);
  }
}




