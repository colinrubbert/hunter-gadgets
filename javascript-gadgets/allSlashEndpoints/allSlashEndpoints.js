// Create a list of all of the '/' endpoints from your current DOM and from all external script sources embedded on the page
// Credit: @renniepak - https://twitter.com/renniepak/status/1602620834463588352

function getAllSlashEndpoints() {
    // Regular expression to match endpoints in script tags and page content
    const regex = /(?<=(\"|\'|\`))\/[a-zA-Z0-9_?&=\/\-\#\.]*(?=(\"|\'|\`))/g;
    window.__allSlashEndpoints = new Set();

    // Get all script tags on the page
    const scripts = document.getElementsByTagName("script");

    // Loop through each script tag
    for (let i = 0; i < scripts.length; i++) {
        const scriptSrc = scripts[i].src;
        if (scriptSrc !== "") {
            // Fetch the script content
            fetch(scriptSrc)
                .then(response => response.text())
                .then(text => {
                    // Match the regex against the script content
                    const matches = text.matchAll(regex);
                    for (let match of matches) {
                        window.__allSlashEndpoints.add(match[0]);
                    }
                })
                .catch(error => {
                    console.log("An error occurred: ", error);
                });
        }
    }

    // Get the page's HTML content and match the regex
    const pageContent = document.documentElement.outerHTML;
    const matches = pageContent.matchAll(regex);
    for (const match of matches) {
        window.__allSlashEndpoints.add(match[0]);
    }

    // Function to print the results to the console
    setTimeout(() => {
        console.log(Array.from(window.__allSlashEndpoints));
    }, 3000);
}

function copyToClipboard() {
    const text = Array.from(window.__allSlashEndpoints).join(', ');
    navigator.clipboard.writeText(text)
        .then(() => console.log('Endpoints copied to clipboard!'))
        .catch(err => console.error('Failed to copy endpoints:', err));
}

function createCopyButton() {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Endpoints to Clipboard';
    copyButton.onclick = copyToClipboard;

    copyButton.style.height = '60px';
    copyButton.style.width = '180px';
    copyButton.style.padding = '.5rem .25rem';
    copyButton.style.position = 'fixed'; // Use 'fixed' to make it float and stay in the same place on scroll
    copyButton.style.top = '1rem'; // Top left corner
    copyButton.style.left = '1rem';
    copyButton.style.zIndex = '1000'; // Ensure it's above most other elements

    document.body.appendChild(copyButton);
}

getAllSlashEndpoints();
createCopyButton();