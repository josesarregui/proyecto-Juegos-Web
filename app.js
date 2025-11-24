
// --- 1. Base de datos de palabras (ACTUALIZADA) ---
const TEMAS = {
    objetos: {
        nombre: "Objetos (Argentina)",
        palabras: [
            "Mate", "Bombilla", "Pava eléctrica", "Termo", "Sifón de soda", 
            "Parrilla", "Asado", "Choripán", "Empanada", "Alfajor", 
            "Dulce de leche", "Fernet", "Colectivo", "Tarjeta SUBE", "DNI", 
            "Birome", "Cuaderno", "Mochila", "Celular", "Cargador", 
            "Zapatilla (Enchufe)", "Alpargata", "Boleadora", "Facón", "Poncho", 
            "Escarapela", "Obelisco", "Billete de mil", "Cacerola", "Repasador",
            "Milanesa", "Sanguche de miga", "Medialuna", "Locro", "Fainá",
            "Polenta", "Pastelitos", "Mandarina", "Soda", "Vino en caja",
            "Subte", "Remís", "Kiosco", "Góndola", "Changuito",
            "Pelopincho", "Reposera", "Sombrilla", "Espiral (Mosquitos)", "Ventilador",
            "Secador de piso", "Trapo de piso", "Balde", "Broche de ropa", "Tender",
            "Guardapolvo", "Cartuchera", "Figuritas", "Camiseta de fútbol", "Pelota de trapo"
        ]
    },
    futbol: {
        nombre: "Fútbol",
        subcategorias: {
            jugadores: {
                nombre: "Jugadores",
                palabras: [
                    "Lionel Messi", "Diego Maradona", "Mario Kempes", "Gabriel Batistuta", "Juan Román Riquelme", 
                    "Kun Agüero", "Di María", "Julián Álvarez", "Dibu Martínez", "Enzo Fernández", 
                    "Pato Fillol", "Daniel Passarella", "Ruggeri", "Caniggia", "Verón", 
                    "Martín Palermo", "Burrito Ortega", "Carlos Tevez", "Mascherano", "Zanetti",
                    "Pelé", "Ronaldo Nazário", "Ronaldinho", "Neymar", "Cristiano Ronaldo", 
                    "Johan Cruyff", "Zinedine Zidane", "Franz Beckenbauer", "Michel Platini", "Marco van Basten",
                    "Paolo Maldini", "Gianluigi Buffon", "Andrés Iniesta", "Xavi Hernández", "Sergio Ramos",
                    "Kylian Mbappé", "Erling Haaland", "Robert Lewandowski", "Luka Modrić", "Kevin De Bruyne",
                    "Mohamed Salah", "Zlatan Ibrahimović", "Luis Suárez", "Thierry Henry", "David Beckham"
                ]
            },
            equipos: {
                nombre: "Equipos de Fútbol",
                palabras: [
                    // Argentina
                    "River Plate", "Boca Juniors", "Independiente", "Racing Club", "San Lorenzo", 
                    "Vélez Sarsfield", "Estudiantes LP", "Gimnasia LP", "Huracán", "Rosario Central", 
                    "Newell's Old Boys", "Talleres de Córdoba", "Belgrano", "Instituto", "Colón", 
                    "Unión", "Lanús", "Banfield", "Argentinos Juniors", "Ferro Carril Oeste", 
                    "Platense", "Chacarita Juniors", "Atlanta", "Tigre", "Defensa y Justicia", 
                    "Godoy Cruz", "Atlético Tucumán", "San Martín de Tucumán", "Quilmes", "All Boys", 
                    "Nueva Chicago", "Deportivo Morón", "Almirante Brown",
                    // Brasil
                    "Flamengo", "Palmeiras", "Santos", "São Paulo", "Corinthians", "Gremio", 
                    "Cruzeiro", "Inter de Porto Alegre", "Fluminense", "Vasco da Gama",
                    // Resto Sudamérica
                    "Peñarol (URU)", "Nacional (URU)", "Colo-Colo (CHI)", "U de Chile", "U Católica (CHI)", 
                    "Olimpia (PAR)", "Cerro Porteño (PAR)", "Alianza Lima (PER)", "Universitario (PER)", "Atlético Nacional (COL)",
                    // Europa
                    "Real Madrid", "FC Barcelona", "Atlético de Madrid", "Sevilla", "Valencia",
                    "Manchester City", "Manchester United", "Liverpool", "Arsenal", "Chelsea", "Tottenham", 
                    "Juventus", "AC Milan", "Inter de Milán", "Napoli", "AS Roma", 
                    "Bayern Múnich", "Borussia Dortmund", "Bayer Leverkusen", 
                    "PSG", "Olympique de Marsella", "Mónaco", "Lyon",
                    "Ajax", "PSV", "Feyenoord", "Benfica", "Porto", "Sporting Lisboa", 
                    "Celtic", "Rangers", "Galatasaray", "Fenerbahçe", "Olympiacos",
                    // Resto del Mundo
                    "Zenit", "CSKA Moscú", "Spartak Moscú", "Shakhtar Donetsk", "Dinamo Kiev", "Al-Nassr", "Inter Miami"
                ]
            }
        }
    },
    animales: {
        nombre: "Animales",
        subcategorias: {
            domesticos: {
                nombre: "Domésticos y Granja",
                palabras: [
                    "Perro", "Gato", "Hámster", "Conejo", "Loro", "Canario", "Pez Dorado", 
                    "Tortuga de tierra", "Cobaya", "Hurón", "Caballo", "Vaca", "Cerdo", 
                    "Oveja", "Cabra", "Gallina", "Pato", "Ganso", "Pavo"
                ]
            },
            salvajes: {
                nombre: "Salvajes y Exóticos",
                palabras: [
                    "León", "Tigre", "Elefante", "Jirafa", "Hipopótamo", "Rinoceronte", 
                    "Oso Polar", "Oso Pardo", "Panda", "Koala", "Canguro", "Gorila", 
                    "Chimpancé", "Mono Tití", "Lobo", "Zorro", "Hiena", "Guepardo", 
                    "Leopardo", "Cebra", "Búfalo", "Alce", "Ciervo", "Cocodrilo", 
                    "Serpiente", "Águila", "Cóndor", "Tiburón", "Ballena", "Delfín", 
                    "Orca", "Pingüino", "Foca", "Murciélago", "Camello"
                ]
            }
        }
    }
};

