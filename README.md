## PEC 5  

**Datos personales**  
jorditosa  
Jordi Sanchez Torras  
https://github.com/jorditosa/PEC5   

---
## Comentarios

Para poder practicar me he tomado la molestia de crear una nueva aplicación para esta PEC.

**Refactoring**
Lo importante a comentar, es que he eliminado el componente **article-item**, y en su lugar lo he reemplazado por dos componentes que, a mi humilde entender, mejoran la calidad del código:

1.  He añadido un componente **Model**, donde he creado la clase con los datos básicos de cada artículo, entre los que se incluyen los que solicita el enunciado de esta PEC.
2.  Por otro lado, he generado un **Servicio** para bindear este modelo con el componente **article-list**, donde se renderizan los 4 artículos que quiero añadir, gracias a la función **getAll()** creada en el servicio.