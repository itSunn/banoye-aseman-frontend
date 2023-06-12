var body = document.querySelector('body');

if (document.querySelector('.btn-mobile-menu') != null) {
    var btnMobileMenu = document.querySelector('.btn-mobile-menu');
    var sidebarMenu = document.getElementById('sidebar-menu');
    var menuOverlay = document.querySelector('.overlay-back');
    var btnCloseSidebar = document.querySelector('.btn-close-menu');
    btnMobileMenu.onclick = () => {
        menuOverlay.classList.add('active');
        sidebarMenu.classList.add('active');
    }
    menuOverlay.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
    btnCloseSidebar.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
}
// Show Desktop Search
if (document.getElementById('btn-desktop-search') !== null) {
    var desktopSearch = document.getElementById('desktop-search-content');
    var btnDesktopSearch = document.getElementById('btn-desktop-search');
    var searchContent = document.querySelector('.search-content');
    var searchInput = document.getElementById('search-input');
    var searchResult = document.getElementById('search-result');
    var btnClearClose = document.querySelector('.btn-search-close');

    btnDesktopSearch.onclick = () => {
        searchContent.style.display = "block";
        searchInput.focus();
    }

    searchInput.addEventListener('input', input => {
        if (input.target.value.length > 0) {
            searchResult.classList.add('active')
        } else {
            searchResult.classList.remove('active')
        }
    });

    btnClearClose.onclick = () => {
        searchInput.value = '';
        searchResult.classList.remove('active')
        searchContent.style.display = "none";
    }

    document.addEventListener('click', function (event) {
        var isClickInside = desktopSearch.contains(event.target);
        if (isClickInside) { null }
        else {
            searchContent.style.display = "none";
        }
    });
}

// Show Filter on Mobile
if (document.getElementById('products-section') !== null) {
    var productsSection = document.getElementById('products-section');
    var productsSide = productsSection.querySelector('.products-side');
    var btnAdvancedSearch = document.querySelector('.btn-advanced-search');
    var filtersideOverlay = document.querySelector('.filterside-overlay');
    var closeAdvanced = document.querySelector('.btn-close-filter')
    btnAdvancedSearch.addEventListener('click', function () {
        productsSide.classList.add('active');
        filtersideOverlay.classList.add('active')
        body.classList.add('fixedposition');
    });
    closeAdvanced.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
    filtersideOverlay.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
}


if (document.querySelector('.user-profile-section') != null) {
    var userMenu = document.querySelector('.grid-user-menu');
    var overlayUserMenu = document.querySelector('.overlay-userMenu');
    var btnUserMenu = document.querySelector('.btn-usermenu');
    var btnCloseprofileMenu = document.querySelector('.btn-closeprofileMenu');

    btnUserMenu.onclick = () => {
        userMenu.classList.add('active');
        overlayUserMenu.classList.add('active');
        body.classList.add('fixedposition');
    }
    overlayUserMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
        body.classList.remove('fixedposition');
    }
    btnCloseprofileMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
        body.classList.remove('fixedposition');
    }
}


function changeValue(increment) {
    var input = document.getElementById('inputField');
    var value = parseInt(input.value);

    // بررسی مقدار و اعمال تغییر
    if (increment && value < 9999999) {
        value = value + 10000;
    } else if (!increment && value > 0) {
        value = value - 10000;
    }

    // تنظیم مقدار ورودی به مقدار جدید
    input.value = value;
}

function changeDirectValue(number) {
    var input = document.getElementById('inputField');
    input.value = separate(number);
}


var signCurrentSection = 0;
if (document.getElementById('modal-sign') != null) {
    changeSignModalScreen(signCurrentSection);
}
function changeSignModalScreen(n) {
    var sectionSign = document.querySelectorAll('.section-sign')
    for (var i = 0; i < sectionSign.length; i++) {
        sectionSign[i].style.display = 'none'
    }
    sectionSign[n].style.display = 'block'
}


function separate(Number) {
    Number += '';
    Number = Number.replace(',', '');
    x = Number.split('.');
    y = x[0];
    z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}