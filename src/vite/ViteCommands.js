class ViteComandos extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
            display: block;
            max-width: 800px;
            margin: 0 auto;
            font-family: 'Arial', sans-serif;
        }

        #fondo{
            background-color: #2fb57f;
            border-radius: 10px;
            padding: 20px;
        }
          
          ol, li {
            margin-bottom: 10px;
          }
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${ViteComandos.styles}</style>
        <div id="fondo">
        <h1>Vite</h1>
        <ol>
            <li><b>npm create vite</b></li>
            vamos al proyecto
            <li><b>npm install</b></li>
            <li><b>npm run dev</b></li>
            Para generar el proyecto pa produción
            <li><b>npm run build</b></li>
        </ol>
        </div>
         `
    }

}

customElements.define('vite-commands', ViteComandos);