const UBICACIONES = {
    clasicas: {
        nombre: "Clásicas",
        palabras: [
            "Playa", "Avión", "Banco", "Circo", "Hospital", "Cine", "Restaurante",
            "Supermercado", "Teatro", "Escuela", "Fiesta", "Gimnasio", "Biblioteca",
            "Hotel", "Museo", "Estación de Tren", "Estación de Policía", "Parque",
            "Zoológico", "Spa", "Estadio", "Casino", "Boliche", "Centro Comercial",
            "Universidad", "Iglesia", "Oficina", "Granja", "Crucero", "Peluquería",
            "Taller Mecánico", "Cementerio", "Embajada", "Concierto", "Bodega", "Comisaría",
            "Estación de Bomberos", "Desierto", "Montaña", "Bar", "Fábrica", "Camping", "Tribunal", "Prisión"
        ]
    },
    fantasia: {
        nombre: "Fantasía y Ficción",
        palabras: [
            "Estación Espacial", "Hogwarts", "Submarino", "Base Secreta",
            "Castillo Medieval", "Narnia", "Nave Espacial", "Laboratorio Secreto",
            "Casa Embrujada", "Bosque Encantado", "Barco Pirata", "Isla Desierta",
            "Atlantis", "Guarida del Dragón", "Mundo Post-Apocalíptico",
            "Fondo del Mar", "La Matrix", "País de las Maravillas"
        ]
    }
};


// Listas de colores
const COLORES_CARTA_FUERTE = ['#FFD60A', '#00A6FB', '#FF595E', '#e83e8c', '#8338EC', '#00C49A'];
const COLORES_CARTA_PALIDO = ['#FFFBEB', '#E6F6FF', '#FFF0F1', '#FDECF4', '#F3EBFF', '#E6FAF5'];

// --- 2. Constantes de Límites ---
const MAX_CATEGORIAS = 5;
const MAX_PALABRAS = 150;
const MAX_CHAR_PALABRA = 30;
const MAX_JUGADORES = 20;

