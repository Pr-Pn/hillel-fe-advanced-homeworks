class Swapi {
    constructor(params) {
        this.responseContainer = document.querySelector(params._responseContainerSelector);
        this.requestForm = document.querySelector(params._requestFormSelector);
        this.requestForm.addEventListener('submit', this.formSubmit);
    }

    formSubmit = async (e) => {
        e.preventDefault();
        const { getData } = await import("./utils.js");
        this.renderLoader();
        const hostUrl = e.target.attributes["action"].value;
        const relativePath = e.target.querySelector(".js--path-input").value.trim();
        const pathElements = relativePath.split("/");
        const res = await getData(hostUrl + relativePath);
        this.renderResponse(res, pathElements);

    }

    renderLoader() {
        document.querySelector('.response-container').classList.remove('d-none');
        this.responseContainer.innerHTML = "Is Loading...";
    }

    renderResponse = (res, pathElements) => {
        if (res.status === 'success') {
            this.responseContainer.innerHTML = this.createResponseFromTemplate(res.data, pathElements);
        } else {
            this.responseContainer.innerHTML = `<pre>${res.data}</pre>`;
        }
    }

    createResponseFromTemplate(data, pathElements) {
        const pathElementsSection = pathElements
            .filter(el => el !== '')
            .map(el => `<span class="elem-id">${el}</span>`)
            .join("");
        document.querySelector('.response-container').classList.remove('d-none');
        return `        
        ${pathElementsSection}
        <pre id="output-section">${JSON.stringify(data, undefined, 2)}</pre>
    `
    }
}

document.addEventListener('DOMContentLoaded', () => {
        const swapi = new Swapi({
            _responseContainerSelector: ".response-container",
            _requestFormSelector: ".js--form"
        });
});