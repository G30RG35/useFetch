# ¿Qué es useFetch?

`useFetch` es un hook de React que simplifica la realización de peticiones a APIs en tus componentes. Maneja tareas comunes como establecer estados de carga, administrar configuraciones de axios y el manejo de errores.

## Instalación

Este hook asume que tienes `useState` de React y `axios` instalado.

## Explicación

`useFetch` proporciona dos funciones:

- `makeRequest`: Esta función toma un objeto con opciones de configuración para tu petición a la API.

- `getRequest`: Esta función por defecto es _get_, la funcion toma un objeto con opciones de configuración para tu petició utilizando la instancia de axios.
- `postRequest`: Esta función por defecto es _post_, la funcion toma un objeto con opciones de configuración para tu petició utilizando la instancia de axios.
- `putRequest`: Esta función por defecto es _put_, la funcion toma un objeto con opciones de configuración para tu petició utilizando la instancia de axios.
- `deleteRequest`: Esta función por defecto es _delete_, la funcion toma un objeto con opciones de configuración para tu petició utilizando la instancia de axios.

- `loadingFetch`: Esta variable de estado indica si se está realizando una petición actualmente.

`makeRequest` acepta las siguientes opciones:

- `method`: Método HTTP (GET, POST, PUT, etc.).
- `url`: URL del punto final de la API.
- `data` (opcional): Objeto que contiene datos para peticiones POST, PUT o PATCH.
- `headers` (opcional): Cabeceras adicionales para la petición.

`makeRequest` maneja:

- Establecer el estado de carga antes y después de la petición.
- Registrar los parámetros de la petición para depurar.
- Manejo básico de errores con mensajes específicos para códigos de error comunes (400, 415, 500).
- Devolver el objeto de respuesta si es exitoso.

## Beneficios

- Manejo de peticiones a APIs más limpio y conciso en los componentes.
- Manejo de errores centralizado con mensajes informativos.
- Reducción de código repetitivo para tareas comunes.

## Notas adicionales

- Este es un ejemplo básico. Puedes personalizarlo aún más según tus necesidades específicas.
- Considera agregar soporte para códigos de error adicionales y mensajes de error personalizados.
- Es posible que desees implementar un manejo de datos más sofisticado basado en el formato de la respuesta.
