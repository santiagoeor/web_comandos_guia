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
            top: 0;
            left: 0;
            right: 0;
             /* Ajusta el color de fondo del encabezado si es diferente */
            padding: 14px; /* Ajusta el espaciado del encabezado */
            text-align: center; /* Alinea el texto al centro */
            color: white; /* Ajusta el color del texto del encabezado */
          }

        .btn{
            padding: 10px 10px;
            font-size: 16px;
            border: none; /* Sin borde */
            border-radius: 5px; /* Esquinas redondeadas */
            cursor: pointer;
        }

        .btn-primary{            
            background-color: #1f5db8; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-secondary{
            background-color: #5c636a; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-warning{
            background-color: #2fb57f; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-danger{
            background-color: #5879a4; /* Color de fondo */
            color: white; /* Color del texto */
        }

        .btn-info{
            background-color: #41a3b6; /* Color de fondo */
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