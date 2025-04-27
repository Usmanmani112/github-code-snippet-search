function searchCode() {
    const query = document.getElementById('searchQuery').value;
    const resultsDiv = document.getElementById('results');
    const loadingDiv = document.getElementById('loading');

    // Clear previous results and show loading text
    resultsDiv.innerHTML = '';
    loadingDiv.style.display = 'block';

    // Check if query is empty
    if (!query.trim()) {
        loadingDiv.style.display = 'none';
        resultsDiv.innerHTML = 'Please enter a search query.';
        return;
    }

    // Fetch data from the Spring Boot backend
    fetch(`http://localhost:8080/api/github/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            loadingDiv.style.display = 'none';
            if (data.length === 0) {
                resultsDiv.innerHTML = 'No results found.';
            } else {
                data.forEach(repo => {
                    const repoDiv = document.createElement('div');
                    repoDiv.innerHTML = `<a href="${repo.html_url}" target="_blank"><h3>${repo.name}</h3></a><p>${repo.description || 'No description available'}</p>`;
                    resultsDiv.appendChild(repoDiv);
                });
            }
        })
        .catch(err => {
            loadingDiv.style.display = 'none';
            resultsDiv.innerHTML = 'Error fetching data! Please try again later.';
            console.error('Error fetching GitHub data:', err);
        });
}
