import { useState } from 'react';
import axios from 'axios'
import './URLField.css'

export function URLField() {
    const [inputText, setInputText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const url = inputText.trim();

        if (url === "") {
            setErrorMessage("Please enter a url")
            return
        }

        validateURL(url);
    }

    async function validateURL(url) {
        try {
            const validURL = new URL(url);
            const urlObject = new URLSearchParams({
                url: validURL
            });

            getShortenedURL(urlObject)

        } catch (error) {
            setErrorMessage("The url you entered is not valid");
            console.log(error)
        }
    }

    async function getShortenedURL(urlObject) {
        try {
            const response = await axios.post(
                "/api/v1/shorten",
                urlObject.toString(),
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" }
                })

            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }


    function saveInputText(event) {
        setInputText(event.target.value)
    }

    function keyPressed(event) {
        setErrorMessage("");
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
        else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    return (
        <>
            <section className="url-field">
                <form>
                    <div className="enter-url">
                        <input
                            type="text"
                            id="url-input"
                            name="Shorten url"
                            placeholder="Shorten a link here..."
                            onKeyDown={keyPressed}
                            onChange={saveInputText}
                        />
                        <p
                            className='error-message'
                        >
                            {errorMessage}
                        </p>
                    </div>

                    <button
                        type="submit"
                        id="url-submit"
                        onClick={handleSubmit}
                    >
                        Shorten it!
                    </button>
                </form>
            </section>
        </>
    )
}