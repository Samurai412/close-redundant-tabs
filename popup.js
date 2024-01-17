// Listen for a click on the "Remove all redundant tabs" button
document.getElementById('removeTabs').addEventListener('click', function() {
    // Query all the open tabs
    chrome.tabs.query({}, function(tabs) {
        var tabCount = {};

        // Iterate through all the tabs
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];

            // Increment the count of the tab URL
            if (tabCount[tab.url]) {
                tabCount[tab.url]++;
            } else {
                tabCount[tab.url] = 1;
            }

            // If the tab URL is seen twice or more, close it
            if (tabCount[tab.url] >= 2) {
                chrome.tabs.remove(tab.id);
            }
        }
    });
});