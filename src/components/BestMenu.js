class BestMenu extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
        }

        header {
            position: fixed;
        }

        .btn{
            padding: 10px 20px;
            font-size: 16px;
            border: none; /* Sin borde */
            border-radius: 5px; /* Esquinas redondeadas */
            cursor: pointer;
        }

        .btn-primary{            
            background-color: #0d6efd; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-secondary{
            background-color: #5c636a; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-warning{
            background-color: #ffca2c; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-danger{
            background-color: #dc3545; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-info{
            background-color: #0dcaf0; /* Color de fondo */
            color: white; /* Color del texto */
        }
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${BestMenu.styles}</style>
        <br>
        <header>
          <nav>
            <a href="#gitHub" class="btn btn-primary">GitHub</a>
            <a href="#mysql" class="btn btn-secondary">Mysql</a>
            <a href="#vite" class="btn btn-warning">Vite</a>
            <a href="#angular" class="btn btn-danger">Angular</a>
            <a href="#vscode" class="btn btn-info">Vscode</a>
          </nav>
        </header>
        <br>
         `
    }

}

customElements.define('best-menu', BestMenu);