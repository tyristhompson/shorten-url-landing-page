import './URLField.css'

export function URLField() {
    return (
        <>
            <section class="url-field">
                <form>
                    <div class="enter-url">
                        <input type="text" id="url-input" name="Shorten url" placeholder="Shorten a link here..." />
                    </div>

                    <input type="submit" id="url-submit" value="Shorten it!" />
                </form>
            </section>
        </>
    )
}