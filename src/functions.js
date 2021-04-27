class Functions {

    /* USERS */
    async getUser(username) {
        let result = await this.requestWithAuth("GET /users/{username}", {
            username: username
        });
        return result.data;
    }
    async getFollowers(username) {
        let result = await this.requestWithAuth("GET /users/{username}/followers", {
            username: username,
        });
        return result.data;
    }
    async isFollowedBy(follower, target) {
        try {
            await this.requestWithAuth("GET /users/{username}/following/{target_user}", {
                username: follower,
                target_user: target
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    async getFollowing(username) {
        let result = await this.requestWithAuth("GET /users/{username}/following", {
            username: username,
        });
        return result.data;
    }

    /* SEARCH */
    async searchRepositories(name, per_page, page, sort = 'best-match') {

        let result = await this.requestWithAuth('GET /search/repositories', {
            q: name,
            sort: sort,
            per_page: per_page,
            page: page
          })
        return result.data;
    }
}

module.exports = {
    Functions
}