// --- 3. Variables de Estado del Juego ---
let totalJugadores = 0, impostores = [], tripulantes = [], palabraSecreta = "", jugadorActual = 1;
let modoEdicion = null; 
let juegoActual = null;

// --- 4. Obtener Elementos del HTML ---
// Pantalla Selector de Juegos
const pantallaSelectorJuegos = document.getElementById('pantallaSelectorJuegos');
const botonJugarImpostor = document.getElementById('botonJugarImpostor');
const botonJugarEspia = document.getElementById('botonJugarEspia');

// Pantalla de Menú IMPOSTOR
const pantallaMenuImpostor = document.getElementById('pantallaMenuImpostor');
// (CORREGIDO) La variable ahora coincide con el ID del HTML
const botonJugarLocalImpostor = document.getElementById('botonJugarLocalImpostor'); 
const botonGestionarCategorias = document.getElementById('botonGestionarCategorias');
const botonVolverSelector = document.getElementById('botonVolverSelector');
const botonComoJugarImpostor = document.getElementById('botonComoJugarImpostor');

// Pantalla de Menú ESPIA
const pantallaMenuEspia = document.getElementById('pantallaMenuEspia');
const botonJugarLocalEspia = document.getElementById('botonJugarLocalEspia');
const botonComoJugarEspia = document.getElementById('botonComoJugarEspia');
const botonVolverSelectorEspia = document.getElementById('botonVolverSelectorEspia');

// Pantalla de Configuración
const pantallaConfig = document.getElementById('pantallaConfig');
const tituloConfig = document.getElementById('tituloConfig');
const labelImpostores = document.getElementById('labelImpostores');
const labelTematica = document.getElementById('labelTematica');
// (CORREGIDO) Eliminamos la variable del botón borrado
// const botonGestionarDesdeConfig = document.getElementById('botonGestionarDesdeConfig');
const inputTotalJugadores = document.getElementById('totalJugadores');
const inputNumImpostores = document.getElementById('numImpostores');
const selectTematica = document.getElementById('selectTematica');
const divSubTematica = document.getElementById('divSubTematica');
const selectSubTematica = document.getElementById('selectSubTematica');
const botonComenzar = document.getElementById('botonComenzar');
const botonVolverMenu = document.getElementById('botonVolverMenu');
const mensajeError = document.getElementById('mensajeError');

// Pantalla Gestionar Categorías
const pantallaGestionar = document.getElementById('pantallaGestionar');
const botonIrACrear = document.getElementById('botonIrACrear');
const listaCategoriasPropias = document.getElementById('listaCategoriasPropias');
const botonVolverMenuGestionar = document.getElementById('botonVolverMenuGestionar');

// Pantalla Crear/Editar Categoría
const pantallaCrearCategoria = document.getElementById('pantallaCrearCategoria');
const tituloCrearEditar = document.getElementById('tituloCrearEditar');
const inputNombreCategoria = document.getElementById('inputNombreCategoria');
const textareaPalabras = document.getElementById('textareaPalabras');
const conteoPalabras = document.getElementById('conteoPalabras');
const botonGuardarCategoria = document.getElementById('botonGuardarCategoria');
const botonVolverGestionar = document.getElementById('botonVolverGestionar');
const mensajeCategoria = document.getElementById('mensajeCategoria');

// Pantallas de Juego
const pantallaJuego = document.getElementById('pantallaJuego');
const carta = document.getElementById('carta');
const cartaTapada = document.getElementById('cartaTapada');
const cartaRevelada = document.getElementById('cartaRevelada');
const textoRol = document.getElementById('textoRol');
const textoPalabra = document.getElementById('textoPalabra');
const botonSiguiente = document.getElementById('botonSiguiente');
const pantallaInicioRonda = document.getElementById('pantallaInicioRonda');
const textoJugadorInicial = document.getElementById('textoJugadorInicial');
const botonFinalizar = document.getElementById('botonFinalizar');
const pantallaFinal = document.getElementById('pantallaFinal');
const palabraFinal = document.getElementById('palabraFinal');
const impostoresFinal = document.getElementById('impostoresFinal');
const botonJugarNuevo = document.getElementById('botonJugarNuevo');

// Elementos del Modal
const overlayModalImpostor = document.getElementById('overlayModalImpostor');
const overlayModalEspia = document.getElementById('overlayModalEspia');
const botonesCerrarModal = document.querySelectorAll('.botonCerrarModal');

