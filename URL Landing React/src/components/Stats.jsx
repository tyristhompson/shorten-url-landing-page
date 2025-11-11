import './Stats.css'
import BrandRecognitionIcon from '../assets/icon-brand-recognition.svg'
import DetailedRecordsIcon from '../assets/icon-detailed-records.svg'
import FullyCustomizableIcon from '../assets/icon-fully-customizable.svg'

export function Stats() {
    return (
        <>
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
        </>
    )
}