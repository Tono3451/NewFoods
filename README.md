# Nombre del proyecto: NewFoods
## Integrantes:
  - Omar Ortega Suárez
  - Saúl Cruz Pérez
  - Nicolás Hernández Castro

## Descripción del proyecto:
**Descubre la forma más inteligente de organizar tu alimentación**

Nuestra plataforma no solo te permite crear, compartir y descubrir recetas de todo el mundo, sino que también te ayuda a planificar tu alimentación de manera equilibrada. Con nuestro itinerario semanal de comidas, puedes organizar tus platos diarios y calcular automáticamente las calorías consumidas.

Además, gracias a nuestro sistema inteligente de análisis nutricional, recibirás recomendaciones personalizadas en función de tus datos físicos, como peso, altura y nivel de actividad. Así, podrás mantener un estilo de vida saludable, ajustando tu alimentación para alcanzar tus objetivos, ya sea perder peso, ganar masa muscular o simplemente mejorar tus hábitos alimenticios.

## Requisitos funcionales:
  - Registro de usuario:
    - La página debe permitir a los usuarios registrarse con su correo electrónico y contraseña.
    - Los usuarios deben poder actualizar sus datos personales (nombre, dirección, teléfono) desde su perfil.
  - Inicio de sesión:
    - Los usuarios registrados deben poder iniciar sesión usando su correo electrónico y contraseña.
    - Debe haber una opción para recuperar la contraseña si se olvida.
  - Búsqueda avanzada:
    - Los usuarios deben poder realizar búsquedas, categorías, filtros y palabras clave.
    - Los resultados se deben mostrar según los criterios seleccionados.
  - Exhibición de recetas:
    - Las recetas  deben ser mostrados con imágenes, descripciones y detalles del proceso elaborativo.
  - Sistema de valoración y archivado de publicaciones:
    - Los usuarios pueden calificar los productos con la opción de dar un "me gusta".
    - Los usuarios pueden guardar una receta para poder acceder a ella posteriormente mediante una lista de "guardadas".
  - Configuración de perfil:
    - Los usuarios podrán configurar su perfil para añadir una foto y una pequeña descripción.
    - Se podrán visualizar las publicaciones subidas por el usuario, las guardadas y un itinerario semanal con las recetas de las comidas diarias.
    - Los usuarios podrán ver, a partir del itinerario semanal, las calorías que consumirán esa semana y a partir de los datos del usuario (peso, altura) las calorías recomendadas que debería consumir.
   
## **IMPORTANTE**:
### Renombrar el fichero descargado de github:
Renombrar el fichero raíz como **NewFoods** para que las rutas funcionen correctamente, en caso de no realizar este paso, el enrrutamiento entre páginas puede experimentar errores.
### Para iniciar el servidor JSON y simular una API REST con los datos de db.json, utiliza el siguiente comando en la terminal:
`json-server --watch db.json --port 3000 `
## Iniciar Sesión y Crear usuarios:
Al abrir el _index.html_, el usuario será redirigido a la página de login. Aquí se pueden tomar dos acciones, la primera es iniciar sesión con un usuario ya existente, aquí una cuenta de usuario válida:<br>
**correo: prueba3@gmail.com<br>
contraseña: prueba3contraseña**<br>
Como otra opción, se pueden crear usuarios en la página de registro introduciendo un nombre, correo y contraseña. Una vez confirmados los datos, se puede iniciar sesión con el usuario recién creado.<br>
### **En caso de fallo**:<br>
En caso de que no se pueda iniciar sesión por algún motivo, revisar los datos de usuarios en el fichero _db.json_
### Datos en los inputs de la página CreateRecipePage:
Para añadir ingredientes a una receta, a la hora de escribirlos, escribir uno por linea. Ejemplo:
Ingrediente1<br>
Ingrediente2<br>
Ingrediente3<br>
.<br>
.<br>
.<br>

De misma forma para los pasos a seguir para crear la receta
Paso1: ....<br>
Paso2: ....<br>
.<br>
.<br>
.<br>

## Listado de páginas html, Mockups y Stroyboard:
### Desktop
### Storyboard:
![Storyboard](/mockups/Desktop/storyboard.png)
### Mockups:
#### Main
##### Implementado por: index.html
![Index.html](/mockups/Desktop/main.png)
#### Perfil
##### Implementado por: profile.html
![Perfil](/mockups/Desktop/perfil1.png)
##### Implementado por: profile.html
![Perfil](/mockups/Desktop/perfil2.png)
##### Implementado por: profile2.html
![Perfil](/mockups/Desktop/perfil3.png)
#### Búsqueda
##### Implementado por: searchPage.html
![Búsqueda](/mockups/Desktop/busqueda.png)
##### Implementado por: resultsPage.html
![Búsqueda](/mockups/Desktop/resultados.png)
#### Login y Registro
##### Implementado por: loginPage.html
![Login](/mockups/Desktop/login.png)
##### Implementado por: registerPage.html
![Registro](/mockups/Desktop/register.png)
#### Crear receta
##### Implementado por: CreateRecipePage.html
![Crear receta](/mockups/Desktop/crear-receta.png)
#### Ver receta
##### Implementado por: recipePage.html
![Ver receta](/mockups/Desktop/ver-receta.png)

