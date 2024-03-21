/**  
 * Function to find if there is a security.txt file associated with the site
 * Credits: xnl-h4ck3r - https://twitter.com/xnl_h4ck3r/status/1770846759746523325
*/
window.securityTxt = (
    fetch(`${location.origin}/.well-known/security.txt`, {
        mode: 'no-cors',
        redirect: 'follow'
    }).then(response => {
        if (response.ok && response.status === 200 && response.headers.get('content-type').startsWith('text/')) {
            return response.text().then(text => {
                const titleMatch = text.match(/<title>(.*?)<\/title>/i);
                const responseTitle = titleMatch?titleMatch[1]:'';
                const scriptMatch = text.match(/<script/i);
                if (!responseTitle.toLowerCase().includes("not found") && !responseTitle.includes( "404") && !scriptMatch) {
                    const cleanedText = 'SECURITY.TXT CONTENT:\n'+text.replace(/<[^>]*>/g,'').trim();
                    console.log(`%c${cleanedText}`,'color:green');
                    return cleanedText
                } else {
                    console.log(`It looks like ${location.origin}/.well-known/security.txt probably doesn't exist`);
                    return `It looks like ${location.origin}/.well-known/security.txt probably doesn't exist`
                }
            });
        } else {
            console.log(`It looks like ${location.origin}/.well-known/security.txt probably doesn't exist`);
        }
    }).catch(error => {
            console.log(`An error occurred trying to retrieve ${location.origin}/.well-known/security.txt: ${error.message}`);
    }
    )
)