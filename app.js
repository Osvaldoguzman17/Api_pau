console.log("Script app.js cargado"); // Verificación de que el archivo se está cargando

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

function fetchQuote() {
    console.log("Intentando obtener una cita..."); // Verificación de que se llama a la función

    fetch(API_URL)
        .then(response => {
            console.log("Respuesta recibida:", response); // Mostrar la respuesta en consola
            if (response.ok) {
                return response.json(); // Convertir la respuesta a JSON solo si es exitosa
            }
            throw new Error(`Error en la respuesta: ${response.status}`);
        })
        .then(data => {
            console.log("Datos obtenidos:", data); // Mostrar datos obtenidos en consola
            displayQuote(data);
        })
        .catch(error => {
            console.error('Error al obtener la cita:', error); // Manejar errores
        });
}

function displayQuote(quoteData) {
    const container = document.getElementById('quote-container');
    if (!container) {
        console.error('No se encontró el contenedor para mostrar la cita');
        return;
    }

    container.innerHTML = `
    <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>
  `;

    console.log("Cita mostrada correctamente");
}

// Llamar a la función para obtener y mostrar una cita
fetchQuote();
