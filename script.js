document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    const enviarBtn = document.getElementById('enviarBtn');
    const recibirBtn = document.getElementById('recibirBtn');
    const rastrearBtn = document.getElementById('rastrearBtn');
    const locationInfo = document.getElementById('locationInfo');

    function showEnviarForm() {
        mainContent.innerHTML = `
            <h2>Enviar Paquete</h2>
            <form id="enviarForm">
                <input type="text" placeholder="Nombre del remitente" required>
                <input type="text" placeholder="Dirección de origen" required>
                <input type="text" placeholder="Nombre del destinatario" required>
                <input type="text" placeholder="Dirección de destino" required>
                <select required>
                    <option value="">Seleccione tipo de paquete</option>
                    <option value="documento">Documento</option>
                    <option value="paquete_pequeno">Paquete Pequeño</option>
                    <option value="paquete_grande">Paquete Grande</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        `;

        document.getElementById('enviarForm').addEventListener('submit', function(e) {
            e.preventDefault();
            generateTicket();
        });
    }

    function showRecibirForm() {
        mainContent.innerHTML = `
            <h2>Recibir Paquete</h2>
            <form id="recibirForm">
                <input type="text" placeholder="Número de rastreo" required>
                <input type="text" placeholder="Nombre del receptor" required>
                <input type="text" placeholder="ID del receptor" required>
                <button type="submit">Confirmar Recepción</button>
            </form>
        `;

        document.getElementById('recibirForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Recepción confirmada. Gracias por usar Speedy Express.');
        });
    }

    function showRastrearForm() {
        mainContent.innerHTML = `
            <h2>Rastrear Paquete</h2>
            <form id="rastrearForm">
                <input type="text" placeholder="Número de rastreo" required>
                <button type="submit">Rastrear</button>
            </form>
        `;

        document.getElementById('rastrearForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Estado del paquete: En tránsito');
        });
    }

    function generateTicket() {
        const ticketNumber = Math.floor(100000 + Math.random() * 900000);
        mainContent.innerHTML += `
            <div id="ticket">
                <h3>Ticket de Envío</h3>
                <p><strong>Número de Rastreo:</strong> SE${ticketNumber}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
                <p>Gracias por usar Speedy Express</p>
                <a href="https://wa.link/bgzrez" target="_blank">Realizar Pago</a>
            </div>
        `;
    }

    enviarBtn.addEventListener('click', showEnviarForm);
    recibirBtn.addEventListener('click', showRecibirForm);
    rastrearBtn.addEventListener('click', showRastrearForm);

    // Geolocalización
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            locationInfo.textContent = `Tu ubicación: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
        });
    } else {
        locationInfo.textContent = "Geolocalización no disponible";
    }

    // Cargar la vista de envío por defecto
    showEnviarForm();
});