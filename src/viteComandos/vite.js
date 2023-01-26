import html from './vite.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const appVite = ( elementId ) => {

    //Cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

}