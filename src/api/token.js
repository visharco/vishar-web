/*
Get TOken Component from localStorg
*/

function getToken(token) {
     if (token !== null)
        return token
    return null
}

const Token = getToken(decodeURIComponent(document.cookie).split('auth=')[1]);

export default Token;

