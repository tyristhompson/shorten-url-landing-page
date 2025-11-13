import { useState, useEffect } from 'react';
import ShortlyLogo from '../assets/logo.svg'
import './Navigation.css'

export function Navigation() {
    const [accountAccess, setAccountAccess] = useState();
    const [businessInfo, setBusinessInfo] = useState();
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 650) {
            setAccountAccess(
                <>
                    <p>Login</p>
                    <button>Sign Up</button>
                </>
            )

            setBusinessInfo(
                <>
                    <img src={ShortlyLogo} alt="" />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </>
            )
        }
        else {
            setAccountAccess(
                <>
                    <span></span>
                    <span></span>
                    <span></span>
                </>
            )

            setBusinessInfo(
                <>
                    <img src={ShortlyLogo} alt="" />
                </>
            )
        }
    }, [])

    useEffect(() => {
        const updateAccountAccess = () => {
            const mediaQuery = window.matchMedia('(max-width: 650px)');

            if (mediaQuery.matches) {
                setAccountAccess(
                    <>
                        <span></span>
                        <span></span>
                        <span></span>
                    </>
                )

                setBusinessInfo(
                    <>
                        <img src={ShortlyLogo} alt="" />
                    </>
                )
            }
            else {
                setAccountAccess(
                    <>
                        <p>Login</p>
                        <button>Sign Up</button>
                    </>
                )

                setBusinessInfo(
                    <>
                        <img src={ShortlyLogo} alt="" />
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Resources</p>
                    </>
                )
            }
        }

        window.addEventListener('resize', updateAccountAccess)

    }, [])

    function manageMenu() {
        if (menu === false && window.innerWidth < 650) {
            setMenu(true)
        }
        else {
            setMenu(false)
        }

        if (menu === true && window.innerWidth < 650) {
            setAccountAccess(
                <>
                    <span></span>
                    <span></span>
                    <span></span>

                    <section className="menu">
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Resources</p>
                        <span></span>
                        <p>Login</p>
                        <button>Sign Up</button>
                    </section>
                </>
            )
        }
        else if(menu === false && window.innerWidth < 650) {
            setAccountAccess(
                <>
                    <span></span>
                    <span></span>
                    <span></span>
                </>
            )
        }
    }


    return (
        <>
            <nav>
                <section className="business-info">
                    {businessInfo}
                </section>
                <section className="account-access" onClick={manageMenu}>
                    {accountAccess}
                </section>
            </nav>
        </>
    )
}

