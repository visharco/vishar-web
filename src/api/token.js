/*

Get TOken Component from localStorg

*/

 
function getToken(token){
    if(token !== null)
        return token
        
    return null 
}

// const Token = getToken(localStorage.getItem('@authorization_vishar'));
const Token = getToken(sessionStorage.getItem('@authorization_vishar'));



export default Token;


/* How can use it=====>

import Token from '../../../.....';


console.log(Token);




*/