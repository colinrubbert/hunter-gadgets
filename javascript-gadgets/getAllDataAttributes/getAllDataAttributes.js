// Get all of the data attributes on the page and print them to the console

window.__globalAttributeDatasets = window.__globalAttributeDatasets || {};

function saveDatasetsToGlobalObject() {
    document.querySelectorAll('*').forEach((element) => {
        if (Object.keys(element.dataset).length > 0) {
            window.__globalAttributeDatasets[element.tagName] = element.dataset;
        }
    });
}

saveDatasetsToGlobalObject();
console.log(window.__globalAttributeDatasets);
