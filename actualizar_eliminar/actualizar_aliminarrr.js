//db.createCollection('user2')


/*db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Estados Unidos",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedree",
    apellido: "Gonzalezz",
    correo: "pedro.gonzalez@example.com",
    ciudad: "BoXD",
    país: "Estados Unidos",
    salario: 52000,
    edad: 22,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín",
    país: "Colombia",
    salario: 58000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    correo: "maria.lopez@example.com",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Brasil",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 100
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá XD",
    país: "Brasil",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín XD",
    país: "India",
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Colombia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    ciudad: "Medellín",
    país: "Italia",
    salario: 60000,
    edad: 28,
    altura: 195,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "Cali",
    país: "Alemania",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "XD",
    país: "Italia",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Pedro",
    apellido: "Gonzalez",
    correo: "pedro.gonzalez@example.com",
    ciudad: "Bogotá",
    país: "Chile",
    salario: 52000,
    edad: 35,
    altura: 170,
    peso: 160
});

db.user2.insertOne({
    nombre: "Ana",
    apellido: "Martinez",
    correo: "ana.martinez@example.com",
    ciudad: "Medellín",
    país: "Canadá",
    salario: 58000,
    edad: 28,
    altura: 165,
    peso: 140
});

db.user2.insertOne({
    nombre: "Carlos",
    apellido: "Gomez",
    correo: "carlos.gomez@example.com",
    ciudad: "Bogotá",
    país: "Australia",
    salario: 50000,
    edad: 30,
    altura: 175,
    peso: 150
});

db.user2.insertOne({
    nombre: "Maria",
    apellido: "Lopez",
    correo: "maria.lopez@example.com",
    ciudad: "Medellín XD",
    país: "Estados Unidos",
    salario: 60000,
    edad: 28,
    altura: 165,
    peso: 130
});

db.user2.insertOne({
    nombre: "Juan",
    apellido: "Martinez",
    correo: "juan.martinez@example.com",
    ciudad: "paris",
    país: "francia",
    salario: 55000,
    edad: 32,
    altura: 180,
    peso: 160
});

db.user2.insertOne({
  nombre: "Pedroo",
  apellido: "Gonzalez",
  correo: "pedro.gonzalez@example.com",
  ciudad: "elcairo",
  país: "España",
  salario: 52000,
  edad: 35,
  altura: 170,
  peso: 160
});
*/




 


//para eliminar a todos los que tengan 22 años
db.user2.deleteMany({edad:{$in:22}});
db.user2.deleteMany({edad:22});

//para actualizar un solo dato

db.user2.updateOne({nombre: "carlos"},{$set: {nomre: "pedro carlos"}})

//hola

//ejercicios de actualizar

// Incrementar el salario de todos los usuarios en un 10%.
db.usuarios.updateMany({}, { $mul: { salario: 1.1 } });

// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.usuarios.updateMany({ ciudad: "New York" }, { $set: { ciudad: "Los Ángeles" } });

// Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".
db.usuarios.updateOne({ nombre: "Juan", apellido: "Perez" }, { $set: { correo: "nuevo@correo.com" } });

// Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.
db.usuarios.updateOne({ correo: "ejemplo@correo.com" }, { $set: { edad: 35 } });

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.usuarios.updateMany({ pais: "Mexico" }, { $set: { pais: "Canada" } });

// Aumentar la altura de todos los usuarios en 5 centímetros.
db.usuarios.updateMany({}, { $inc: { altura: 5 } });

// Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".
db.usuarios.updateOne({ correo: "otro@ejemplo.com" }, { $set: { apellido: "González" } });

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.usuarios.updateOne({ nombre: "Maria" }, { $set: { peso: 140 } });

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.usuarios.updateMany({ pais: "Estados Unidos" }, { $mul: { salario: 1.15 } });

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.usuarios.updateOne({ nombre: "Pedro" }, { $set: { correo: "nuevo_correo@riwi.co" } });

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.usuarios.updateMany({ edad: { $lt: 30 } }, { $set: { edad: 30 } });

// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.usuarios.updateMany({ salario: { $lt: 3000 } }, { $mul: { salario: 1.2 } });

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.usuarios.updateMany({ ciudad: "Bogotá" }, { $set: { ciudad: "Medellín" } });

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.usuarios.updateMany({ salario: { $gt: 5000 } }, { $set: { pais: "Australia" } });

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.usuarios.updateMany({ edad: { $gt: 50 } }, { $inc: { edad: -5 } });

// Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.usuarios.updateMany({ peso: { $gt: 200 } }, { $set: { peso: 180 } });

// Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.usuarios.updateMany({ ciudad: "London" }, { $mul: { salario: 1.25 } });

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.usuarios.updateMany({ salario: { $gt: 4000 } }, { $set: { apellido: "Smith" } });

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.usuarios.updateMany({ nombre: /^A/ }, { $set: { correo: "nuevo@riwi.es" } });

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.usuarios.updateMany({ altura: { $lt: 160 } }, { $set: { ciudad: "París" } });



// Operaciones de Eliminación


// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.

    db.user2.deleteMany({salario:{$lt:2000}});

// Eliminar usuarios que tienen una edad menor que 25 años.
    db.user2.deleteMany({edad:{$lt:25}});  

// Borrar todos los usuarios que viven en "París".
    db.user2.deleteMany({pais:{$lte:"paris"}});  

// Eliminar usuarios que tienen un peso superior a 180 libras.
    db.user2.deleteMany({peso:{$gte: 180}});

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.
    db.user2.deleteMany({altura:{$lte:160}});

// Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
    db.user2.deleteMany({nombre:{$eq: "John"}, apellido:{$eq: "Doe"}});

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
    db.user2.deleteOne({correo:{$eq: "borrar@riwi.com"}});

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
    db.user2.deleteOne({correo:{$exists: false}});

// Eliminar usuarios que viven en "Tokyo".
    db.user2.deleteMany({ciudad:{$eq: "Tokyo"}});

// Borrar todos los usuarios que son menores de 18 años.
    db.user2.deleteMany({edad:{$lt: 18}});

// Eliminar usuarios que tienen un salario igual a 0.
    db.user2.deleteMany({salario:{$eq: 0}});

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
    db.user2.deleteMany({salario:{$eq: "New York"}, salario:{$lt: 5000}});

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
    db.user2.deleteMany({correo:{$in: "spam"}});

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.
    db.user2.deleteMany({ciudad:{$eq: "Bello"}});

// Eliminar todos los usuarios que tienen el apellido "González".
    db.user2.deleteMany({apellido:{$eq: "González"}});

// Borrar usuarios que tienen una edad superior a 70 años.
    db.user2.deleteMany({edad:{$gte: 70}});

// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
    db.user2.deleteMany({pais:{$eq: "Canadá"}, salario:{$lt: 4000}});

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
    db.user2.deleteMany({salario:{$gte:1000, $lte:2000}});

// Eliminar usuarios que tienen una edad igual a 30 años.
    db.user2.deleteMany({edad:{$eq: 30}});

// Borrar usuarios que tienen una altura superior a 190 centímetros.
    db.user2.deleteMany({altura:{$gt: 190}});
