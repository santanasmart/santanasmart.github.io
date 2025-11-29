// mapsData será inyectado desde Jekyll en el layout de mapa individual
// Ejemplo: const mapsData = {{ site.data.maps | jsonify }};

function initMap(mapId) {
  if (!window.mapsData || !Array.isArray(window.mapsData)) {
    console.error("mapsData no está definido o no es un array");
    return;
  }

  const mapData = window.mapsData.find(m => m.id === mapId);
  if (!mapData) {
    console.error(`No se encontró el mapa con id: ${mapId}`);
    return;
  }

  // Crear mapa centrado
  const map = L.map('map').setView(mapData.center, mapData.zoom);

  // Capa base OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Añadir marcadores dinámicos
  mapData.markers.forEach(marker => {
    let popupContent = `<b>${marker.name}</b><br>${marker.popup || ''}`;

    if (marker.image) {
      popupContent += `<br><img src="${marker.image}" alt="${marker.name}" style="max-width:100%; border-radius:5px;">`;
    }

    if (marker.audio) {
      popupContent += `<br><audio controls src="${marker.audio}" style="width:100%;"></audio>`;
    }

    if (marker.video) {
      popupContent += `<br><video controls src="${marker.video}" width="250" style="border-radius:5px;"></video>`;
    }

    L.marker(marker.coords).addTo(map)
      .bindPopup(popupContent);
  });

  // Dibujar ruta si existe
  if (mapData.route && mapData.route.length > 1) {
    const routeLine = L.polyline(mapData.route, {
      color: 'blue',
      weight: 4,
      opacity: 0.7,
      dashArray: '10,5'
    }).addTo(map);

    // Ajustar vista para mostrar toda la ruta
    map.fitBounds(routeLine.getBounds());
  }
}

// Si quieres probar localmente:
// window.mapsData = {{ site.data.maps | jsonify }};
// initMap('ruta-urbana');
