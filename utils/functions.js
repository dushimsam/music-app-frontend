export function openInNewTabWinBrowser(url) {
    var win = window.open(url, '_blank');
    win.focus();
}