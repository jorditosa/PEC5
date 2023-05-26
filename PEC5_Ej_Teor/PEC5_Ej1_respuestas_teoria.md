## ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Los template-driven son, tal cual el nombre indica, una plantilla que conecta o "bindea" los datos entre componentes, conduciendo la lógica de los datos via templates.
En estas templates, es en el mismo HTML donde se hacen las validaciones y los datos introducidos en el formulario se enlazan con las directivas de Angular, como ngModel.
Este enfoque es perfecto para formularios sencillos y rápidosde implementar, pero se vuelve menos flexible para casos más complejos.

Por otro lado, los reactive forms, proporcionan las validaciones en la lógica de los componentes Typescript, donde los cambios en los inputs se manejan de manera reactiva mediante "observables".
Se adaptan mejor para formularios más complejos y personalizados.

En definitiva, los formularios driven se basan en el enlace de datos unidireccional y declarativo del template, mientras que los formularios reactivos utilizan un enfoque más programático y reactividad basada en modelos. 

---
## ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

La principal función de las dos directivas es trabajar como enlaces de los datos recibidos en los formularios.

**ngModel** permite establecer un enlace de datos bidireccional entre un elemento de formulario HTML y una propiedad en el componente de Angular.
Se utiliza principalmente para capturar y actualizar el valor de un campo de entrada (input), select o textarea en el componente.
Esta directiva se enlaza una propiedad del componente al valor del campo de entrada y cualquier cambio en el campo actualiza automáticamente la propiedad y viceversa.

**ngModelChange** se dispara cuando cambia el valor de un campo de entrada que está vinculado mediante ngModel.
Se utiliza para detectar y reaccionar a los cambios en el valor del campo.
Su sintaxis básica sería:  
```
(ngModelChange)="nombreMetodo($event)"
```

---
## ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

Existe los estados en el **tracking Form** y los **tracking Controls**.

1.  El Track form state se aplica la clase **ng-submitted** al formulario una vez se hace el submit.

2.  Y por otro lado, los track controls son utilizados añadiendo la directiva **ngModel** a cada elemento que debe ser controlado.
Una buena utilidad es utilizar estas clases para cambiar los estilos de cada elemento con CSS en función de su estado.
También pueden controlarse con ngModelGroup, formControl y formGroup.

```
<table>
<thead>
<tr>
<th align="left">States</th>
<th align="left">Class if true</th>
<th align="left">Class if false</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">The control has been visited.</td>
<td align="left"><code>ng-touched</code></td>
<td align="left"><code>ng-untouched</code></td>
</tr>
<tr>
<td align="left">The control's value has changed.</td>
<td align="left"><code>ng-dirty</code></td>
<td align="left"><code>ng-pristine</code></td>
</tr>
<tr>
<td align="left">The control's value is valid.</td>
<td align="left"><code>ng-valid</code></td>
<td align="left"><code>ng-invalid</code></td>
</tr>
</tbody>
</table>
```

*   Pristine: Un control se considera prístino cuando no ha sido modificado por el usuario. Es el estado inicial de un control cuando el formulario se carga por primera vez.

*   Dirty: Un control se considera sucio cuando ha sido modificado por el usuario. Este estado indica que el valor del control ha cambiado desde que se cargó el formulario.

*   Touched: Un control se considera tocado cuando el usuario ha interactuado con él, por ejemplo, haciendo clic en él o modificando su valor. Es útil para mostrar mensajes de validación solo después de que el usuario haya interactuado con el control.

*   Untouched: Un control se considera intocado cuando el usuario no ha interactuado con él. Es el estado inicial de un control cuando el formulario se carga por primera vez.

*   Valid: Un control se considera válido cuando cumple con todas las validaciones definidas para él. Esto incluye tanto las validaciones incorporadas como las validaciones personalizadas definidas por el usuario.

*   Invalid: Un control se considera inválido cuando no cumple con alguna de las validaciones definidas para él.

---
## ¿Qué ventajas aportan los FormGroup en la composición de formularios?

Los FormGroup son una forma de agrupar y gestionar un conjunto de formularios y controles relacionados que aportan:

1.  Organización y estructura: Los **FormGroup** proporcionan una manera estructurada de organizar los controles y formularios relacionados. Puedes agrupar los controles en categorías lógicas y anidar **FormGroup** dentro de otros **FormGroup** para crear una estructura jerárquica.

2.  Validación de formularios: Los **FormGroup** permiten aplicar reglas de validación a nivel de grupo. Puedes agregar validadores personalizados o utilizar los validadores predefinidos de Angular para validar el estado de los controles en conjunto. Esto facilita la validación de formularios complejos con reglas de validación interdependientes.

3.  Control de estado: Los **FormGroup** mantienen un estado propio que refleja el estado de los controles que contienen. Puedes acceder al estado general del grupo para comprobar si está válido, inválido, tocado, etc. Esto facilita el control del estado general del formulario y la toma de decisiones basada en ese estado.

4.  Acceso a los valores: Los **FormGroup** permiten acceder a los valores de los controles contenidos de forma sencilla. Puedes obtener los valores de todos los controles en el grupo o acceder a un control específico mediante su nombre.

5.  Integración con directivas de formulario: Los **FormGroup** se integran de manera transparente con otras directivas de formulario de Angular, como ngModel, ngModelGroup, formControl, etc. Esto significa que puedes utilizar las directivas y características de Angular para trabajar con los controles dentro del grupo de manera coherente.