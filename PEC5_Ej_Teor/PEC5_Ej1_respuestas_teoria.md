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


---
## ¿Qué ventajas aportan los FormGroup en la composición de formularios?