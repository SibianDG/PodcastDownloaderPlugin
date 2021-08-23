const episodesHTML = [...document.getElementsByClassName('oD3fme')];
let episodes = {}
episodesHTML.forEach(e => {
    const title = [...e.getElementsByClassName('e3ZUqe')][0].innerHTML;
    const patt = new RegExp("https[^?]+\\.mp3");
    const link = patt.exec([...e.getElementsByClassName('zlb4lf')][0].children[0].getAttribute('jsdata'));
    episodes[title] = link;
});

chrome.runtime.sendMessage({type: 'set', data: episodes});
console.log("SENT TO BACKEND FROM CONTENT")
