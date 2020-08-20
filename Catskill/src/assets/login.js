// (function() {
//     function login() {
//         console.log("IIFE function")
//     }
// })();

// (function() {

//         console.log("IIFE function")
    
// })();

// var logInMessage = {
//     logIn() {
//         console.log ('login message from IIFE');
//     }
// }
// export const logInMessage = {
//     logIn() {
//         console.log ('login message from IIFE');
//     }
// }

(function logInMessage () {
        console.log ('login message from IIFE');
        alert('login message from IIFE');
})();