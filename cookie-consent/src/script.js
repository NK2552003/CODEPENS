(function() {
    'use strict';

    var COOKIE_NAME = 'cookie_consent_status';
    var COOKIE_EXPIRE_DAYS = 365;

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function createConsentBanner() {
        var banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="consent-content">
                <h2>🍪 Cookie Settings</h2>
                <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. Please select your preferences below.</p>
                <div class="cookie-options">
                    <label>
                        <input type="checkbox" id="necessary" checked disabled>
                        Necessary (Always enabled)
                    </label>
                    <label>
                        <input type="checkbox" id="functional">
                        Functional
                    </label>
                    <label>
                        <input type="checkbox" id="analytics">
                        Analytics
                    </label>
                    <label>
                        <input type="checkbox" id="advertising">
                        Advertising
                    </label>
                    <label>
                        <input type="checkbox" id="thirdParty">
                        Third-party
                    </label>
                </div>
                <div class="consent-actions">
                    <button id="save-preferences">Save Preferences</button>
                    <button id="accept-all">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('save-preferences').addEventListener('click', savePreferences);
        document.getElementById('accept-all').addEventListener('click', acceptAllCookies);
    }

    function savePreferences() {
        var preferences = {
            necessary: true,
            functional: document.getElementById('functional').checked,
            analytics: document.getElementById('analytics').checked,
            advertising: document.getElementById('advertising').checked,
            thirdParty: document.getElementById('thirdParty').checked
        };
        setCookie(COOKIE_NAME, JSON.stringify(preferences), COOKIE_EXPIRE_DAYS);
        hideBanner();
    }

    function acceptAllCookies() {
        var allAccepted = {
            necessary: true,
            functional: true,
            analytics: true,
            advertising: true,
            thirdParty: true
        };
        setCookie(COOKIE_NAME, JSON.stringify(allAccepted), COOKIE_EXPIRE_DAYS);
        hideBanner();
    }

    function hideBanner() {
        var banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    function applyStyles() {
        var style = document.createElement('style');
        style.textContent = `
/* Refined Cookie Consent Banner */
#cookie-consent-banner {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: linear-gradient(145deg, #212121, #1a1a1a);
    color: #e0e0e0;
    padding: 24px;
    z-index: 1000;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    font-family: "Roboto", Arial, sans-serif;
    animation: slide-up 0.5s ease-out;
}

@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.consent-content {
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
}

#cookie-consent-banner h2 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1.75em;
    color: #ffffff;
    font-weight: bold;
}

#cookie-consent-banner p {
    margin-bottom: 20px;
    line-height: 1.7;
    font-size: 1rem;
    color: #bdbdbd;
}

.cookie-options {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 24px;
}

.cookie-options label {
    display: flex;
    align-items: center;
    background-color: #292929;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    color: #ffffff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cookie-options label:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.cookie-options input[type="checkbox"] {
    margin-right: 12px;
}

.consent-actions {
    display: flex;
    justify-content: center;
    gap: 12px;
}

#cookie-consent-banner button {
    background: linear-gradient(145deg, #333333, #444444);
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
}

#cookie-consent-banner button:hover {
    background: linear-gradient(145deg, #444444, #555555);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

#accept-all {
    background: linear-gradient(145deg, #4caf50, #45a049) !important;
    color: #ffffff;
}

#accept-all:hover {
    background: linear-gradient(145deg, #45a049, #3e8e41) !important;
}

@media (max-width: 600px) {
    #cookie-consent-banner {
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0;
        padding: 16px;
    }

    .consent-actions {
        flex-direction: column;
    }

    .consent-actions button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
    }
}
        `;
        document.head.appendChild(style);
    }

    function init() {
        var consentStatus = getCookie(COOKIE_NAME);
        if (!consentStatus) {
            createConsentBanner();
            applyStyles();
        }
    }

    // Use DOM content loaded event to ensure the DOM is fully loaded before running the script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

