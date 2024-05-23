// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ヘッダとフッタを動的に読み込む関数
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// ページが読み込まれた後にヘッダとフッタを読み込む
document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header.html", "header-placeholder");
    loadComponent("footer.html", "footer-placeholder");
});