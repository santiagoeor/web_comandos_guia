import html from './git.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const appGit = ( elementId ) => {

    //Cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

}