// --- 5. Event Listeners ---

// Listener de Carga
document.addEventListener('DOMContentLoaded', () => {
    // No hacemos nada al cargar
});

// Listeners del Selector de Juegos
botonJugarImpostor.addEventListener('click', () => {
    juegoActual = "impostor"; 
    cambiarPantalla(pantallaMenuImpostor, pantallaSelectorJuegos);
});
botonJugarEspia.addEventListener('click', () => {
    juegoActual = "espia"; 
    cambiarPantalla(pantallaMenuEspia, pantallaSelectorJuegos);
});

// Listeners del Menú Impostor
// (CORREGIDO) El listener ahora usa la variable correcta
botonJugarLocalImpostor.addEventListener('click', () => prepararPantallaConfig("impostor"));
botonGestionarCategorias.addEventListener('click', mostrarPantallaGestionar);
botonVolverSelector.addEventListener('click', () => cambiarPantalla(pantallaSelectorJuegos, pantallaMenuImpostor));
botonComoJugarImpostor.addEventListener('click', () => overlayModalImpostor.classList.remove('oculto'));

// Listeners del Menú Espía
botonJugarLocalEspia.addEventListener('click', () => prepararPantallaConfig("espia"));
botonComoJugarEspia.addEventListener('click', () => overlayModalEspia.classList.remove('oculto'));
botonVolverSelectorEspia.addEventListener('click', () => cambiarPantalla(pantallaSelectorJuegos, pantallaMenuEspia));

// Listeners de Configuración
selectTematica.addEventListener('change', actualizarSubcategorias);
botonComenzar.addEventListener('click', iniciarJuego);
botonVolverMenu.addEventListener('click', () => {
    if (juegoActual === "impostor") {
        cambiarPantalla(pantallaMenuImpostor, pantallaConfig);
    } else {
        cambiarPantalla(pantallaMenuEspia, pantallaConfig);
    }
});
// (CORREGIDO) Eliminamos el listener del botón borrado
// botonGestionarDesdeConfig.addEventListener('click', ...);

// Listeners de Pantalla Gestionar
botonIrACrear.addEventListener('click', irAPantallaCrear);
botonVolverMenuGestionar.addEventListener('click', () => cambiarPantalla(pantallaMenuImpostor, pantallaGestionar));

// Listeners de Crear Categoría
botonGuardarCategoria.addEventListener('click', guardarCategoria);
botonVolverGestionar.addEventListener('click', () => cambiarPantalla(pantallaGestionar, pantallaCrearCategoria));
textareaPalabras.addEventListener('input', actualizarConteoPalabras);

// Listeners de Juego
carta.addEventListener('click', revelarCarta);
botonSiguiente.addEventListener('click', siguienteTurno);
botonFinalizar.addEventListener('click', mostrarPantallaFinal);
botonJugarNuevo.addEventListener('click', reiniciarJuego);

// Listeners del Modal (para AMBOS modales)
botonesCerrarModal.forEach(boton => {
    boton.addEventListener('click', () => {
        overlayModalImpostor.classList.add('oculto');
        overlayModalEspia.classList.add('oculto');
    });
});
overlayModalImpostor.addEventListener('click', (e) => {
    if (e.target === overlayModalImpostor) overlayModalImpostor.classList.add('oculto');
});
overlayModalEspia.addEventListener('click', (e) => {
    if (e.target === overlayModalEspia) overlayModalEspia.classList.add('oculto');
});

// --- 6. Funciones de Navegación y Categorías ---

function cambiarPantalla(pantallaMostrar, pantallaOcultar) {
    pantallaMostrar.classList.remove('oculto');
    pantallaOcultar.classList.add('oculto');
}

