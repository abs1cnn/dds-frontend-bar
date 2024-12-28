........................................................................................
PROYECTO GESTION DE PEDIDOS BAR 
........................................................................................
CONTRIBUCIONES: ABIGAIL CANAAN Y LANDRANCO PUCHETTA
CATEDRA: DESARROLLO DE APLICACIONES
.......................................................................................
VENTANA DE INICIO
![image](https://github.com/user-attachments/assets/3f2bc9fb-fa7d-423d-923f-3b111bab808f)
VENTANA DE EMPLEADOS
![image](https://github.com/user-attachments/assets/2933c257-054b-4a3d-8f77-f506a265baab)
- CONTROL DE CAMPOS VACIOS, FECHAS (PEDIDO A FUTURO NO), CANTIDADES NOMENORES A 0. CAMPOS DE TEXTO LONGITUD SEGUN CORRESPONDA
- EMPLEADOS INACTIVOS, NO SE LOS PUEDE MODIFICAR
- SI UN EMPLEADO ESTA INACTIVO DE SUS RESPONSABILIDADES, NO PUEDE REGISTRARSE EN UN PEDIDO.
- NO SE REALIZA BORRADO DE LA BDS, REALIZA BAJA LOGICA.
- CONSULTA 

DESARROLLO
GESTION Y ADMINISTRACION DE UN BAR. NO SE CUENTA CON CARRUCEL DE PAGOS.
ENTIDADES QUE SE GESTIONAN: EMPLEADOS, MENU, MESAS DISPONIBLES/OCUPADAS Y PEDIDOS.
SE REALIZA EL ABMC (ALTA, BAJA, MODIFICACION Y CONSULTA) DE TODAS LAS ENTIDADES QUE LO REQUIERAN.
TABLAS VINCULADASCON OTRAS. EJEMPLO: ENTIDAD PEDIDO, SE REALCIONA CON EL EMPLEADO QUETOMO LA ORDEN.
CONSULTAS A TRAVEZ DE QUERYS.

TECNOLOGIAS USADAS
- REACT: Librería JavaScript para construir interfaces de usuario.
- BOOTSTRAP: Framework CSS para diseño y estilos responsivos.
- JAVASCRIPT: Lenguaje de programación dinámico utilizado tanto en frontend como backend.
- POSTMAN: Herramienta para pruebas y documentación de APIs.
- EXPRESS: Framework para desarrollo backend ágil en Node.js.
- CORS: Middleware para manejar solicitudes entre dominios.
- SQLITE: Base de datos ligera y embebida para almacenar información.
- SEQUELIZE: ORM que simplifica la interacción con bases de datos relacionales.
- NODE.JS: Entorno de ejecución para JavaScript del lado del servidor.

NOTAS
- DESCARGAR EL ARCHIVO ZIP, TANTO DEL FROT COMO EL BACK. REALIZAR NPM I Y NPM START. PRENDER BACK LUEGO FRONT.
- POSIBLE PROBLEMAS CON VERSIONES DE NODE.
- FALTA COMPLETAR VERIFICACIONES DE CAMPOS
