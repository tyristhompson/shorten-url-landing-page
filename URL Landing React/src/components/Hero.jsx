import './Hero.css'
import WorkingIllustration from '../assets/illustration-working.svg'

export function Hero() {
    return (
        <>
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
        </>
    )
}