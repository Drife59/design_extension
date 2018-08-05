//popup out of Chrome extension window

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementsById("demo");
    var location = link.href;

    link.onclick = function () {
        chrome.tabs.create({active: true, url: location});
    }
});


