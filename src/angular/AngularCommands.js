class AngularCommands extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
        }

        #fondo{
            background-color: #dc3545;
        }
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${AngularCommands.styles}</style>
        <div id="fondo">
        <h1>Angular</h1> 
        Comandos del Angular cli<br>
      <ol>
        Con este comando instalamos angular utilizando npm
        <li><b>npm install -g @angular/cli</b></li>

        Comando pa crear un proyecto en angular
        <li><b>ng new nombdelProyect</b></li>

        Para generar un puerto para verlo en le navegador hacemos esto
        <li><b>ng serve</b> si no arranca hacemos un <b>npm install</b> y volvemos a intentar</li><br>

        
        Comando para crear modulos
        <li><b>ng g m nombredelmodulo</b></li>
        
        Al poner esto al final pa que no se nos cree el archivo de pruebas y de styles, cuando<br>
        creamos un componente
        <li><b>ng g c page/ejemplo --skip-tests -s</b></li>

        <p>Comando pa crear componentes c significa componente, y s servicios</p>
        Comando para crear un Componente
        <li><b>ng g c pages/paises</b></li>

        comamdo pa crear un standalone component
        <li><b>ng g c pages/paises --standalone</b></li>

        Comando para crear Servicios
        <li><b>ng g s pages/paises</b></li>

        tambien podemos decirle que nos cree una carpeta service, para no crearla manualmente eje:
        <li><b>ng g s gifs/services/gifs</b></li>

        Comando para las rutas
        <li><b>ng g m AppRouting --flat</b></li>

        Comando para crear pipes
        <li><b>ng g pipe ventas/pipe/ordenar</b></li>

        De esta manera integramos pwa a angular
        <li><b>ng add @angular/pwa</b></li>

        Para llevar la aplicacion a producion hacemos esto
        <li><b>ng build --configuration production</b></li>
        
      </ol>
      </div>
         `
    }

}

customElements.define('angular-commands', AngularCommands);