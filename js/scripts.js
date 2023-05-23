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
