var accpt = function () {
    sessionStorage.setItem('cookie-consent', 'true');
    hideCookieElements();
};

var rjct = function () {
    sessionStorage.setItem('cookie-rejection', 'true');
    hideCookieElements();
};

if (sessionStorage.getItem('cookie-rejection') === 'true') {
    hideCookieElements();
}

if (sessionStorage.getItem('cookie-consent') === 'true') {
    document.cookie = "cookie-consent=true";
    hideCookieElements();
}

function hideCookieElements() {
    document.getElementById('cookie-consent-container').hidden = true;
    document.getElementById('cookie-window').hidden = true;
}

document.getElementById('cookie-consent').onclick = accpt;
document.getElementById('cookie-rejection').onclick = rjct;