/******************** COOKIES ********************/
var pc54321x = 'BOOKNOW4HOTEL';

function setCookie_PCH3CK(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie_PCH3CK(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function cookie_check_PCH3CK() {
    var subscribe_PCH3CK = getCookie_PCH3CK('subscribe_PCH3CK');
    var popup_closed_PCH3CK = getCookie_PCH3CK('popup_closed_PCH3CK');
    if (subscribe_PCH3CK != '') {
        next_PCH3CK();
    } else {
        if (popup_closed_PCH3CK != '') {} else {
            document.documentElement.addEventListener('mouseleave', function(e) {
                if (e.clientY > 10) {
                    return;
                }
                ga('PriceCheck.send', 'event', { eventCategory: 'pricecheck', eventAction: 'open', eventLabel: 'Open Popup PC' });
                abandonment_add_PCH3CK();
            });
            console.log('Price Check - Abandonment (Success)');
        }
    }
}

/******************** HIDE AND SHOW ********************/
/*if (/Android/i.test(navigator.userAgent)) {	document.querySelector('.PriceCH3CK.sidebar_PCH3CK').classList.add('no_PCH3CK');}*/
try {
    if (144 < 125 || 144 <= 0) {
        document.querySelectorAll('.PriceCH3CK').forEach(function(el) {
            el.classList.add('hide_ota_PCH3CK');
        });
    }
} catch (e) {}
document.querySelector('.PriceCH3CK.sidebar_PCH3CK .email_PCH3CK input').addEventListener('click', function() {
    if (document.querySelector('.PriceCH3CK.sidebar_PCH3CK .email_PCH3CK input') === document.activeElement) {
        if (/Android/i.test(navigator.userAgent)) {
            document.querySelector('.PriceCH3CK.sidebar_PCH3CK').classList.add('bottom_PCH3CK');
        }
    }
});
document.querySelector('.PriceCH3CK.sidebar_PCH3CK .email_PCH3CK input').addEventListener('blur', function() {
    document.querySelector('.PriceCH3CK.sidebar_PCH3CK').classList.remove('bottom_PCH3CK');
});

function sidebar_toggle_PCH3CK() {
    var html_PCH3CK = document.querySelector('html');
    var body_PCH3CK = document.querySelector('body');
    var container_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK');
    if (container_PCH3CK.classList.contains('active_PCH3CK')) {
        var subscribe_PCH3CK = getCookie_PCH3CK('subscribe_PCH3CK');
        if (subscribe_PCH3CK != '') {
            html_PCH3CK.classList.remove('active_PCH3CK');
            body_PCH3CK.classList.remove('active_PCH3CK');
            container_PCH3CK.classList.remove('active_PCH3CK');
        } else {
            html_PCH3CK.classList.remove('active_PCH3CK');
            body_PCH3CK.classList.remove('active_PCH3CK');
            container_PCH3CK.classList.remove('active_PCH3CK');
            ga('PriceCheck.send', 'event', {
                eventCategory: 'pricecheck',
                eventAction: 'close',
                eventLabel: 'Close Sidebar PC'
            });
        }
    } else {
        html_PCH3CK.classList.add('active_PCH3CK');
        body_PCH3CK.classList.add('active_PCH3CK');
        container_PCH3CK.classList.add('active_PCH3CK');
        ga('PriceCheck.send', 'event', { eventCategory: 'pricecheck', eventAction: 'open', eventLabel: 'Open Sidebar PC' });
    }
}

function sidebar_add_PCH3CK() {
    var container_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK');
    container_PCH3CK.classList.add('active_PCH3CK');
}

function sidebar_remove_PCH3CK() {
    var container_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK');
    container_PCH3CK.classList.remove('active_PCH3CK');
}

function abandonment_add_PCH3CK() {
    var container_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK');
    if (!container_PCH3CK) return;
    container_PCH3CK.classList.add('active_PCH3CK');
}

function abandonment_remove_PCH3CK() {
    var container_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK');
    var subscribe_PCH3CK = getCookie_PCH3CK('subscribe_PCH3CK');
    if (subscribe_PCH3CK != '') {
        container_PCH3CK.classList.remove('active_PCH3CK');
        container_PCH3CK.remove();
    } else {
        container_PCH3CK.classList.remove('active_PCH3CK');
        container_PCH3CK.remove();
        ga('PriceCheck.send', 'event', { eventCategory: 'pricecheck', eventAction: 'close', eventLabel: 'Close Popup PC' });
        setCookie_PCH3CK('popup_closed_PCH3CK', 'cookieValue', 12);
    }
}

function toggle_price_terms() {
    var priceTermsConfig = 'I agree to your <a href="http://alexperryhotelandapartments.com.au/privacy" class="terms_acceptance_link_PCH3CK" target="_blank">privacy policy</a>, and my personal data being stored to receive promotional offers.';
    if (typeof priceTermsConfig === undefined || priceTermsConfirm.length <= 0) {
        var termsAccept = document.querySelector('.terms_acceptance_label_PCH3CK'),
            abandonTermsAccept = document.querySelector('.abandonment_terms_acceptance_label_PCH3CK');
        termsAccept.style = 'display: none;';
        abandonTermsAccept.style = 'display: none;';
    }
}

/******************** PROMO REVEAL ********************/
function next_PCH3CK() {
    var email_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK .email_PCH3CK'),
        promo_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK .promo_PCH3CK'),
        value_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK .promo_value_PCH3CK'),
        abandonment_email_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK .email_PCH3CK'),
        abandonment_promo_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK .promo_PCH3CK'),
        abandonment_value_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK .promo_value_PCH3CK'),
        abandonment_PCH3CK = document.querySelector('.PriceCH3CK.abandonment_PCH3CK');
    email_PCH3CK.classList.remove('active_PCH3CK');
    promo_PCH3CK.classList.add('active_PCH3CK');
    value_PCH3CK.value = pc54321x;
    abandonment_email_PCH3CK.classList.remove('active_PCH3CK');
    abandonment_promo_PCH3CK.classList.add('active_PCH3CK');
    abandonment_value_PCH3CK.value = pc54321x;
    abandonment_PCH3CK.classList.add('switch_PCH3CK');
    console.log('Price Check (Promo Activated)');
}

/******************** SUBSCRIBE ********************/
function subscribe_PCH3CK() {
    var email_PCH3CK = document.querySelector('.subscribe_email_PCH3CK').value,
        atpos_PCH3CK = email_PCH3CK.indexOf('@'),
        dotpos_PCH3CK = email_PCH3CK.lastIndexOf('.'),
        terms_acceptance_PCH3CK = document.querySelector('.terms_acceptance_PCH3CK');
    if (atpos_PCH3CK < 1 || dotpos_PCH3CK < atpos_PCH3CK + 2 || dotpos_PCH3CK + 2 >= email_PCH3CK.length) {
        alert('Please enter a valid email address');
    } else if (!terms_acceptance_PCH3CK.checked) {
        alert('Please accept the privacy policy and terms to recieve the exclusive offer');
    } else {
        ga('PriceCheck.send', 'event', {
            eventCategory: 'pricecheck',
            eventAction: 'subscribe',
            eventLabel: 'Subscribe Sidebar PC'
        });
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://pricecheck.pebbledesign.com/s?hotel=alex-perry&email=' + email_PCH3CK + '&promo=BOOKNOW4HOTEL';
        document.body.appendChild(s);
        setCookie_PCH3CK('subscribe_PCH3CK', 'cookieValue', 12);
        next_PCH3CK();
    }
};

function abandonment_subscribe_PCH3CK() {
    var email_PCH3CK = document.querySelector('.abandonment_subscribe_email_PCH3CK').value,
        atpos_PCH3CK = email_PCH3CK.indexOf('@'),
        dotpos_PCH3CK = email_PCH3CK.lastIndexOf('.'),
        terms_acceptance_PCH3CK = document.querySelector('.abandonment_terms_acceptance_PCH3CK');
    if (atpos_PCH3CK < 1 || dotpos_PCH3CK < atpos_PCH3CK + 2 || dotpos_PCH3CK + 2 >= email_PCH3CK.length) {
        alert('Please enter a valid email address');
    } else if (!terms_acceptance_PCH3CK.checked) {
        alert('Please accept the privacy policy and terms to recieve the exclusive offer');
    } else {
        ga('PriceCheck.send', 'event', {
            eventCategory: 'pricecheck',
            eventAction: 'subscribe',
            eventLabel: 'Subscribe Popup PC'
        });
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://pricecheck.pebbledesign.com/s?hotel=alex-perry&email=' + email_PCH3CK + '&promo=BOOKNOW4HOTEL';
        document.body.appendChild(s);
        setCookie_PCH3CK('subscribe_PCH3CK', 'cookieValue', 12);
        next_PCH3CK();
    }
};

/******************** BOOK ONLINE ********************/
function book_PCH3CK() {
    var bookingURL_PCH3CK = 'https://app-apac.thebookingbutton.com/alex-perry-hotel-and-apartments/properties/alexperrydirect?promotion_code=BOOKNOW4HOTEL';
    ga('PriceCheck.send', 'event', {
        eventCategory: 'pricecheck',
        eventAction: 'bookdirect',
        eventLabel: 'Book Online Sidebar PC'
    });
    window.open(bookingURL_PCH3CK);
}

function abandonment_book_PCH3CK() {
    var bookingURL_PCH3CK = 'https://app-apac.thebookingbutton.com/alex-perry-hotel-and-apartments/properties/alexperrydirect?promotion_code=BOOKNOW4HOTEL';
    ga('PriceCheck.send', 'event', {
        eventCategory: 'pricecheck',
        eventAction: 'bookdirect',
        eventLabel: 'Book Online Popup PC'
    });
    window.open(bookingURL_PCH3CK);
}

/******************** SCROLL ********************/
window.addEventListener('scroll', function() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (('screen' in window && window.screen.width < 1300) || (connection && connection.type === 'cellular') || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) {} else {
        sidebar_remove_PCH3CK();
    }
});
/******************** RESIZE ********************/
var windowWidth_PCH3CK = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
window.addEventListener('resize', function() {
    if (window.innerWidth != windowWidth_PCH3CK) {
        windowWidth_PCH3CK = window.innerWidth;
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (('screen' in window && window.screen.width < 1300) || (connection && connection.type === 'cellular') || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) {} else {
            sidebar_remove_PCH3CK();
        }
    }
});
/******************** ONLOAD ********************/
window.onload = function() {
    console.log('Price Check (Success)');
    google_analytics_PCH3CK();
    cookie_check_PCH3CK();
    var html_PCH3CK = document.querySelector('html');
    var body_PCH3CK = document.querySelector('body');
    var container_PCH3CK = document.querySelector('.PriceCH3CK.sidebar_PCH3CK');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        html_PCH3CK.classList.add('ios_PCH3CK');
        body_PCH3CK.classList.add('ios_PCH3CK');
    }
};