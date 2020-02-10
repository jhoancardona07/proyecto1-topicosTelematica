Documentación del Proyecto #1

Asignatura: Tópicos Especiales en Telemática

Profesor: Edwin Nelson Montoya Múnera

Autor: Jhoan Stiven Cardona Galeano


¿CUÁL ES LA PROBLEMÁTICA QUE SE QUIERE RESOLVER?
Durante el desarrollo de este proyecto se busca la creación de una aplicación web enfocada en el IoT,
que le permita a sus diferentes usuarios visualizar de una forma bastante interactiva los datos obtenidos 
sobre un(os) sensor(es). Todo esto mediante el proceso de recolección, procesamiento y visualización de los 
diversos datos, gracias al uso de un par de tecnologías modernas en el desarrollo web.


¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
* Los datos deben ser almacenados en vía API REST en una base de datos.
* Los datos almacenados en la base de datos, serán procesados y visualizados mediante una aplicación web conectada al Backend
  mediante una API REST.
* Registro periódico de datos de usuario, temperatura, humedad y GPS desde un dispositivo Arduino. (Simulados con Postman).
* El desarrollo del proyecto debe ser en LocalHost.
* Debe existir una autenticación de usuarios/servicios.

Nota: Las opciones de visualización y procesamiento de datos se dejan a la libertad del estudiante.


¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?



¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?
4.1 EN EL BACKEND?
El Backend fue realizado con NodeJS, utilizando frameworks bastante populares para configurar el servidor como Express,
dotenv, Cors y Moongose.
Además de todo esto se implementó la persistencia básica de los datos en MongoDB.

4.2 EN EL FRONTEND?
El desarrollo del Frontend se realizó con Angular.

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?
El proyecto cuenta con 2 servicios de API REST, uno que es consumido por los sensores y el otro por el frontend.
En el primer servicio de REST API se tiene la ruta para guardar nuevos datos obtenidos por el sensor en la BD y se
tiene la segunda ruta que sirve consultar todos los datos guardados dentro de esta BD. (Además existen otras rutas establecidas
para eliminar, actualizar y/o consultar un solo dato guardado en la BD).

Por la parte del segundo servicio de REST API se tienen las rutas para autenticar el registro y el login de los usuarios,
el cual es consumido principalmente por el frontend a la hora de ofrecer estos servicios.

¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?
A través del uso de tecnologías como lo son los JWT, que le permiten generar un token único a cada usuario para que este
pueda consumir las rutas privadas que requieran de una autorización, entonces a cada usuario cada vez que hace log-in se le
entrega su token para que lo pueda consumir y acceder a las diferentes rutas que lo requieren, y al momento de hacer un log-out
pierde dicho token.

¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?
7.1 POR DESCONOCIMIENTO DE LA TECNOLOGÍA?
Al inicio hubieron bastantes dificultades ya que aún no se dominaba enteramente la tecnología, a pesar de haber
trabajado con NodeJS para el proyecto final de telemática, aún habían bastantes temas que no se habían logrado
comprender en su totalidad. Además de todo esto jamás se había trabajado con un framework web moderno y mucho menos
con un framework con tantas funcionalidades como lo es Angular.

7.2 ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?
El uso de frameworks web modernos como Angular, además de que habían algunos temas como la conexión entre el backend y
el frontend al estar totalmente separados, y el uso de las REST API y los archivos JSON.

7.3 ¿QUÉ HABILIDADES DE DESARROLLO LE FALTAN PARA PODER TERMINAR EL PROYECTO?
Desarrollo con frameworks web modernos y el uso de MVC en la web, específicamente para tener un backend totalmente separado
del frontend y como poder integrar y comunicar ambos desarrollos.

7.4 ¿QUÉ OTRAS COSAS LE FALTÓ PARA PODER DESARROLLAR EL PROYECTO 1?
Por el momento ninguna.

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?
El uso de frameworks web modernos, aunque aún falta bastante para poder llegar a dominarlos a la perfección, se obtuvieron unos
conocimientos muy valiosos que sirven como base fundamental para continuar con dicho aprendizaje, además de poder aprender
a manejar y consumir las REST API, que desde antes de este proyecto era un conocimiento totalmente desconocido para el autor.

