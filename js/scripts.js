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