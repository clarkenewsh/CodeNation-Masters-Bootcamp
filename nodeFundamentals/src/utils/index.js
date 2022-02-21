const movieArr = [];

class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    // add to movie arr function
    add() {
        movieArr.push(this);
        return movieArr;
    }
}

// export the file to app.js
module.exports = Movie;