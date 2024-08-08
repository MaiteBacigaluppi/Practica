document.addEventListener('DOMContentLoaded', () => {
    const excursiones = [
        {
            nombre: 'Excursión al Glaciar Martial',
            descripcion: 'Una caminata impresionante hacia el Glaciar Martial, con vistas espectaculares.',
            imagen: 'images/glaciar-martial.jpg'
        },
        {
            nombre: 'Tour por el Parque Nacional Tierra del Fuego',
            descripcion: 'Explora la flora y fauna única del Parque Nacional Tierra del Fuego.',
            imagen: 'images/parque-nacional.jpg'
        },
        {
            nombre: 'Visita al Lago Escondido',
            descripcion: 'Un recorrido escénico al hermoso Lago Escondido.',
            imagen: 'images/lago-escondido.jpg'
        },
        {
            nombre: 'Excursión a Bahía Lapataia',
            descripcion: 'Descubre la increíble Bahía Lapataia, el final de la Ruta Nacional 3.',
            imagen: 'images/bahia-lapataia.jpg'
        }
    ];

    const caminatas = [
        {
            nombre: 'Caminata al Cerro Guanaco',
            descripcion: 'Un desafiante ascenso al Cerro Guanaco con vistas panorámicas de Ushuaia.',
            imagen: 'images/cerro-guanaco.jpg'
        },
        {
            nombre: 'Sendero Costero',
            descripcion: 'Un relajante paseo a lo largo de la costa del canal Beagle.',
            imagen: 'images/sendero-costero.jpg'
        },
        {
            nombre: 'Trekking a la Laguna Esmeralda',
            descripcion: 'Una caminata espectacular hacia la hermosa Laguna Esmeralda.',
            imagen: 'images/laguna-esmeralda.jpg'
        },
        {
            nombre: 'Caminata en el Valle de los Lobos',
            descripcion: 'Explora el Valle de los Lobos, conocido por su belleza natural y vida silvestre.',
            imagen: 'images/valle-de-los-lobos.jpg'
        }
    ];

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementsByClassName('close')[0];

    function openModal(item) {
        console.log(`Abriendo modal para: ${item.nombre}`);
        modalTitle.textContent = item.nombre;
        modalDescription.textContent = item.descripcion;
        modalImage.src = item.imagen;
        modal.style.display = 'block';
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = item.imagen;
        img.alt = item.nombre;

        const content = document.createElement('div');
        content.className = 'card-content';

        const title = document.createElement('h3');
        title.textContent = item.nombre;

        const description = document.createElement('p');
        description.textContent = item.descripcion;

        const button = document.createElement('button');
        button.textContent = 'Más información';
        button.onclick = () => openModal(item);

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(button);
        card.appendChild(img);
        card.appendChild(content);

        return card;
    }

    const excursionList = document.getElementById('excursion-list');
    excursiones.forEach(excursion => {
        const card = createCard(excursion);
        excursionList.appendChild(card);
    });

    const caminataList = document.getElementById('caminata-list');
    caminatas.forEach(caminata => {
        const card = createCard(caminata);
        caminataList.appendChild(card);
    });
});
