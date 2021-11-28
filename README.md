# Descripción

FancyCrud es una librería pensada para la creación de formularios y presentación de datos, en tablas utilizando Quasar Framework, gestionando el CRUD sobre registros. 

La librería se compone de 3 elementos principales:

- Formularios
- Tablas
- Filtros

# Instalación

```jsx
npm install fancy-crud
```

# Configuración

```jsx
//main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import axios from 'axios'
import quasarOptions from '@/plugins/quasar'
import FancyCrud from 'fancy-crud'

import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, quasarOptions)
app.use(FancyCrud, {
  axios,
  Notify
})

app.mount('#app')
```

# FancyForm

Este componente permite la creación de formularios de manera dinámica, estableciendo los campos del formulario en un objeto javascript. El FancyForm utiliza los Form Components proporcionados por [Quasar](https://quasar.dev/vue-components/form-components) que puedes encontrar en su documentación oficial, el tipo de campo es especificado a través de la llave inputType y estos campos pueden utilizar la mayoría de las propiedades que se detallen en la documentación de Quasar, a continuación se listan los tipos de inputs disponibles y el componente de Quasar que utiliza:

## inputTypes

[ ](https://www.notion.so/1b614af5d6b0497ea8b15804d883777e)

Para comprender de mejor su forma de uso, vamos a simular la comunicación con un API que gestiona el CRUD sobre géneros musicales, artistas, álbumes y canciones.

Comencemos creando un componente que contenga un formulario, para ingresar nuevos géneros musicales. El API necesita que le enviemos los siguientes valores:

```jsx
{
	"name": "NOMBRE DEL NUEVO GÉNERO MUSICAL",
	"is_active": "ESTATUS CON EL QUE SE VA A CREAR EL REGISTRO [true | false]"
}
```

De tal manera que nuestro componente quedará similar al siguiente:

```jsx
// GenresForm.vue
<template>
  <f-form v-model="form.fields" v-bind="form.settings"></f-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({
      fields: {
        name: {
          label: 'Nombre'
        },
        is_active: {
          label: 'Estatus',
          modelValue: true,
          inputType: 'checkbox'
        },
      },
      settings: {
        url: 'genres/'
      }
    })

    return {
      form
    }
  }
})

</script>
```

Para entender mejor el componente vamos a describir la estructura del objeto que utiliza el FancyForm

```jsx
const form = reactive({
/*`fields`, esta es la llave donde deben ir todos
 los campos del formulario a generar.
 Cada llave dentro de fields corresponde a la
 llave que se enviará en la petición POST, PUT
 or PATCH. De manera que la petición POST de
 este formulario, sería la siguiente:
 { name: 'VALOR INGRESADO', is_active: true }*/
  fields: {

 /*Observe que en la llave name no se indica
 el inputType, así como tampoco se indica
 el modelValue. Esto es porque son llaves
 predeterminadas, el inputType por defecto
 de un field es `textfield` y para el
 el modelValue es `null`*/
    name: {
      label: 'Nombre'
  },

/*En este field especificamos el modelValue
	esto indica que este campo se mostrara
	con ese valor por defecto en el formulario
	y también se indica que este campo tiene
	que mostrarse como un checkbox de Quasar*/
    is_active: {
      label: 'Estatus',
      modelValue: true,
      inputType: 'checkbox'
    },
  },
  settings: {
/*Indica el endpoint al que debe enviar la petición.
	Considere que debe haber indicado el baseUrl en
	las configuraciones del axios, de otra manera,
	debe indicar el dominio y el endpoint al que 
	va apuntar la petición.*/
    url: 'genres/'
  }
})
```

## Props

### **modelValue**

`type: Object`

`required: true`

Los campos especificados en la llave `fields`, que serán utilizados para generar el formulario.

Ejemplo:

```jsx
fields: {
	campo1: {
		label: 'Titulo del campo 1'
	},
	campo1: {
		label: 'Titulo del campo 2'
	}
}
```

### **mode**

`type: String`

`required: false`

`Valor predeterminado: 'CREATE_MODE'`

Establece el tipo de petición que realizará el formulario. `'CREATE_MODE'` para realizar una petición `POST` y ``UPDATE_MODE`` para realizar una petición `PATCH`.

Los dos modos se pueden importar directamente desde el paquete de `fancy-crud` el siguiente ejemplo demuestra como realizar dicha acción:

`import { CREATE_MODE, UPDATE_MODE } from "fancy-crud"`

### **url**

`type: String`

`required: true`

URL que utilizará el formulario para enviar los datos. En el caso de que no se halla indicado el baseUrl en el axios config, deberá indicar protocolo HTTP seguido del dominio donde realizará la petición.

Ejemplo:

```jsx
settings: {
	url: 'albums/'
}

// En caso de no haber indicado el baseUrl en el axios config
{
	url: 'https://example.com/albums'
}
```

### **record**

`type: Object`

`required: false`

`Valor predeterminado: {}`

Objeto que se utilizará para establecer los valores por defecto en el formulario, en caso de que el formulario se establezca en modo de actualización. Entienda este campo como el registro que se encuentra almacenado en la base de datos y que va a proceder a editar.

Ejemplo:

```jsx
record: {
	id: 23,
	name: 'Pop',
	is_active: true,
	created_at: '2021-11-02',
	updated_at: '2021-11-05'
}
```

### **lookupField**

`type: String`

`required: false`

`Valor predeterminado: 'id'`

Es el campo que se encuentra en el objeto del props `record` y se utilizará para para agregar el identificador en el endpoint.

Ejemplo:

```jsx
/*Considere el siguiente objeto que obtuve desde la base de datos,
	el valor predeterminado del lookupField es `id`, entonces la url
	que se va a generar a partir de la que se encuentra establecida
	en el `settings` es la siguiente: 'genres/23/'

record: {
	id: 23,
	name: 'Pop',
	is_active: true,
	created_at: '2021-11-02',
	updated_at: '2021-11-05'
}
*/

settings: {
	url: 'genres/'
}
```

### **titles**

`type: Object`

`required: false`

`Valor predeterminado:`

```jsx
settings: {
	titles: {
		create: 'Crear elemento',
		update: 'Actualizar elemento',
		hidden: false
	}
}
```

Ejemplo:

```jsx
settings: {
	titles: {
		create: 'Crear album',
		update: 'Actualizar album'
	}
}
```

### buttons

`type: Object`

`required: false`

`Valor predeterminado:`

```jsx
{
	main: {
    createLabel: 'Crear nuevo',
    updateLabel: 'Actualizar registro',
    color: 'primary',
    fullwidth: false,
    hidden: false,
    icon: null
	},
	aux: {
		createLabel: 'Crear nuevo',
    updateLabel: 'Actualizar registro',
    color: 'primary',
    fullwidth: false,
    hidden: false,
    icon: null
	},
	invertedPosition: boolean,
	align: string,
	class: {}
}
```

### messages

`type: Object`

`required: false`

`Valor predeterminado:`

```jsx
{
  create: {
    position: 'top-right',
    message: 'Elemento creado con éxito',
    color: 'positive',
    display: true,
  },
  update: {
    position: 'top-right',
    message: 'Elemento actualizado con éxito',
    color: 'positive',
    display: true,
  },
  delete: {
    position: 'top-right',
    message: 'Elemento eliminado con éxito',
    color: 'positive',
    display: true,
  },
  error: {
    position: 'top-right',
    message: 'Error inesperado, contacte con soporte técnico',
    color: 'negative',
    display: true,
    ...messages.error
  }
}
```

Este objeto realiza la configuración para las notificaciones que se lanzan al crear un nuevo registro, actualizar un registro existente, eliminar un registro o cuando sucede  un error.

## Slots

### form-header

Sobreescribe la cabecera del formulario. Útil cuando se requiere utilizar encabezados más elaborados, si lo único que necesita es cambiar el texto del encabezado, se recomienda utilizar la propiedad `titles`

**Scope**

`title` se define dependiendo del modo en el que se encuentra el formulario, ya sea `CREATE_MODE` o `UPDATE_MODE`.

Ejemplo de uso del slot `form-header`

```jsx
// Utilizando el scope `title`, de esta manera unicamente
// cambiamos la etiqueta del titulo
<f-form v-model="form.fields" v-bind="form.settings">
  <template v-slot:form-header="{ title }">
    <h5>{{ title }}</h5>
  </template>
</f-form>

// Utilizando el slot, pero sin hacer uso del scope `title`
<f-form v-model="form.fields" v-bind="form.settings">
  <template v-slot:form-header="{ title }">
    <h3>Cambiando el titulo por un texto diferente</h3>
  </template>
</f-form>
```

### form-footer

Este slot nos provee de la habilidad para sobreescribir la sección del formulario donde se encuentran los botones.

**Scope**

`buttons`: Este scope nos devuelve un objeto que contiene las llaves `main` y `aux` que son los dos botones por defecto que tiene el formulario. La estructura de estos botones es la misma que se maneja para la propiedad `buttons`.

`on`: contiene un objeto con dos funciones, `triggerCreate` y `triggerUpdate`.  Puede utilizar cualquiera de estas dos funciones en el evento click del botón.

### before-[field]

Tenemos disponible un slot por cada campo de nuestro formulario, este slot se ubica, antes de cada campo.

### after-[field]

Este slot es igual que el slot `before-[field]`, pero con la diferencia de que se ubica, después de cada campo
