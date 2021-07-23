function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openInSameTab(url) {
    var win = window.open(url, '_self');
    win.focus();
}