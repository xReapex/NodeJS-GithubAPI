/* Import module */
const { request } = require("@octokit/request");

/* Import Functions */
const { Functions } = require("./src/functions")

class GithubAPI extends Functions {

    /* Constructor */
    super(API_KEY) {
        this.API_KEY = API_KEY;
    }

    /* Global Authentication */
    requestWithAuth = request.defaults({
        headers: {
            authorization: this.API_KEY,
        },
    });
}

/* Export Class */
module.exports = {
    GithubAPI
}