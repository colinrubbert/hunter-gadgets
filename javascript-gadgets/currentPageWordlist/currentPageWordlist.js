// Create a wordlist from the current page that you are on.
// Credits: @renniepak - https://twitter.com/renniepak/status/1780916964925345916

window.__currentPageWordlist = window.__currentPageWordlist || {};

function getCurrentPageWordlist() {
    const e = document.documentElement.innerText.match(/[a-zA-Z_\-]+/g),
        n = [...new Set(e)].sort();
    // Store the sorted list in the global object
    window.__currentPageWordlist = n;
    // Log the completed list
    console.log(window.__currentPageWordlist); 
};

// Function to copy wordlist to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(window.__currentPageWordlist.join(', '))
        .then(() => console.log('Wordlist copied to clipboard!'))
        .catch(err => console.error('Failed to copy wordlist to clipboard:', err));
}

// Add a button to the page to trigger the copy function
const copyButton = document.createElement('button');
copyButton.textContent = 'Copy Wordlist to Clipboard';
copyButton.onclick = copyToClipboard;

// Set button style for height, width, and floating position
copyButton.style.height = '60px';
copyButton.style.width = '180px';
copyButton.style.padding = '.5rem .25rem';
copyButton.style.position = 'fixed'; // Use 'fixed' to make it float and stay in the same place on scroll
copyButton.style.top = '1rem'; // Top left corner
copyButton.style.left = '1rem';
copyButton.style.zIndex = '1000'; // Ensure it's above most other elements

document.body.appendChild(copyButton);

getCurrentPageWordlist();

