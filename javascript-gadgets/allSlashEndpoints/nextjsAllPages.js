// Create a list of all Next.JS '/' endpoints from your current DOM and from all external script sources embedded on the page
// Credit: @renniepak - https://x.com/i/bookmarks?post_id=1830963129897124294

function getAllNextJsPages() {
  let pages = __BUILD_MANIFEST__.sortedPages.join('\n');
  console.log(pages);
}
