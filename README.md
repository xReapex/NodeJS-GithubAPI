# NodeJS Package - @reapex/github-api

# Installation :

- Via NPM : ``npm install @reapex/github-api``

# Import Package :
```js
const { GithubAPI } = require("@reapex/github-api");
const client = new GithubAPI("GITHUB_API_TOKEN");
```

# Basic Usage :

```js

/* All methods needs to be in Async Function */
async function main()
{
    /* Retrieve Github User with Username */
    await client.getUser('xReapex');
    /* Will return User Object */
    
    /* Retrieve Github Users Followers */
    await client.getFollowers('xReapex');
    /* Will return User(s) Object */

    /* Check if User follow another */
    await client.isFollowedBy('xReapex', 'xReapexTheFalse');
    /* Will return Boolean: true/false */
    
    /* Retrieve Users followed by User */
    await client.getFollowing('xReapex');
    /* Will return User(s) Object */
}

main()
```

# Search Functions :

- Find repositories with ``name``, ``resultats_per_page``, ``pages`` and ``sort`` ! 

```js
/* Search Repositories */
    await client.searchRepositories("@reapex/github-api", "10", "1", /* Optionnal (stars, forks, help-wanted-issues) Default (best-match) */ "asc");
/* Will return Repository(ies) Object */
```