function prepararPantallaConfig(juego) {
    juegoActual = juego; 

    if (juego === "impostor") {
        tituloConfig.textContent = "Configurar Impostor";
        labelImpostores.textContent = "Número de Impostores:";
        labelTematica.textContent = "Elige una temática:";

        popularTemasPrincipales(TEMAS); 
        cargarCategoriasPropias(); 
        
        // (CORREGIDO) No mostramos el div, 'cargarCategoriasPropias' lo hará
        
        // (CORREGIDO) Ocultamos el botón (ya no existe, pero por si acaso)
        // botonGestionarDesdeConfig.classList.remove('oculto'); 

        inputNumImpostores.max = parseInt(inputTotalJugadores.value) - 1 || 1;

        cambiarPantalla(pantallaConfig, pantallaMenuImpostor);

    } else if (juego === "espia") {
        tituloConfig.textContent = "Configurar El Espía";
        labelImpostores.textContent = "Número de Espías:";
        labelTematica.textContent = "Elige paquete de ubicaciones:";

        popularTemasPrincipales(UBICACIONES); 
        
        divSubTematica.classList.add('oculto'); 
        // (CORREGIDO) Ocultamos el botón (ya no existe, pero por si acaso)
        // botonGestionarDesdeConfig.classList.add('oculto'); 

        inputNumImpostores.max = parseInt(inputTotalJugadores.value) - 1 || 1;

        cambiarPantalla(pantallaConfig, pantallaMenuEspia);
    }
}

function popularTemasPrincipales(database) {
    selectTematica.innerHTML = '';

    for (const key in database) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = database[key].nombre;
        selectTematica.appendChild(option);
    }
}

function actualizarSubcategorias() {
    if (juegoActual !== "impostor") {
        divSubTematica.classList.add('oculto');
        return;
    }

    const temaKey = selectTematica.value;
    selectSubTematica.innerHTML = '';

    if (temaKey.startsWith('custom_')) {
        divSubTematica.classList.add('oculto');
        return;
    }

    const tema = TEMAS[temaKey];

    if (tema && tema.subcategorias) {
        const optionTodo = document.createElement('option');
        optionTodo.value = "todo";
        optionTodo.textContent = `Todo ${tema.nombre}`;
        selectSubTematica.appendChild(optionTodo);

        for (const subKey in tema.subcategorias) {
            const option = document.createElement('option');
            option.value = subKey;
            option.textContent = tema.subcategorias[subKey].nombre;
            selectSubTematica.appendChild(option);
        }

        divSubTematica.classList.remove('oculto');
    } else {
        divSubTematica.classList.add('oculto');
    }
}

function cargarCategoriasPropias() {

    if (juegoActual !== "impostor") return;

    document.querySelectorAll('#selectTematica option[data-propia="true"]').forEach(opt => opt.remove());

    const grupoPropiasExistente = document.getElementById('grupoPropias');
    if (grupoPropiasExistente) {
        grupoPropiasExistente.remove();
    }

    const categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];

    if (categoriasGuardadas.length > 0) {
        const grupoPropias = document.createElement('optgroup');
        grupoPropias.id = 'grupoPropias';
        grupoPropias.label = 'Mis Categorías';
        selectTematica.appendChild(grupoPropias);

        categoriasGuardadas.forEach(cat => {
            const option = document.createElement('option');
            option.value = `custom_${cat.nombre}`;
            option.textContent = cat.nombre;
            option.dataset.propia = "true";
            grupoPropias.appendChild(option);
        });
    }

    actualizarSubcategorias();
}


function mostrarPantallaGestionar() {
    popularListaGestionar();
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];

    if (categoriasGuardadas.length >= MAX_CATEGORIAS) {
        botonIrACrear.disabled = true;
        botonIrACrear.textContent = "Límite de categorías alcanzado";
    } else {
        botonIrACrear.disabled = false;
        botonIrACrear.textContent = "Crear Nueva Categoría";
    }
    cambiarPantalla(pantallaGestionar, pantallaMenuImpostor);
}

function popularListaGestionar() {
    listaCategoriasPropias.innerHTML = '';
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];

    if (categoriasGuardadas.length === 0) {
        listaCategoriasPropias.innerHTML = '<p class="instruccion-pantalla">No has creado ninguna categoría.</p>';
        return;
    }

    categoriasGuardadas.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'item-categoria';

        const nombre = document.createElement('span');
        nombre.textContent = cat.nombre;
        item.appendChild(nombre);

        const botonesDiv = document.createElement('div');
        botonesDiv.className = 'item-botones';

        const btnEditar = document.createElement('button');
        btnEditar.className = 'boton-icono boton-editar';
        btnEditar.innerHTML = '✏️';
        btnEditar.onclick = () => cargarCategoriaParaEditar(cat.nombre);
        botonesDiv.appendChild(btnEditar);

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'boton-icono boton-eliminar';
        btnEliminar.innerHTML = '🗑️';
        btnEliminar.onclick = () => eliminarCategoria(cat.nombre);
        botonesDiv.appendChild(btnEliminar);

        item.appendChild(botonesDiv);
        listaCategoriasPropias.appendChild(item);
    });
}

