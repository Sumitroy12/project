import React from 'react'
import './contact.css'
function contact() {
    return (
        <div class="fcf-body">
        <div class="fcf-form-wrap">
            <div id="fcf-form">
                <h1>Contact us</h1>
                <form class="fcf-form-class">

                    <div class="fcf-field">
                        <label for="Name" class="fcf-label has-text-weight-normal">Your name</label>
                        <div class="fcf-control">
                            <input type="text" name="Name" id="Name" class="fcf-input is-full-width" maxlength="60"
                                data-validate-field="Name" />
                        </div>
                    </div>
                    <div class="fcf-field">
                        <label for="Email" class="fcf-label has-text-weight-normal">Your email address</label>
                        <div class="fcf-control">
                            <input type="email" name="Email" id="Email" class="fcf-input is-full-width" maxlength="100"
                                data-validate-field="Email" />
                        </div>
                    </div>
                    <div class="fcf-field">
                        <label for="Phone" class="fcf-label has-text-weight-normal">Your phone number (optional)</label>
                        <div class="fcf-control">
                            <input type="text" name="Phone" id="Phone" class="fcf-input is-full-width" maxlength="30"
                                data-validate-field="Phone" />
                        </div>
                    </div>
                    <div class="fcf-field">
                        <label for="Message" class="fcf-label has-text-weight-normal">Your message</label>
                        <div class="fcf-control">
                            <textarea name="Message" id="Message" class="fcf-textarea" maxlength="3000" rows="5"
                                data-validate-field="Message"></textarea>
                        </div>
                    </div>
                    <div id="fcf-status" class="fcf-status"></div>
                    <div class="fcf-field">
                        <div class="fcf-buttons">
                            <button id="fcf-button" type="submit" class="fcf-button is-link is-medium is-fullwidth">Send
                                Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default contact
