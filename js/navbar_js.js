function loadNavbar(targetId = 'navbar-placeholder') {
    fetch('./components/navbar.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
            loadNavbar();

        })
        .catch(err => console.error('Error loading navbar:', err));
}

