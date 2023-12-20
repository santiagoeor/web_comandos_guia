class VisualStudioCode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
          background-color: #41a3b6;
          border-radius: 10px;
          padding: 20px;
        }

        ul, li{
          margin-bottom: 10px;
        }
        `;
  }

  connectedCallback() {
    this.render();
  }

  render() {

    this.shadowRoot.innerHTML = /*html*/`
        <style>${VisualStudioCode.styles}</style>
        <div id="fondo">
        <h1>VSCODE</h1>
        <ul>
        <li><b>ctrl + c</b> pa copiar la linea actual</li>
        <li><b>ctrl + x</b> pa cortar la linea actual</li>
        <li><b>alt + flecha arriba o abajo</b> para desplazar una linea</li>
        <li><b>ctrl + shift + k</b> pa eliminar la linea actual</li>
        <li><b>shift + alt + flecha abajo o arriba</b> pa duplicar la linea actua</li>
        <li><b>alt + flecha abajo o arriba</b> pa subir o bajar un linea, o tambien podemos<br>
          señalar varias lineas
        </li>
        <li><b>ctrl + alt flecha arriba o abajo</b> para tener varios cursores</li>
        <li><b>shit + alt flecha derecha</b> para señalar lo que hay escrito hacia delante</li>
        <li><b>ctrl cierra llave</b> pa comentarios</li>
        <li><b>ctrl + u</b> pa quitar comentarios</li>
        <li><b>ctrl + n</b> pa nuevo archivo</li>
        <li><b>ctrl + y</b> pa rehacer</li>
        <li><b>ctrl + k</b> y ctlr + o para abrir una carpeta</li>
        <li><b>ctrl + r</b> para abrir el historial de proyectos recientes</li>
        <li><b>ctrl + shift + E</b> para abrir el arbol de directorios</li>
        <li><b>ctrl + b</b> pa cerrar el arbol de directorios</li>
        <br>
        <li><b>shift + Fn + f10</b> click izquierdo</li>
        <li><b>shift + f10</b> pa Hp</li>
        <br>
        <li><b>Fn + f2</b> para renombrar en el arbol de directorio</li>
        <li><b>Fn + Alt + F12</b> para andar entre funciones</li>
        <li><b>shift + Alt + A</b> para comentar solo lo que selecionamos</li>
        <li><b>ctrl + shif + L</b> para selecionar una palabra y copiarla</li>
        <li><b>Fn + F2</b> para solo cambiar el nombre en un solo lugar, se cambia
          <br>automaticamente donde lo este utilizando.
        </li>
        <li><b>ctrl + shif + v</b> para previsualizar el archivo readme.md</li>
        <li><b>ctrl + k + z</b> para modo concentración y pa salir es con el Esc.</li>
      </ul>
      </div>
        `;

  }
}

customElements.define('visual-studio-code', VisualStudioCode);