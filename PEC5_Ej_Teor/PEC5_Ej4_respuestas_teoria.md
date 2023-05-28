## ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

Son directivas que incorpora Angular para el control de los formularios en aplicaciones Web.
FormControl se utiliza para controlar y validar un solo control de formulario, FormGroup agrupa varios FormControl relacionados y FormBuilder facilita la creación y configuración de FormControl y FormGroup de manera más concisa. Estas herramientas son parte del módulo @angular/forms de Angular y ayudan a gestionar y validar formularios en aplicaciones web.

1.  Un FormControl representa un solo control de formulario, como un campo de entrada de texto, un cuadro de selección o un botón de opción. Proporciona servicios para rastrear el estado y el valor de un control, así como para validar y cambiar su valor. Cada control de formulario en Angular se asocia con un objeto FormControl.
```
const controlWithValue = new FormControl('valor inicial', [Validators.required, Validators.minLength(5)]);
```

2.  Un FormGroup es un contenedor que agrupa múltiples FormControl en un formulario. Representa una colección de controles relacionados que pueden validarse y enviarse juntos. Un FormGroup se utiliza para controlar la validación y el estado general de un conjunto de controles.
```
const group = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});
```

3.  FormBuilder es una clase utilitaria en Angular que facilita la creación y gestión de instancias de FormControl y FormGroup. Proporciona métodos para definir y configurar controles y grupos de formularios de manera más sencilla y declarativa.
```
constructor(private formBuilder: FormBuilder) {}

// Crear un FormGroup utilizando FormBuilder
const group = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
});
```

---
## Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

Los validadores se utilizan en conjunto con el módulo @angular/forms de Angular y se aplican a los FormControl o FormGroup correspondientes. 

Un resumen de todos los principales:
```
<table>
  <thead>
    <tr>
      <th>Validador</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>required</td>
      <td>Valida que el campo tenga un valor ingresado.</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>Valida que la longitud del valor sea mayor o igual a un número mínimo especificado.</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>Valida que la longitud del valor sea menor o igual a un número máximo especificado.</td>
    </tr>
    <tr>
      <td>email</td>
      <td>Valida que el valor sea una dirección de correo electrónico válida.</td>
    </tr>
    <tr>
      <td>pattern</td>
      <td>Valida que el valor cumpla con un patrón de expresión regular especificado.</td>
    </tr>
    <tr>
      <td>min</td>
      <td>Valida que el valor numérico sea mayor o igual a un valor mínimo especificado.</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Valida que el valor numérico sea menor o igual a un valor máximo especificado.</td>
    </tr>
    <tr>
      <td>requiredTrue</td>
      <td>Valida que el valor del campo sea true. Se usa comúnmente para campos de tipo checkbox.</td>
    </tr>
    <tr>
      <td>compare
```

---
## ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

En resumen:
```
<table>
  <thead>
    <tr>
      <th>Estado</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pristine (Inmaculado)</td>
      <td>Un campo se encuentra en estado "pristine" si no ha sido modificado por el usuario. Es el estado inicial de un campo cuando se carga el formulario por primera vez.</td>
    </tr>
    <tr>
      <td>Dirty (Sucio)</td>
      <td>Un campo se encuentra en estado "dirty" si ha sido modificado por el usuario. Esto significa que se ha cambiado su valor o se ha interactuado con él de alguna manera.</td>
    </tr>
    <tr>
      <td>Touched (Tocado)</td>
      <td>Un campo se encuentra en estado "touched" si se ha enfocado y luego se ha perdido el enfoque. Es decir, el usuario ha interactuado con el campo y luego ha pasado a otro campo.</td>
    </tr>
  </tbody>
</table>
```