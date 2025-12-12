const http = require('http');
const fs = require('fs');
const path = require('path');

// Función para parsear los datos del formulario (simulando un body-parser simple)
function parseFormData(data) {
    // El body-parser para formularios simples con POST se ve como: animal=nombre_del_animal
    const parts = data.split('=');
    if (parts.length === 2 && parts[0] === 'animal') {
        // Decodificar el URL (ej. si el usuario puso "perro bravo", se envía como "perro+bravo")
        return decodeURIComponent(parts[1].replace(/\+/g, ' '));
    }
    return null;
}

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // --- 1. Servir la página inicial (index.html) ---
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error interno del servidor');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // --- 2. Interceptar la solicitud POST del formulario ---
    else if (url === '/submit-animal' && method === 'POST') {
        const body = [];
        
        // Recibe los chunks de datos
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // Cuando la recepción de datos termina
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // Convertir el buffer a string
            const animalName = parseFormData(parsedBody); // Obtener el nombre del animal
            
            if (animalName) {
                // Leer la plantilla de resultado.html
                fs.readFile('resultado.html', 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        return res.end('Error al cargar la página de resultado.');
                    }
                    
                    // Sustituir el marcador de posición con el nombre real (El corazón del ejercicio)
                    const finalHtml = data.replace('[ANIMAL_PLACEHOLDER]', animalName);

                    // Devolver el resultado.html modificado al cliente
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(finalHtml);
                });

            } else {
                // Redirigir si no hay datos válidos (opcional)
                res.writeHead(302, { 'Location': '/' });
                res.end();
            }
        });
    } 
    
    // --- 3. Manejo de error 404 para otras rutas ---
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Página no encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});