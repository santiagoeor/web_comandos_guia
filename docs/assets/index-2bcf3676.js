(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}})();const s=`<div class="accordion-item">\r
    <h2 class="accordion-header" id="flush-headingOne">\r
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">\r
        GitHub\r
      </button>\r
    </h2>\r
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">\r
      <div class="accordion-body">\r
        <p>\r
          Para trabajar con Git, primero debemos descargarlo en el siguiente enlace Git (git-scm.com).\r
          y también vscode Download <br>\r
          Visual Studio Code - Mac, Linux, Windows o su editor preferido.<br><br>\r
          El siguiente paso es configurarlo para trabajar con él.\r
      </p>\r
      <ul>\r
          <li>vamos a abrir Git Bash y ejecutar los siguientes comandos en consola de git bash.</li>\r
          <li>git config --global user.email "aquí va tu nombre"</li>\r
          <li>git config --global user.email ejemplo@gmail.com</li>\r
          <br>\r
          <p>los dos comandos que siguen son pa los que les gusta vscode, los que no utilizan vscode\r
              pueden seguir con la<br>\r
              configuración luego de los dos comandos ya que no les va a afectar\r
          </p>\r
          <br>\r
          <li>git config --global core.editor "code --wait"</li>\r
          <li>git config --global -e</li>\r
          <li>\r
              con este comando se abrirá visual code, con la configuración que hemos puesto debemos\r
              cerrar el archivo para seguir\r
              con los siguientes comandos.\r
          </li>\r
          <li>git config --global core.autocrlf true</li>\r
      </ul>\r
\r
      <h5 align="center">Ahora van los comandos pa poderlo utilizar</h5>\r
\r
      <ul>\r
          <li><b>cd .. </b> es para salir de una carpeta</li>\r
          <li><b>cd </b> nombre de la carpeta es para dentrar</li>\r
          <li><b>pwd </b> es para ver la ruta donde estamos</li>\r
          <li><b>ls </b> pa ver lo que hay dentro de la carpeta</li>\r
          <br>\r
          <li><b>git init </b> es para inicializar el proyecto dentro de git</li>\r
          <li><b>git status </b> es para ver si hay cambios por subir</li>\r
          <li><b>git add . </b> es para subir los cambios</li>\r
          <li><b>git reset . </b> es para bajar los cambio de la zona de staing</li>\r
          <li>\r
              <b>git log </b>\r
              es para los comentarios de los cambios que ha hecho las otras personas, para salir de la\r
              zona de comentarios<br>\r
              oprimimos la tecla q del teclado.\r
          </li>\r
          <li><b>git commit -m "comentario" </b> es para escribirle un comentario sobre el cambio que\r
              vamos a subir</li>\r
          <li><b>git checkout -- . </b> es para devolver el proyecto al último commit que hicimos Para\r
              subirlo a github hay que crear un repositorio <br>\r
              en github y copiar el antepenultimo codigo eje:</li>\r
          <li>git remote add origin https://github.com/equipo/ejemplo.git</li>\r
          <li><b>git push -u origin main </b></li>\r
          <p>Recuerda cambiar el main por master</p>\r
          <p>\r
              despues de subir el proyecto ya lo unico que tendrias que hacer es darle clik contrario\r
              a la carpeta del proyecto y selecionar la<br>\r
              opcion abrir con Git Bash Here\r
          </p>\r
          <li><b>git pull </b> para actualizar los cambios en github</li>\r
          <li><b>git status </b> para ver si hay cambios</li>\r
          <li><b>git add . </b>para subir los cambios</li>\r
          <li><b>git commit -m "comentario" </b> comentar lo que se hizo</li>\r
          <li><b>git push </b>es para subir los cambios al repositorio en GitHub</li>\r
          <p>\r
              para clonar repositorio<br><br>\r
\r
              puedes darle clik contrario a la carpeta donde queremos guradar el proyecto en\r
              nuestro<br>\r
              caso www y luego le damos en la opcion abrir con Git Bash Here\r
          </p>\r
          <li><b>git clone https://github.com/equipo/Proyecto.git</b></li>\r
          <li><b>git pull </b>es para actualizar los cambios que aigan subido los compañeros de equipo\r
          </li>\r
      </ul>\r
      <h5 align="center">Creación de ramas en GitHub</h5>\r
\r
      <ul>\r
          <p>Crear rama</p>\r
          <li><b>git branch nombre.de.la.rama </b></li>\r
          <p>cambiar de rama</p>\r
          <li><b>git checkout -b nombre.de.la.rama </b></li>\r
          <p>para saber en que rama estamos</p>\r
          <li><b>git branch</b></li>\r
          <p>\r
              y de ahí ya haríamos los cambios al proyecto para unir los cambios a la rama principal\r
              hacemos esto<br>\r
              hay que cambiar de rama principal\r
          </p>\r
          <li><b>git checkout nombre.de.la.rama</b></li>\r
          <p>luego hacemos la unión de los cambios</p>\r
          <li><b>git merge nombre.de.la.rama</b></li>\r
          <p>para eliminar una rama hacemos lo siguiente</p>\r
          <li><b>git branch -d nombre.de.la.rama</b></li>\r
          <p>para clonar una rama especifica de nuestro repositorio utilizamos el siguiente comando en consola</p>\r
          <li><b>git clone https://github.com/equipo/backen.git -b rama --single-branch </b></li>\r
      </ul>\r
\r
      </div>\r
    </div>\r
  </div>`,t=o=>{(()=>{const e=document.createElement("div");e.innerHTML=s,document.querySelector(o).append(e)})()},c=`<div class="accordion-item">\r
    <h2 class="accordion-header" id="flush-headingTwo">\r
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">\r
        Mysql\r
      </button>\r
    </h2>\r
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">\r
      <div class="accordion-body">\r
        Pasos para crear base de datos en consola\r
\r
        <ul>\r
            <br>\r
            <li>\r
                Nos vamos a ir donde está ubicado la carpeta de MySQL que generalmente la\r
                podemos encontrar en esta ruta si tenemos instalado el\r
                AppServ que es un servidor local\r
            </li>\r
            C:\\AppServ\\MySQL\\bin\r
        </ul>\r
\r
        <ul>\r
            <li>\r
                Cuando estemos en esta ruta vamos utilizar este comando Ctrl + D pa que nos\r
                lleve a la\r
                ruta puesta anteriormente, cuando estemos allí borramos todo y escribimos cmd y\r
                le damos enter.\r
            </li>\r
            <li>\r
                y automáticamente nos va a abrir la consola de Windows.\r
            </li>\r
            <li>\r
                también podemos crear un enlace desde el escritorio, para eso donde nos pida la\r
                url a la\r
                que queremos acceder ponemos lo siguiente C:\\Windows\\System32\\cmd.exe y ya le\r
                pones el nombre\r
                de MySQL, de esta manera accedes más rápido.\r
            </li>\r
            <li>\r
                Para acceder a MySQL ejecutamos el siguiente comando <br> mysql -h localhost -u\r
                root -p y le damos enter.\r
            </li>\r
            <li>\r
                Después de eso nos va a pedir la contraseña de la base de datos, la ponemos y\r
                listo.\r
            </li>\r
\r
        </ul>\r
\r
        <h5 align="center">Ahora vamos a ver unos comandos de MYSQL</h5>\r
\r
        <ol>\r
            <br>\r
            <li>SHOW DATABASES; es para listar las bases de datos que tenemos creadas</li>\r
            <li>CREATE DATABASE db_sistema; de esta manera creamos la base de datos</li>\r
            <li>USE db_sistema El USE es para utilizar la base de datos que hemos creado</li>\r
            <li>Luego procedemos a crear una tabla</li>\r
            <li style="color:gray;">\r
                CREATE TABLE usuarios ( <br>\r
                id INT NOT NULL AUTO_INCREMENT, <br>\r
                nombre VARCHAR(50) NOT NULL, <br>\r
                edad INT NOT NULL, <br>\r
                email VARCHAR(100) NOT NULL, <br>\r
                PRIMARY KEY (id) <br>\r
                ); <br>\r
            </li>\r
            <li>SHOW TABLES; para listar las tablas de la base de datos</li>\r
            <li>Ahora acedemos a la tabla de usuarios que creamos</li>\r
            <li>EXPLAIN usuarios; De esta manera listamos las columnas de la tabla de usuarios\r
            </li>\r
            <li>luego le ingresamos datos a la tabla de usuarios de esta manera</li>\r
            <br>\r
            <li style="color:gray;">\r
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Oscar', 25,\r
                'oscar@gmail.com');<br>\r
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Layla', 15,\r
                'layla@gmail.com');<br>\r
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Nicolas', 36,\r
                'nico@gmail.com');<br>\r
                INSERT INTO usuarios (nombre, edad, email) VALUES ('Chanchito', 7,\r
                'osca@gmail.com');<br>\r
            </li>\r
            <li>Vamos a consultar los datos que acabamos de ingresar</li>\r
            <li>SELECT * FROM usuarios;</li>\r
        </ol>\r
        <p>\r
            Y de esta manera podemos crear las tablas en las base de datos que creemos, Ahora\r
            voy a crear crear otra tabla para relacionarla con la tabla usuarios\r
            usando claves foráneas\r
        </p>\r
        <p style="color:gray;">\r
            CREATE TABLE productos <br>\r
            ( <br>\r
            id INT NOT NULL AUTO_INCREMENT, <br>\r
            nombre VARCHAR(50) NOT NULL, <br>\r
            create_by INT NOT NULL, <br>\r
            marca VARCHAR(50) NOT NULL, <br>\r
            PRIMARY KEY(id), <br>\r
            FOREIGN KEY(create_by) REFERENCE usuarios(id) <br>\r
            ); <br>\r
        </p>\r
\r
      </div>\r
    </div>\r
  </div>`,d=o=>{(()=>{const e=document.createElement("div");e.innerHTML=c,document.querySelector(o).append(e)})()};t("#gitHub");d("#mysql");