function cargarCategoriaParaEditar(nombreCategoria) {
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];
    const categoria = categoriasGuardadas.find(cat => cat.nombre === nombreCategoria);
    if (!categoria) return;

    modoEdicion = nombreCategoria;
    tituloCrearEditar.textContent = "Editar Categoría";
    mensajeCategoria.style.display = 'none';

    inputNombreCategoria.value = categoria.nombre;
    textareaPalabras.value = categoria.palabras.join('\n');
    actualizarConteoPalabras();

    cambiarPantalla(pantallaCrearCategoria, pantallaGestionar);
}

function irAPantallaCrear() {
    modoEdicion = null;
    tituloCrearEditar.textContent = "Crear Categoría";
    mensajeCategoria.style.display = 'none';

    inputNombreCategoria.value = "";
    textareaPalabras.value = "";
    actualizarConteoPalabras();

    cambiarPantalla(pantallaCrearCategoria, pantallaGestionar);
}

function eliminarCategoria(nombreCategoria) {
    if (!confirm(`¿Estás seguro de que quieres eliminar la categoría "${nombreCategoria}"?`)) {
        return;
    }

    let categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];
    categoriasGuardadas = categoriasGuardadas.filter(cat => cat.nombre !== nombreCategoria);
    localStorage.setItem('categoriasPropias', JSON.stringify(categoriasGuardadas));

    popularListaGestionar();
    cargarCategoriasPropias();

    if (categoriasGuardadas.length < MAX_CATEGORIAS) {
        botonIrACrear.disabled = false;
        botonIrACrear.textContent = "Crear Nueva Categoría";
    }
}

function actualizarConteoPalabras() {
    const palabras = textareaPalabras.value.split('\n').filter(p => p.trim() !== "");
    conteoPalabras.textContent = `${palabras.length} / ${MAX_PALABRAS} palabras`;
    if (palabras.length > MAX_PALABRAS) {
        conteoPalabras.style.color = 'red';
    } else {
        conteoPalabras.style.color = '#777';
    }
}

function guardarCategoria() {
    const nombreNuevo = inputNombreCategoria.value.trim();
    const palabras = textareaPalabras.value.split('\n').filter(p => p.trim() !== "");
    let categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];

    // --- Validación ---
    const nombresBase = Object.keys(TEMAS);
    if (!nombreNuevo) {
        mostrarMensaje(mensajeCategoria, "Error: Debes darle un nombre a la categoría.", 'error');
        return;
    }

    const esNombreDuplicado = categoriasGuardadas.some(
        cat => cat.nombre.toLowerCase() === nombreNuevo.toLowerCase() && cat.nombre !== modoEdicion
    );
    if (esNombreDuplicado || nombresBase.includes(nombreNuevo.toLowerCase())) {
        mostrarMensaje(mensajeCategoria, "Error: Ya existe una categoría con ese nombre.", 'error');
        return;
    }
    if (palabras.length === 0) {
        mostrarMensaje(mensajeCategoria, "Error: Debes añadir al menos una palabra.", 'error');
        return;
    }
    if (palabras.length > MAX_PALABRAS) {
        mostrarMensaje(mensajeCategoria, `Error: Límite de ${MAX_PALABRAS} palabras excedido.`, 'error');
        return;
    }
    const palabraLarga = palabras.find(p => p.length > MAX_CHAR_PALABRA);
    if (palabraLarga) {
        mostrarMensaje(mensajeCategoria, `Error: La palabra "${palabraLarga}" excede los ${MAX_CHAR_PALABRA} caracteres.`, 'error');
        return;
    }

    // --- Guardado (Lógica actualizada) ---
    if (modoEdicion) {
        // --- MODO ACTUALIZAR ---
        const index = categoriasGuardadas.findIndex(cat => cat.nombre === modoEdicion);
        if (index > -1) {
            categoriasGuardadas[index].nombre = nombreNuevo;
            categoriasGuardadas[index].palabras = palabras;
        }
    } else {
        // --- MODO CREAR ---
        if (categoriasGuardadas.length >= MAX_CATEGORIAS) {
            mostrarMensaje(mensajeCategoria, `Error: Límite de ${MAX_CATEGORIAS} categorías alcanzado.`, 'error');
            return;
        }
        const nuevaCategoria = { nombre: nombreNuevo, palabras: palabras };
        categoriasGuardadas.push(nuevaCategoria);
    }

    localStorage.setItem('categoriasPropias', JSON.stringify(categoriasGuardadas));

    // --- Finalización ---
    modoEdicion = null;
    cargarCategoriasPropias();
    mostrarPantallaGestionar();
    cambiarPantalla(pantallaGestionar, pantallaCrearCategoria);
}