### Movil:
### Storyboard:
![Storyboard](/mockups/Movil/Storyboard.png)
### Mockups:
#### Main
##### Implementado por: index.html
![Index.html](/mockups/Movil/index.png)
#### Perfil
##### Implementado por: profile.html
![Perfil](/mockups/Movil/profile.png)
##### Implementado por: profile.html
![Perfil](/mockups/Movil/profile.png)
##### Implementado por: profile2.html
![Perfil](/mockups/Movil/profile2.png)
#### Búsqueda
##### Implementado por: searchPage.html
![Búsqueda](/mockups/Movil/search.png)
##### Implementado por: resultsPage.html
![Búsqueda](/mockups/Movil/results.png)
#### Login y Registro
##### Implementado por: loginPage.html
![Login](/mockups/Movil/login.png)
##### Implementado por: registerPage.html
![Registro](/mockups/Movil/register.png)
#### Crear receta
##### Implementado por: CreateRecipePage.html
![Crear receta](/mockups/Movil/crear-receta.png)
#### Ver receta
##### Implementado por: recipePage.html
![Ver receta](/mockups/Movil/receta.png)

### Tablet:
### Storyboard:
![Storyboard](/mockups/Tablet/storyboard.png)
### Mockups:
#### Main
##### Implementado por: index.html
![Index.html](/mockups/Tablet/index.png)
#### Perfil
##### Implementado por: profile.html
![Perfil](/mockups/Tablet/profile.png)
##### Implementado por: profile.html
![Perfil](/mockups/Tablet/profile.png)
##### Implementado por: profile2.html
![Perfil](/mockups/Tablet/profile2.png)
#### Búsqueda
##### Implementado por: searchPage.html
![Búsqueda](/mockups/Tablet/search.png)
##### Implementado por: resultsPage.html
![Búsqueda](/mockups/Tablet/results.png)
#### Login y Registro
##### Implementado por: loginPage.html
![Login](/mockups/Tablet/login.png)
##### Implementado por: registerPage.html
![Registro](/mockups/Tablet/register.png)
#### Crear receta
##### Implementado por: CreateRecipePage.html
![Crear receta](/mockups/Tablet/crear-recetas.png)
#### Ver receta
##### Implementado por: recipePage.html
![Ver receta](/mockups/Tablet/recetas.png)

## Listado de templates:
### Header:
#### Archivos donde se carga ->  index.html, profile.html, profile2.html, searchPage.html, resultsPage.html, CreateRecipePage.html, recipePage.html
![Header](/images/header.png)
### Footer:
#### Archivos donde se carga ->  index.html, profile.html, profile2.html, searchPage.html, resultsPage.html, CreateRecipePage.html, recipePage.html
![Footer](/images/footer.png)
### Avatar:
#### Archivos donde se carga ->  profile.html, profile2.html
![Avatar](/images/avatar.png)
### Bloque y texto:
#### Archivos donde se carga ->  CreateRecipePage.html
![Create Recipe Page](/images/block-add-text.png)
### Botón:
#### Archivos donde se carga ->  index.html, searchPage.html, loginPage.html, registerPage.html
![Header](/images/boton.png)
### Entrada desplegable:
#### Archivos donde se carga ->  searchPage.html
![Drop down input](/images/drop-down-input.png)
### Subir imágenes:
#### Archivos donde se carga ->  CreateRecipePage.html
![Subir imágenes](/images/get-image.png)
### Imagen:
#### Archivos donde se carga -> profile.html
![Image](/images/image.png)
### Texto horizontal con imagen:
#### Archivos donde se carga ->  index.html, resultsPage.html
![Texto horizontal](/images/image-text-horizontal.png)
### Texto vertical con imagen:
#### Archivos donde se carga ->  profile2.html
![Texto vertical con imagen](/images/image-title-vertical.png)
### Entrada numérica:
#### Archivos donde se carga ->  searchPage.html
![Entrada numérica](/images/Number-input.png)
### Barra deslizante:
#### Archivos donde se carga ->  searchPage.html
![Barra deslizante](/images/slider.png)
### Entrada de texto:
#### Archivos donde se carga -> searchPage.html, loginPage.html, registerPage.html
![Entrada de texto](/images/text-input1.png)
### Entrada de texto 2:
#### Archivos donde se carga ->  CreateRecipePage.html
![Entrada de texto 2](/images/Text-input2.png)


## Enlaces a Figma y Trello:
  - Figma: https://www.figma.com/design/bK7M1tboeV8ZKdchaRtuKr/Recetas?node-id=0-1&p=f&t=uPeROiFIFouw5bg3-0
  - Trello: https://trello.com/w/newfoods
