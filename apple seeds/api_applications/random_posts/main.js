const postSection = document.querySelector('#posts'),
    postTemplate = document.querySelector('#post-template');

getData()
    .catch(err => console.error(err));

async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    let i = 0;

    // console.log(posts);

    posts.forEach(post => {
        i++;
        if (i < 10) {
            const title = post.title;
            const body = post.body;

            fetch('https://unsplash.it/300/200')
                .then(res => res.blob())
                .then(blob => {
                    console.log(typeof blob);
                    const newPost = document.importNode(postTemplate.content, true),
                        postTitle = newPost.querySelector('.post__title'),
                        postBody = newPost.querySelector('.post__body'),
                        postImg = newPost.querySelector('.post__img');

                    postImg.src = URL.createObjectURL(blob);
                    postTitle.innerText = title;
                    postBody.innerText = body;
                    postSection.appendChild(newPost);
                })
                .catch(error => console.error(error));
        }
    })
}