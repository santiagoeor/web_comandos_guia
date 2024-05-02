(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function b(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(a){if(a.ep)return;a.ep=!0;const e=b(a);fetch(a.href,e)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
        :host{
            display: block;
            max-width: 800px;
            margin: 0 auto;
            font-family: 'Arial', sans-serif;
        }

        #fondo{
            background-color: #5879a4;
            border-radius: 10px;
            padding: 20px;
        }

        ol, li {
            margin-bottom: 10px;
          }
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${r.styles}</style>
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
        <li><b>ng build</b></li>
        
      </ol>
      </div>
         `}}customElements.define("angular-commands",r);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${l.styles}</style>
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
         `}}customElements.define("best-menu",l);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
          
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${s.styles}</style>
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
         `}}customElements.define("git-hub",s);class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
        :host{
            display: block;
            max-width: 800px;
            margin: 0 auto;
            font-family: 'Arial', sans-serif;
        }

        #fondo{
            background-color: #5c636a;
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
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${t.styles}</style>
        <div id="fondo">
        <h1>MYSQL</h1>
        Pasos para crear base de datos en consola

        <ul>
            <br>
            <li>
                Nos vamos a ir donde está ubicado la carpeta de MySQL que generalmente la
                podemos encontrar en esta ruta si tenemos instalado el
               <a href="https://www.appserv.org/en/" target="_blank">AppServ</a>, <a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a> que es un servidor local
            </li>
            C:AppServMySQL\bin
        </ul>

        <ul>
            <li>
                Cuando estemos en esta ruta vamos utilizar este comando Ctrl + D pa que nos
                lleve a la
                ruta puesta anteriormente, cuando estemos allí borramos todo y escribimos cmd y
                le damos enter.
            </li>
            <li>
                y automáticamente nos va a abrir la consola de Windows.
            </li>
            <li>
                también podemos crear un enlace desde el escritorio, para eso donde nos pida la
                url a la
                que queremos acceder ponemos lo siguiente C:WindowsSystem32cmd.exe y ya le
                pones el nombre
                de MySQL, de esta manera accedes más rápido.
            </li>
            <li>
                Para acceder a MySQL ejecutamos el siguiente comando <br> mysql -h localhost -u
                root -p y le damos enter.
            </li>
            <li>
                Después de eso nos va a pedir la contraseña de la base de datos, la ponemos y
                listo.
            </li>

        </ul>

        <h5 align="center">Ahora vamos a ver unos comandos de MYSQL</h5>

        <ol>
            <br>
            <li>SHOW DATABASES; es para listar las bases de datos que tenemos creadas</li>
            <li>CREATE DATABASE db_sistema; de esta manera creamos la base de datos</li>
            <li>USE db_sistema; El USE es para utilizar la base de datos que hemos creado</li>
            <li>Luego procedemos a crear una tabla</li>
            <li style="color:rgb(0, 0, 0);">
                CREATE TABLE usuarios ( <br>
                id INT NOT NULL AUTO_INCREMENT, <br>
                nombre VARCHAR(50) NOT NULL, <br>
                edad INT NOT NULL, <br>
                email VARCHAR(100) NOT NULL, <br>
                PRIMARY KEY (id) <br>
                ); <br>
            </li>
            <li>SHOW TABLES; para listar las tablas de la base de datos</li>
            <li>Ahora acedemos a la tabla de usuarios que creamos</li>
            <li>EXPLAIN usuarios; De esta manera listamos las columnas de la tabla de usuarios
            </li>
            <li>luego le ingresamos datos a la tabla de usuarios de esta manera</li>
            <br>
            <li style="color:rgb(0, 0, 0);">
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Oscar', 25,
                'oscar@gmail.com');<br>
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Layla', 15,
                'layla@gmail.com');<br>
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Nicolas', 36,
                'nico@gmail.com');<br>
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Chanchito', 7,
                'osca@gmail.com');<br>
            </li>
            <li>Vamos a consultar los datos que acabamos de ingresar</li>
            <li>SELECT * FROM usuarios;</li>
        </ol>
        <p>
            Y de esta manera podemos crear las tablas en las base de datos que creemos, Ahora
            voy a crear crear otra tabla para relacionarla con la tabla usuarios
            usando claves foráneas
        </p>
        <p style="color:rgb(0, 0, 0);">
            CREATE TABLE productos <br>
            ( <br>
            id INT NOT NULL AUTO_INCREMENT, <br>
            nombre VARCHAR(50) NOT NULL, <br>
            fk_user INT NOT NULL, <br>
            marca VARCHAR(50) NOT NULL, <br>
            PRIMARY KEY(id), <br>
            FOREIGN KEY(fk_user) REFERENCES usuarios(id) <br>
            ); <br>
        </p>
        <p>Vamos ingresar dos registros a la tabla de productos, como fk_user es la clave foranea ponemos el id del usuario que queremos asociar con ese producto</p>
        <ul>
            <li>INSERT INTO productos (nombre, fk_user, marca) VALUES('Celular', 2, 'Motorola');</li>
            <li>INSERT INTO productos (nombre, fk_user, marca) VALUES('Computador', 1, 'Azus');</li>
        </ul>
        <p>Vamos consultar los productos ingresados utilizando un Join para unir la tabla de productos y usuarios</p>
        <ul>
        <li>SELECT * FROM productos JOIN usuarios ON productos.fk_user = usuarios.id;</li>
        </ul>
        </div>
         `}}customElements.define("my-sql",t);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${n.styles}</style>
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
        <li><b>ctrl + f</b> para buscar una palabra en el archivo</li>
        <li><b>ctrl + p</b> para buscar un archivo del proyecto</li>
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
        `}}customElements.define("visual-studio-code",n);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${c.styles}</style>
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
         `}}customElements.define("vite-commands",c);
