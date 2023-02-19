function download() {
    const doc = document.querySelector("#title > h1 > yt-formatted-string");
    const button = document.querySelector("#flexible-item-buttons > ytd-download-button-renderer");
    if (!doc || !button) return setTimeout(test, 1000);
    document.querySelector("#flexible-item-buttons > ytd-download-button-renderer").onclick = function() {
        chrome.runtime.sendMessage(`{"url":"${window.location.href}","name":"${doc.textContent}"}`)
    }
}



window.addEventListener('load', function() {
    setTimeout(download, 1000)
});