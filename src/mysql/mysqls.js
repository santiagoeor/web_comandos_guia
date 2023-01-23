import html from './mysql.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const appMysql = ( elementId ) => {

    //Cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

}