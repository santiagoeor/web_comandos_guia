class MySql extends HTMLElement {

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

          .sql{
              color: #0087fd;
          }
        `

    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>${MySql.styles}</style>
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
            C:\AppServ\MySQL\bin
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
                que queremos acceder ponemos lo siguiente C:\Windows\System32\cmd.exe y ya le
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
            <li><b class="sql">SHOW DATABASES</b>; es para listar las bases de datos que tenemos creadas</li>
            <li><b class="sql">CREATE DATABASE</b> db_sistema; de esta manera creamos la base de datos</li>
            <li><b class="sql">USE</b> db_sistema; El USE es para utilizar la base de datos que hemos creado</li>
            <li>Luego procedemos a crear una tabla</li>
            <li style="color:rgb(0, 0, 0);">
            <b class="sql">CREATE TABLE</b> usuarios <b class="sql">(</b> <br>
                id <b class="sql">INT NOT NULL AUTO_INCREMENT</b>, <br>
                nombre <b class="sql">VARCHAR(</b>50<b class="sql">) NOT NULL</b>, <br>
                edad <b class="sql">INT NOT NULL</b>, <br>
                email <b class="sql">VARCHAR(</b>100<b class="sql">) NOT NULL</b>, <br>
                <b class="sql">PRIMARY KEY (</b>id<b class="sql">)</b> <br>
                <b class="sql">)</b>; <br>
            </li>
            <li><b class="sql">SHOW TABLES</b>; para listar las tablas de la base de datos</li>
            <li>Ahora acedemos a la tabla de usuarios que creamos</li>
            <li><b class="sql">EXPLAIN usuarios</b>; De esta manera listamos las columnas de la tabla de usuarios
            </li>
            <li>luego le ingresamos datos a la tabla de usuarios de esta manera</li>
            <br>
            <li style="color:rgb(0, 0, 0);">
            <b class="sql">INSERT INTO</b> usuarios <b class="sql">(</b>nombre, edad, email<b class="sql">) VALUES (</b>'Oscar', 25,
                'oscar@gmail.com'<b class="sql">)</b>;<br>
                <b class="sql">INSERT INTO</b> usuarios <b class="sql">(</b>nombre, edad, email<b class="sql">) VALUES (</b>'Layla', 15,
                'layla@gmail.com'<b class="sql">)</b>;<br>
                <b class="sql">INSERT INTO</b> usuarios <b class="sql">(</b>nombre, edad, email<b class="sql">) VALUES (</b>'Nicolas', 36,
                'nico@gmail.com'<b class="sql">)</b>;<br>
                <b class="sql">INSERT INTO</b> usuarios <b class="sql">(</b>nombre, edad, email<b class="sql">) VALUES (</b>'Chanchito', 7,
                'osca@gmail.com'<b class="sql">)</b>;<br>
            </li>
            <li>Vamos a consultar los datos que acabamos de ingresar</li>
            <li><b class="sql">SELECT * FROM</b> usuarios;</li>
        </ol>
        <p>
            Y de esta manera podemos crear las tablas en las base de datos que creemos, Ahora
            voy a crear crear otra tabla para relacionarla con la tabla usuarios
            usando claves foráneas
        </p>
        <p style="color:rgb(0, 0, 0);">
        <b class="sql">CREATE TABLE</b> productos <br>
        <b class="sql">(</b> <br>
            id <b class="sql">INT NOT NULL AUTO_INCREMENT</b>, <br>
            nombre <b class="sql">VARCHAR(</b>50<b class="sql">) NOT NULL</b>, <br>
            fk_user <b class="sql">INT NOT NULL</b>, <br>
            marca <b class="sql">VARCHAR(</b>50<b class="sql">) NOT NULL</b>, <br>
            <b class="sql">PRIMARY KEY(</b>id<b class="sql">)</b>, <br>
            <b class="sql">FOREIGN KEY(</b>fk_user<b class="sql">) REFERENCES</b> usuarios<b class="sql">(</b>id<b class="sql">)</b> <br>
            <b class="sql">)</b>; <br>
        </p>
        <p>Vamos ingresar dos registros a la tabla de productos, como fk_user es la clave foranea ponemos el id del usuario que queremos asociar con ese producto</p>
        <ul>
            <li><b class="sql">INSERT INTO</b> productos <b class="sql">(</b>nombre, fk_user, marca<b class="sql">) VALUES(</b>'Celular', 2, 'Motorola'<b class="sql">)</b>;</li>
            <li><b class="sql">INSERT INTO</b> productos <b class="sql">(</b>nombre, fk_user, marca<b class="sql">) VALUES(</b>'Computador', 1, 'Azus'<b class="sql">)</b>;</li>
        </ul>
        <p>Vamos consultar los productos ingresados utilizando un Join para unir la tabla de productos y usuarios</p>
        <ul>
            <li><b class="sql">SELECT * FROM</b> productos <b class="sql">JOIN</b> usuarios <b class="sql">ON</b> productos.fk_user = usuarios.id;</li>
        </ul>
        <p>Ahora vamos a hacer un UPDATE y DELETE a la tabla de usuarios</p>
        <ul>
            <li><b class="sql">UPDATE</b> usuarios <b class="sql">SET</b> nombre='Pablo' <b class="sql">WHERE</b> id=4;</li>
            <li><b class="sql">DELETE FROM</b> usuarios <b class="sql">WHERE</b> id=3;</li>
        </ul>
        </div>
         `
    }

}

customElements.define('my-sql', MySql);