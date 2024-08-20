document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
});