function mostrarMensaje(elemento, texto, tipo = 'info') {
    elemento.textContent = texto;
    elemento.className = tipo;
    elemento.style.display = 'block';
}

// --- 7. Funciones Principales del Juego ---

function iniciarJuego() {
    mensajeError.style.display = 'none';

    totalJugadores = parseInt(inputTotalJugadores.value);
    const numImpostores = parseInt(inputNumImpostores.value);
    const temaKey = selectTematica.value;
    const subTemaKey = selectSubTematica.value;

    // Validaciones de Jugadores (comunes a ambos juegos)
    if (numImpostores >= totalJugadores) {
        mostrarMensaje(mensajeError, 'Error: No puede haber más impostores/espías que jugadores.', 'error');
        return;
    }
    if (totalJugadores < 3 || numImpostores < 1) {
        mostrarMensaje(mensajeError, 'Error: Mínimo 3 jugadores y 1 impostor/espía.', 'error');
        return;
    }
    if (totalJugadores > MAX_JUGADORES) {
        mostrarMensaje(mensajeError, `Error: El máximo es de ${MAX_JUGADORES} jugadores.`, 'error');
        return;
    }

    // Lógica de selección de palabra (depende del juego)
    if (!seleccionarPalabra(temaKey, subTemaKey)) {
        return; // Hubo un error
    }

    jugadorActual = 1;
    seleccionarImpostores(totalJugadores, numImpostores); // Esta función es la misma
    cambiarPantalla(pantallaJuego, pantallaConfig);
    prepararTurno(); // Esta función ahora depende de 'juegoActual'
}

function seleccionarPalabra(temaKey, subTemaKey) {
    let listaPalabras = [];

    if (juegoActual === "impostor") {
        if (temaKey.startsWith('custom_')) {
            // --- Lógica de categorías propias ---
            const nombreCat = temaKey.replace('custom_', '');
            const categoriasGuardadas = JSON.parse(localStorage.getItem('categoriasPropias')) || [];
            const miCategoria = categoriasGuardadas.find(cat => cat.nombre === nombreCat);

            if (!miCategoria || miCategoria.palabras.length === 0) {
                mostrarMensaje(mensajeError, `Error: La categoría propia "${nombreCat}" no se encontró o está vacía.`, 'error');
                return false;
            }
            listaPalabras = miCategoria.palabras;

        } else {
            // --- Lógica de categorías base (Impostor) ---
            const tema = TEMAS[temaKey];
            if (tema.subcategorias) {
                if (subTemaKey === "todo") { 
                    listaPalabras = []; // Limpiamos por si acaso
                    for (const subKey in tema.subcategorias) {
                        listaPalabras = listaPalabras.concat(tema.subcategorias[subKey].palabras);
                    }
                } else { 
                    listaPalabras = tema.subcategorias[subTemaKey].palabras; 
                }
            } else {
                listaPalabras = tema.palabras;
            }
        }
    } else if (juegoActual === "espia") {
        // --- Lógica de categorías base (Espía) ---
        const tema = UBICACIONES[temaKey];
        // (El espía no tiene subcategorías por ahora)
        listaPalabras = tema.palabras;
    }

    if (!listaPalabras || listaPalabras.length === 0) {
         mostrarMensaje(mensajeError, `Error: La categoría seleccionada está vacía.`, 'error');
        return false;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaPalabras.length);
    palabraSecreta = listaPalabras[indiceAleatorio];
    return true; // Éxito
}

