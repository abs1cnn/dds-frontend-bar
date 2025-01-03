**PROYECTO: GESTIÓN DE PEDIDOS BAR  
**Contribuciones**: Abigail Canaan y Lanfranco Puchetta  
**Cátedra**: Desarrollo de Aplicaciones  
---

### **Vista Previa de la Aplicación**

#### Ventana de Inicio  
![image](https://github.com/user-attachments/assets/3f2bc9fb-fa7d-423d-923f-3b111bab808f)

#### Ventana de Empleados  
![image](https://github.com/user-attachments/assets/2933c257-054b-4a3d-8f77-f506a265baab)

---

### **Desarrollo**

La aplicación gestiona y administra un bar. Algunas características clave:  
- **Entidades gestionadas:**  
  - Empleados, Menú, Mesas disponibles/ocupadas y Pedidos.
  - entidad empleados, maneja correctamente el CRUD completo
- **Operaciones CRUD (ABMC):**  
  - Alta, Baja, Modificación y Consulta para todas las entidades necesarias.
  - Busqueda por consulta parcial.
- **Relaciones entre tablas:**  
  - Ejemplo: La entidad "Pedido" está vinculada al empleado que tomó la orden.  
- **Consultas:**  
  - Se realizan mediante queries.
- **Validaciones o Reglas de negocio:**  
  - Control de campos vacíos, fechas (los pedidos a futuro no son válidos), y cantidades (no menores a 0).  
  - Longitud de los campos de texto según corresponda.  
  - Empleados inactivos no pueden ser modificados.  
  - Si un empleado está inactivo, no puede ser asignado a un pedido.  
  - No se realiza borrado físico en la base de datos, solo baja lógica.
  - Los empleados atienden distintas mesas a la vez
  - Una mesa no puede poseer un encargado que no esta activo.
  - Un pedido puede ser registrado a encargo de un empleado inactivo, por si se paso el pedido.

---

### **Tecnologías Usadas**

| Tecnología  | Descripción                                                             |
|-------------|-------------------------------------------------------------------------|
| **REACT**   | Librería JavaScript para construir interfaces de usuario.              |
| **BOOTSTRAP** | Framework CSS para diseño y estilos responsivos.                    |
| **JAVASCRIPT** | Lenguaje de programación dinámico usado en frontend y backend.     |
| **POSTMAN** | Herramienta para pruebas y documentación de APIs.                     |
| **EXPRESS** | Framework backend ágil en Node.js.                                    |
| **CORS**    | Middleware para manejar solicitudes entre dominios.                   |
| **SQLITE**  | Base de datos ligera y embebida para almacenamiento.                  |
| **SEQUELIZE** | ORM para simplificar la interacción con bases de datos relacionales. |
| **NODE.JS** | Entorno de ejecución para JavaScript del lado del servidor.           |

---

### **Notas Importantes**

1. **Instalación y Configuración:**  
   - Descarga los archivos ZIP, tanto del **frontend** como del **backend**.  
   - Ejecuta `npm install` y luego `npm start`.  
   - Inicia primero el backend y luego el frontend.  

2. **Posibles Problemas:**  
   - Asegúrate de tener versiones compatibles de Node.js.  

3. **Pendientes:**  
   - Completar las verificaciones de campos para mayor robustez.
   - Extender el pedido con un posible detalle de pedido.
   - Pedido relacionarlo con una mesa.
   - Si una mesa se desocupa, deja de tener un empleado? segun reglas de negocio.
   - Agreagar mas notificaciones emergentes. Ya sea cuando se agrega un nuevo registro, se modifica o se le realiza la baja logica
   - Adjuntar diagrama de clases.
   - Recargar la pagina luego de hacer un alta-baja-modificacion

---

