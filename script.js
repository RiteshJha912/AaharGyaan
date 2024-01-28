function changePage(pageName) {
    var content = document.getElementById('content');
    
    // Clear previous content
    content.innerHTML = '';


    switch (pageName) {

        case 'page1':
            fetchContent('scan.html');
            break;

        case 'guide':
            fetchContent('overview.html');
            break;

        case 'page2':
            fetchContent('cb.html');
            break;

        default:
            break;
    }

    history.pushState({}, pageName, `#${pageName}`);
}

function fetchContent(pageURL) {
    fetch(pageURL)
        .then(response => response.text())
        .then(data => {
            var content = document.getElementById('content');
            content.innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}

