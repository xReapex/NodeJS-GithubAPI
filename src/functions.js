class Functions
{
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
}

module.exports = {
    Functions
}