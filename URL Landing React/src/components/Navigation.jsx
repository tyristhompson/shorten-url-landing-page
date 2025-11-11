import ShortlyLogo from '../assets/logo.svg'
import './Navigation.css'

export function Navigation() {
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
        </>
    )
}

