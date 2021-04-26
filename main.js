//Import 
const { request } = require("@octokit/request");

class GithubAPI {

    /* Constructor */
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
    }

    /********************************/
    /*           Functions          */
    /********************************/

    requestWithAuth = request.defaults({
        headers: {
            authorization: this.API_KEY,
        },
    });

    async getUser(username) {
        let result = await this.requestWithAuth("GET /users/{username}", {
            headers: {
                authorization: this.API_KEY,
            },
            username: username
        });
        return result.data;
    }

    async getFollowers(username) {
            let result = await request("GET /users/{username}/followers", {
                headers: {
                    authorization: this.API_KEY,
                },
                username: username,
            });
            return result.data;
    }

    async isFollowedBy(follower, target) {
        try {
            await request("GET /users/{username}/following/{target_user}", {
                headers: {
                    authorization: this.API_KEY,
                },
                username: follower,
                target_user: target
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}

/* Export Class */
module.exports = {
    GithubAPI
}