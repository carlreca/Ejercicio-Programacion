// --- 1. Enumeración para Géneros de Películas ---
// Usamos 'enum' para definir un conjunto de constantes relacionadas.
// Por defecto, cada miembro se asocia a un valor numérico (0, 1, 2...).
enum GeneroPelicula {
    ACCION = "Acción",
    COMEDIA = "Comedia",
    DRAMA = "Drama",
    CIENCIA_FICCION = "Ciencia Ficción",
    SUSPENSO = "Suspenso",
    ANIMACION = "Animación"
}

// --- 2. Enumeración para Países de la Película ---
// Usamos un 'enum' diferente para el otro grupo de constantes.
enum PaisOrigen {
    USA = "Estados Unidos",
    MEXICO = "México",
    ESPANA = "España",
    FRANCIA = "Francia",
    JAPON = "Japón",
    COREA_DEL_SUR = "Corea del Sur"
}

// --- 3. Interfaz (Opcional, pero buena práctica) ---
// Define la estructura de los objetos que vamos a crear para asegurar el tipado.
interface Pelicula {
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisOrigen;
}

// --- 4. Creación de Objetos y Uso de los Enums ---
const pelicula1: Pelicula = {
    titulo: "El Último Samurai",
    genero: GeneroPelicula.ACCION, // Accediendo a la constante 'ACCION' del enum
    pais: PaisOrigen.USA // Accediendo a la constante 'USA' del enum
};

const pelicula2: Pelicula = {
    titulo: "Amores Perros",
    genero: GeneroPelicula.DRAMA,
    pais: PaisOrigen.MEXICO
};

const pelicula3: Pelicula = {
    titulo: "Parásitos",
    genero: GeneroPelicula.SUSPENSO,
    pais: PaisOrigen.COREA_DEL_SUR
};

// Arreglo para almacenar todas las películas
const listadoPeliculas: Pelicula[] = [pelicula1, pelicula2, pelicula3];


// --- 5. Función para Mostrar los Datos ---

function mostrarListado(peliculas: Pelicula[]): void {
    console.log("--- LISTADO DE PELÍCULAS Y SU CLASIFICACIÓN ---");
    console.log("----------------------------------------------");
    
    // Iteramos sobre el arreglo de películas
    peliculas.forEach((peli, index) => {
        console.log(`Película #${index + 1}: ${peli.titulo}`);
        
        // Muestra el valor de la constante asociada al enum.
        console.log(`  - Género: ${peli.genero}`); 
        console.log(`  - País de Origen: ${peli.pais}`);
        console.log("----------------------------------------------");
    });
}

// Ejecutar la función para mostrar los resultados
mostrarListado(listadoPeliculas);

// --- Explicación adicional (opcional, para demostrar el uso del enum) ---
console.log("\n*** Demostración de valores del Enum ***");
console.log(`El valor de la constante DRAMA es: ${GeneroPelicula.DRAMA}`);
console.log(`El valor de la constante ESPANA es: ${PaisOrigen.ESPANA}`);