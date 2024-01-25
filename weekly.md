## Objetivos del Sprint 3:

+	Corregir disposición de pantallas entre 320px hasta 1023px.
+	Realizar ruta parametrizada de Detalle de Producto.
+	Colocar links faltantes.

Modificar el sitio para que:

+	Reutilice los componentes compartidos: header, menu, footer, etc.
+	Muestre contenido dinámicamente a través de un motor de templates (Express+EJS).

## Weekly Meeting Overview:

**Fecha:** 
+ 26 de Noviembre de 2023.

**Miembros del Equipo:**
+	Saavedra, Matías.
+	Almaraz, Santiago.
+	Luna, Ivana.
+	Monteros, Luana.
+	Leguizamón, Lucas.

**Objetivo de la reunión:**

+	Tratar los temas a solucionar para concluir el trabajo del Sprint 2 y organizar las tareas para el desarrollo del trabajo del Sprint 3. 

**Agenda de la reunión:** 

+	Discutir sobre los problemas existentes en la página y plantear el desarrollo de las tareas faltantes.
+	Brainstorming: propuestas de diferentes soluciones.
+	Una vez definida la solución, continuar con la construcción del tablero de trabajo con las actividades a realizar.

**Desarrollo de la reunión:**

Durante el desarrollo de la reunión se plantearon distintas ideas para solucionar el problema existente de la disposición de las páginas entre 320px y 1023px.
En este punto se decidió cambiar el header y el footer del sitio para que el mismo funcione de manera 100% responsive. 

En base a las peticiones del cliente, de que el sitio tome un carácter más formal, se decidió cambiar la paleta de colores del mismo. También agregar productos a la página del Home, por lo que se separará en secciones los banners para dar espacio a la presentación de los mismos. 

De acuerdo a lo acordado en la reunión, para completar las rutas parametrizadas de Detalle de Producto se implementará arquitectura Modelo-Vista-Controlador (MVC), ya que la implementación de la misma permitirá una mejor organización y mantenimiento del código, lo que a su vez facilitará la expansión y escalabilidad de la aplicación.

Solucionadas las cuestiones correspondientes al 2° Sprint, se prosiguió definiendo las tareas en el tablero de trabajo, para que cada miembro tenga conocimiento de las tareas a realizar, facilitando la organización del equipo. 

## Objetivos del Sprint 4:

+	Modificar el sitio para que muestre productos dinámicamente a través de una fuente de datos (JSON).
+	Archivos products.json y users.json con datos de productos y usuarios.
+	Administración completa de productos con: Listado, detalle, creación, edición, eliminación.

## Weekly Meeting Overview

**Fecha :**
+ 9 de Diciembre de 2023.

**Miembros del Equipo:**
+ Saavedra, Matías.
+ Almaraz, Santiago.
+ Luna, Ivana.
+ Monteros, Luana.
+ Leguizamón, Lucas.

**Objetivo de la reunión:**
+ Organizar las tareas para el desarrollo del trabajo del Sprint 4. 

**Agenda de la reunión:** 
+ Plantear el desarrollo de las tareas.
+ Realizar la construcción del tablero de trabajo con las actividades a realizar.
+ Brainstorming: propuestas e ideas para desarrollar el esquema de trabajo a realizar, para generar fluidez y evitar que la falta de realización de una tarea impida la continuidad de otra.

**Desarrollo de la reunión:**

Durante el desarrollo de la reunión se construyó el tablero de trabajo con las actividades a llevar a cabo en este sprint. Se plantearon distintas ideas para el desarrollo de las mismas. 

Se decidió realizar primero la definición de los campos del archivo products.json y la realización del mismo, que será el archivo que nos permitirá continuar con las demás tareas. 

Luego se proseguirá con la realización de las diferentes funcionalidades de listado, detalle, alta, modificación y baja de productos. Utilizando los diferentes métodos del proceso CRUD.

Decidimos además trabajar en conjunto utilizando la extensión Live Share de VS Code, consideramos que es la mejor manera de organizarnos, ayudarnos y evitar conflictos en las tareas que nos encomendaron en este sprint. 

Por ultimo agregaríamos el archivo users.json, ya que el mismo no impediría avanzar con la mayoría de las tareas de este sprint. 

## Objetivos del Sprint 5:
Modificar el sitio para que:
+	Permita el flujo de registro, login y logout de usuarios.
+	Permita recordar al usuario para que pueda ingresar sin volverse a loguear.
+	Tenga rutas accesibles solo por huéspedes (visitantes sin login).
+	Tenga rutas accesibles solo por usuarios (que hicieron login).

## Weekly Meeting Overview

**Fecha :** 
+ 6 de Enero de 2024.

**Miembros del Equipo:**
+	Saavedra, Matías.
+	Almaraz, Santiago.
+	Luna, Ivana.
+	Monteros, Luana.
+	Leguizamón, Lucas.

**Objetivo de la reunión:**
•	Organizar las tareas para el desarrollo del trabajo del Sprint 5. 

**Agenda de la reunión:**
+	Plantear el desarrollo de las tareas.
+	Realizar la construcción del tablero de trabajo con las actividades a realizar.
+	Brainstorming: propuestas e ideas para desarrollar el esquema de trabajo a realizar, para generar fluidez y evitar que la falta de realización de una tarea impida la continuidad de otra.

**Desarrollo de la reunión:**
Durante el desarrollo de la reunión se construyó el tablero de trabajo con las actividades a llevar a cabo en este sprint. Se plantearon distintas ideas para el desarrollo de las mismas. 
Decidimos que seria mejor que cada uno profundice, de manera individual, en los temas necesarios para desarrollar las actividades antes de empezar a realizarlas y así poder trabajar con mayor fluidez.


## Weekly Meeting Overview
**Fecha :**
+ 11 de Enero de 2024.

**Objetivo de la reunión:**
+	Organizar el desarrollo de las tareas. 
+	Plantear las mismas y empezar a trabajar en ellas.

**Agenda de la reunión:** 
+	Evaluar el proyecto para determinar los cambios a realizar para poder continuar con las tareas de este sprint.

**Desarrollo de la reunión:**
Durante el desarrollo de la reunión evaluamos nuestro proyecto, formularios, paquetes instalados para determinar que es lo que nos faltaba para comenzar a trabajar.
Nos dimos cuenta de que necesitábamos agregar en nuestro formulario de registro un campo para que el usuario pueda subir una imagen de perfil.
Decidimos instalar todos los paquetes que íbamos a necesitar para todas las actividades (express-session, express-validator, bcrypt, cookie-parser).
Agregamos carpeta de middleware, validación de email, encriptación de password, e implementación de multer para el agregado de la imagen del usuario. 
Agregamos validaciones del formulario de login y formulario de registro.


## Weekly Meeting Overview
**Fecha :**
+ 19 de Enero de 2024.

**Objetivo de la reunión:**
+	Organizar el desarrollo de las tareas faltantes. 
+	Plantear las mismas y comenzar a trabajar en ellas.

**Desarrollo de la reunión:**

En este encuentro continuamos trabajando sobre el desarrollo del login y se hizo modificación parcial del header. 
Hicimos varias pruebas para confirmar que todo funcionaba bien. 
Se decidió agregarle al formulario de login el checkbox para la posibilidad de que se recuerde al usuario y también separar las rutas que se pueden acceder en cualquier momento, de las que se puede acceder solo si uno no está logueado y, por último, de las que requieren estar logueado.
También decidimos hacer una pagina para el perfil del usuario. 
Resolvimos conflictos que surgieron al hacer merge con la rama principal y también modificaciones al header para afinar detalles. 