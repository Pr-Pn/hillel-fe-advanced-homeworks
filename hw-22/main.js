class HttpClient {
    constructor(hostUrl) {
        this.hostUrl = hostUrl;
    }
    get(path) {
        return fetch(`${this.hostUrl}/${path}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Error during obtaining: ${res.status}`);
                }
            })
            .catch(err => console.error(err.message));
    }
}

const httpClient = new HttpClient('https://jsonplaceholder.typicode.com');

document.querySelector('.js--btn-search').addEventListener('click', event => {
    event.preventDefault();
    const postId = document.querySelector('.js--post-number').value;
    httpClient.get(`posts/${postId}`)
    .then(data => {
        renderPostInfo(data);
    })
})

const postInfoBody = document.querySelector('.js--info-body');

function renderPostInfo(data) {
    postInfoBody.innerHTML = "";
    postInfoBody.insertAdjacentHTML('beforeend', createPostInfoTemplate(data));

    const showCommentsBtn = document.createElement('button');
    showCommentsBtn.innerText = 'Show comments';
    showCommentsBtn.addEventListener('click', () => {
        httpClient.get(`posts/${data.id}/comments`)
            .then(data => {
                renderPostComments(data);
            })
    })
    postInfoBody.append(showCommentsBtn);
}


function createPostInfoTemplate(data) {
    return `
    <h1 class="js--title info__title">${data.title}</h1>
    <p class="js--post info__post">${data.body}</p>    
    `
}
function renderPostComments(data) {
    data.forEach(comment => {
        postInfoBody.insertAdjacentHTML('beforeend', createCommentFromTemplate(comment));
    })
}
function createCommentFromTemplate(comment) {
    return `
    <h3>${comment.name} - ${comment.email}</h3>
    <h5>${comment.body}</h5>
    `
}

