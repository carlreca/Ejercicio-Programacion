// --- 1. Enumeración para Géneros de Películas ---
// Usamos 'enum' para definir un conjunto de constantes relacionadas.
// Por defecto, cada miembro se asocia a un valor numérico (0, 1, 2...).
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["ACCION"] = "Acci\u00F3n";
    GeneroPelicula["COMEDIA"] = "Comedia";
    GeneroPelicula["DRAMA"] = "Drama";
    GeneroPelicula["CIENCIA_FICCION"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["SUSPENSO"] = "Suspenso";
    GeneroPelicula["ANIMACION"] = "Animaci\u00F3n";
})(GeneroPelicula || (GeneroPelicula = {}));
// --- 2. Enumeración para Países de la Película ---
// Usamos un 'enum' diferente para el otro grupo de constantes.
var PaisOrigen;
(function (PaisOrigen) {
    PaisOrigen["USA"] = "Estados Unidos";
    PaisOrigen["MEXICO"] = "M\u00E9xico";
    PaisOrigen["ESPANA"] = "Espa\u00F1a";
    PaisOrigen["FRANCIA"] = "Francia";
    PaisOrigen["JAPON"] = "Jap\u00F3n";
    PaisOrigen["COREA_DEL_SUR"] = "Corea del Sur";
})(PaisOrigen || (PaisOrigen = {}));
// --- 4. Creación de Objetos y Uso de los Enums ---
var pelicula1 = {
    titulo: "El Último Samurai",
    genero: GeneroPelicula.ACCION, // Accediendo a la constante 'ACCION' del enum
    pais: PaisOrigen.USA // Accediendo a la constante 'USA' del enum
};
var pelicula2 = {
    titulo: "Amores Perros",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.MEXICO
};
var pelicula3 = {
    titulo: "Parásitos",
    genero: GeneroPelicula.SUSPENSO,
    pais: PaisOrigen.COREA_DEL_SUR
};
// Arreglo para almacenar todas las películas
var listadoPeliculas = [pelicula1, pelicula2, pelicula3];
// --- 5. Función para Mostrar los Datos ---
function mostrarListado(peliculas) {
    console.log("--- LISTADO DE PELÍCULAS Y SU CLASIFICACIÓN ---");
    console.log("----------------------------------------------");
    // Iteramos sobre el arreglo de películas
    peliculas.forEach(function (peli, index) {
        console.log("Pel\u00EDcula #".concat(index + 1, ": ").concat(peli.titulo));
        // Muestra el valor de la constante asociada al enum.
        console.log("  - G\u00E9nero: ".concat(peli.genero));
        console.log("  - Pa\u00EDs de Origen: ".concat(peli.pais));
        console.log("----------------------------------------------");
    });
}
// Ejecutar la función para mostrar los resultados
mostrarListado(listadoPeliculas);
// --- Explicación adicional (opcional, para demostrar el uso del enum) ---
console.log("\n*** Demostración de valores del Enum ***");
console.log("El valor de la constante DRAMA es: ".concat(GeneroPelicula.DRAMA));
console.log("El valor de la constante ESPANA es: ".concat(PaisOrigen.ESPANA));
