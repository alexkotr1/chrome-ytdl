chrome.runtime.onMessage.addListener(msg => {
    msg = JSON.parse(msg)
    chrome.downloads.download({
        filename: `${msg.name.replace(/[/\\?%*:|"<>]/g, '-') || "song"}.mp3`,
        url: "https://ytdler-alex.herokuapp.com/" + youtube_parser(msg.url)
    });
});

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {
            cancel: true
        };
    }, {
        urls: ["https://www.youtube.com/youtubei/v1/offline/get_download_action?key=*"]
    },
    ["blocking"]
);