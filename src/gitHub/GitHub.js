class GitHub extends HTMLElement {

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
            background-color: #1f5db8;
            border-radius: 10px;
            padding: 20px;
        }

        a {
            color: #ffffff;
            text-decoration: underline;
          }
          
          ul, li, p {
            margin-bottom: 10px;
          }
          
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${GitHub.styles}</style>
        <div id="fondo">
        <h1>GIT Y GITHUB</h1>
        <p>
          Para trabajar con Git, primero debemos descargarlo en el siguiente enlace <a href="https://git-scm.com/downloads" target="_blank">git</a>
          y también vscode <a href="https://code.visualstudio.com/insiders/" target="_blank">Download</a> <br>
          Visual Studio Code - Mac, Linux, Windows o su editor preferido.<br><br>
          El siguiente paso es configurarlo para trabajar con él.
      </p>
      <ul>
          <li>vamos a abrir Git Bash y ejecutar los siguientes comandos en consola de git bash.</li>
          <li>git config --global user.name "aquí va tu nombre"</li>
          <li>git config --global user.email ejemplo@gmail.com</li>
          <li>git config --global pull.rebase true</li>
          <br>
          <p>los dos comandos que siguen son pa los que les gusta vscode, los que no utilizan vscode
              pueden seguir con la<br>
              configuración luego de los dos comandos ya que no les va a afectar
          </p>
          <br>
          <li>git config --global core.editor "code --wait"</li>
          <li>git config --global -e</li>
          <li>
              con este comando se abrirá visual code, con la configuración que hemos puesto debemos
              cerrar el archivo para seguir
              con los siguientes comandos.
          </li>
          <li>git config --global core.autocrlf true</li>
          <li>git config --global init.defaultBranch main</li>
      </ul>

      <h5 align="center">Ahora van los comandos pa poderlo utilizar</h5>

      <ul>
          <li><b>cd .. </b> es para salir de una carpeta</li>
          <li><b>cd </b> nombre de la carpeta es para dentrar</li>
          <li><b>pwd </b> es para ver la ruta donde estamos</li>
          <li><b>ls </b> pa ver lo que hay dentro de la carpeta</li>
          <br>
          <li><b>git init </b> es para inicializar el proyecto dentro de git</li>
          <li><b>git status </b> es para ver si hay cambios por subir</li>
          <li><b>git config --global alias.s "status" </b>Con esto ponemos un alias a los comandos de git este caso puse s para el status 
        y ya solo es git s para ejecutarlo</li>
        <li><a href="https://gist.github.com/Klerith/0acf18bbece7923bcac55edb71b03c2b" target="_blank">Aqui dejo dos opciones personalizadas</a></li>
          <li><b>git add . </b> es para subir los cambios</li>
          <li><b>git reset . </b> es para bajar los cambio de la zona de staing</li>
          <li><b>git add index.html style.css </b> es para subir solo los archivos que le especifiquemos</li>
          <li><b>git reset index.html style.css </b> es para bajar los cambio de la zona de staing</li>
          <li><b>git add *.html </b> es para solo subir al status solo archivos con la extención que le indiquemos </li>
          <li><b>git add views/*.html </b> especificamos si esta en una carpeta y la extención</li>
          <li><b>git add views </b> También le podemos indicar que coja todos los archivos y subcarpetas de una carpeta</li>
          <li>
              <b>git log </b>
              es para los comentarios de los cambios que ha hecho las otras personas, para salir de la
              zona de comentarios<br>
              oprimimos la tecla q del teclado.
          </li>
          <li><b>git commit -m "comentario" </b> es para escribirle un comentario sobre el cambio que
              vamos a subir</li>
        <li><b>git commit --amend</b> es para corregir el ultimo commit</li>
          <li><b>git commit -am "comentario" </b>poniendo am no hay que poner el git add .</li>
          <li><b>git checkout -- . </b> es para devolver el proyecto al último commit que hicimos Para
              subirlo a github hay que crear un repositorio <br>
              en github y copiar el antepenultimo codigo eje:</li>
          <li>git remote add origin https://github.com/equipo/ejemplo.git</li>
          <li><b>git push -u origin main </b></li>
          <p>
              despues de subir el proyecto ya lo unico que tendrias que hacer es darle clik contrario
              a la carpeta del proyecto y selecionar la<br>
              opcion abrir con Git Bash Here
          </p>
          <li><b>git pull </b> para actualizar los cambios en github</li>
          <li><b>git status </b> para ver si hay cambios</li>
          <li><b>git add . </b>para subir los cambios</li>
          <li><b>git commit -m "comentario" </b> comentar lo que se hizo</li>
          <li><b>git push </b>es para subir los cambios al repositorio en GitHub</li>
          <li><b>git tag -a vs 1.0 -m "primer tag" </b>es para crear tag, verlos en gitHub</li>
          <li><b>git tag </b>pa listar los tag</li>
          <li><b>git push --tags </b>para subirlo a gitHub</li>
          <p>
              para clonar repositorio<br><br>

              puedes darle clik contrario a la carpeta donde queremos guradar el proyecto en
              mi<br>
              caso www y luego le damos en la opcion abrir con Git Bash Here
          </p>
          <li><b>git clone https://github.com/equipo/Proyecto.git</b></li>
          <li><b>git pull </b>es para actualizar los cambios que aigan subido los compañeros de equipo
          </li>
      </ul>
      <h5 align="center">Creación de ramas en GitHub</h5>

      <ul>
          <p>Crear rama</p>
          <li><b>git branch nombre.de.la.rama </b></li>
          <p>cambiar de rama</p>
          <li><b>git checkout nombre.de.la.rama </b></li>
          <p>para saber en que rama estamos</p>
          <li><b>git branch</b></li>
          <p>para cambiar el nombre de la rama</p>
          <li><b>git branch -m nuevo.nombre</b></li>
          <p>si estamos en otra rama, debemos especificar el<br>
             nombre de la rama a cambiar, y el nuevo nombre
          </p>
          <li><b>git branch -m nomb.de.rama new.nombre</b></li>
          <p>
              y de ahí ya haríamos los cambios al proyecto para unir los cambios a la rama principal
              hacemos esto<br>
              hay que cambiar de rama principal
          </p>
          <li><b>git checkout nombre.de.la.rama</b></li>
          <p>luego hacemos la unión de los cambios</p>
          <li><b>git merge nombre.de.la.rama</b></li>
          <p>para eliminar una rama hacemos lo siguiente</p>
          <li><b>git branch -d nombre.de.la.rama</b></li>
          <p>para clonar una rama especifica de nuestro repositorio utilizamos el siguiente comando en consola</p>
          <li><b>git clone https://github.com/equipo/backen.git -b rama --single-branch </b></li>
          <li><b>git pull --all</b></li>
          <li><b>git branch -a </b> para listar las ramas de GitHub</li>
          <li><b>git remote prune origin </b>Esto elimina las ramas que no estemos utilizandoen gitHub</li>
      </ul>

      <h5><b>Crear stash, y hacer rebase interativo pa modificar commits</b></h5>
      <ul>
        <li><b>git stash</b> es para guardar los cambios sin haber realizado un commit, y nos devuelve al ultimo commit</li>
        <li><b>git stash pop</b> con este devolvemos nuestro proyecto al stash</li>
        <li><b>git stash clear</b> es para borrar todos los stash</li>
        <li>este comando de git que sirve es recomandeble no hacerlo si los commits ya estan en un repositorio de GitHub.</li>
        <li><b>git rebase -i HEAD~4</b> esto trae los ultimos 4 commits y los podemos unir o modificar</li>
      </ul>
      </div>
         `
    }

}

customElements.define('git-hub', GitHub);