class ViteComandos extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
        }

        ol{
            background-color: rgb(75, 181, 227);
        }
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${ViteComandos.styles}</style>
        <h1>Vite</h1>
        <ol>
            <li><b>npm create vite</b></li>
            vamos al proyecto
            <li><b>npm install</b></li>
            <li><b>npm run dev</b></li>
            Para generar el proyecto pa produción
            <li><b>npm run build</b></li>
        </ol>
         `
    }

}

customElements.define('vite-commands', ViteComandos);