window.addEventListener('DOMContentLoaded', () => {
    const listPodcastsHTML = document.getElementById('list-podcasts');
    chrome.runtime.sendMessage({type: "get"}, function(response) {
        let episodes = response.data;
        listPodcastsHTML.innerHTML = '';
        Object.keys(episodes).forEach(e => {
            listPodcastsHTML.insertAdjacentHTML("beforeend", `<a href="${episodes[e]}">${e}</a>`)
        });
    });
});
