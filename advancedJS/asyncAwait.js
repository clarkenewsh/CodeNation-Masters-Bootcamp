// Callbacks, promises, async, await

// 1 - Callbacks

const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
];
function getPosts() {
    console.log(myPosts);
}
function createPost(post) {
    myPosts.push(post);
}
getPosts(); //Output: two posts
createPost({title: 'post 3', body: 'this is the post 3 body'});
getPosts(); //Output: three posts


// Set timeout with callback
const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
];
function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}
function createPost(post) {
    setTimeout( () => {
        myPosts.push(post);
    }, 5000);
}
createPost({title: 'post 3', body: 'this is the post 3 body'}); //this runs after 5 secs
getPosts(); //this runs after 1 sec



const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
];
function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}
function createPost(post) {
    setTimeout( () => {
        myPosts.push(post);
    }, 5000);
}
createPost({title: 'post 3', body: 'this is the post 3 body'}); //this runs after 5 secs
getPosts(); //this runs after 1 sec



const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post two', body: 'This is post two body'}
];
function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
        })
        console.log(myPosts);
    }, 1000);
}
function createPost(post, callback) {
    setTimeout( () => {
        myPosts.push(post);
        callback();
    }, 5000);
}
createPost({title: 'post 3', body: 'this is the post 3 body'}, getPosts);