function seleccionarImpostores(total, num) {
    impostores = [];
    tripulantes = [];
    let jugadores = Array.from({length: total}, (_, i) => i + 1);

    for (let i = jugadores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [jugadores[i], jugadores[j]] = [jugadores[j], jugadores[i]];
    }

    impostores = jugadores.slice(0, num);
    tripulantes = jugadores.slice(num);
}

function prepararTurno() {
    document.getElementById('tituloCartaTapada').textContent = `JUGADOR ${jugadorActual}`;
    document.getElementById('tituloCartaRevelada').textContent = `JUGADOR ${jugadorActual}`;

    const colorIndex = (jugadorActual - 1) % COLORES_CARTA_FUERTE.length;
    const colorFuerte = COLORES_CARTA_FUERTE[colorIndex];
    const colorPalido = COLORES_CARTA_PALIDO[colorIndex];

    carta.style.setProperty('--color-fuerte', colorFuerte);
    carta.style.setProperty('--color-palido', colorPalido);

    carta.classList.remove('revelada');
    cartaTapada.classList.remove('oculto');
    cartaRevelada.classList.add('oculto');
    botonSiguiente.classList.add('oculto');
    cartaRevelada.classList.remove('impostor');
    botonSiguiente.textContent = "SIGUIENTE JUGADOR";
    pantallaJuego.classList.remove('flash-impostor');
}

function revelarCarta() {
    cartaTapada.classList.add('oculto');
    cartaRevelada.classList.remove('oculto');
    botonSiguiente.classList.remove('oculto');
    carta.classList.add('revelada');

    if (impostores.includes(jugadorActual)) {
        // --- Es Impostor o Espía ---
        if (juegoActual === "impostor") {
            textoRol.textContent = "¡ERES EL IMPOSTOR!";
        } else {
            textoRol.textContent = "¡ERES EL ESPÍA!";
        }
        textoPalabra.textContent = "";
        cartaRevelada.classList.add('impostor');
        pantallaJuego.classList.add('flash-impostor');

    } else {
        // --- Es Tripulante o Agente ---
        if (juegoActual === "impostor") {
            textoRol.textContent = "LA PALABRA ES:";
        } else {
            textoRol.textContent = "LA UBICACIÓN ES:";
        }
        textoPalabra.textContent = palabraSecreta;
    }

    if (jugadorActual === totalJugadores) {
        botonSiguiente.textContent = "VER QUIÉN COMIENZA";
    }
}

function siguienteTurno() {
    if (jugadorActual === totalJugadores) {
        mostrarInicioRonda();
    } else {
        jugadorActual++;
        prepararTurno();
    }
}

function mostrarInicioRonda() {
    cambiarPantalla(pantallaInicioRonda, pantallaJuego);

    const jugadorInicial = Math.floor(Math.random() * totalJugadores) + 1;
    
    textoJugadorInicial.textContent = `¡Comienza el Jugador ${jugadorInicial}!`;
}

function mostrarPantallaFinal() {
    cambiarPantalla(pantallaFinal, pantallaInicioRonda);

    palabraFinal.textContent = `La palabra era: ${palabraSecreta}`;
    if (impostores.length === 1) {
        const rol = (juegoActual === 'impostor') ? 'impostor' : 'espía';
        impostoresFinal.textContent = `El ${rol} era: Jugador ${impostores[0]}`;
    } else {
        const rol = (juegoActual === 'impostor') ? 'impostores' : 'espías';
        impostoresFinal.textContent = `Los ${rol} eran: Jugadores ${impostores.join(', ')}`;
    }
}

function reiniciarJuego() {

    // Vuelve al menú del juego que acabas de jugar
    if (juegoActual === "impostor") {
        cambiarPantalla(pantallaMenuImpostor, pantallaFinal);
    } else {
        cambiarPantalla(pantallaMenuEspia, pantallaFinal);
    }

    totalJugadores = 0;
    impostores = [];
    tripulantes = [];
    palabraSecreta = "";
    jugadorActual = 1;
    
    // (CORREGIDO) Reseteamos el select y subcategorías
    // No podemos poner 'objetos' por si estábamos en El Espía
    // Así que simplemente reseteamos el HTML
    popularTemasPrincipales(juegoActual === 'impostor' ? TEMAS : UBICACIONES);
    actualizarSubcategorias();
}
