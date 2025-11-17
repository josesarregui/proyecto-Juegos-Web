// --- 1. Base de datos de palabras (NUEVA ESTRUCTURA) ---
const TEMAS = {
    objetos: {
        nombre: "Objetos",
        palabras: ["Tenedor", "Lámpara", "Teléfono", "Silla", "Libro", "Reloj", "Botella", "Llaves", "Mochila", "Ventana"]
    },
    futbol: {
        nombre: "Fútbol",
        subcategorias: {
            jugadores: {
                nombre: "Jugadores",
                palabras: ["Messi", "Ronaldo", "Maradona", "Pelé", "Neymar", "Mbappé", "Zidane", "Ronaldinho", "Beckham", "Cruyff"]
            },
            equipos: {
                nombre: "Equipos",
                palabras: ["Real Madrid", "Barcelona", "Boca Juniors", "River Plate", "Manchester United", "Liverpool", "Juventus", "Bayern Munich"]
            }
        }
    },
    animales: {
        nombre: "Animales",
        subcategorias: {
            domesticos: {
                nombre: "Domésticos",
                palabras: ["Perro", "Gato", "Hámster", "Pez Dorado", "Loro", "Conejo"]
            },
            salvajes: {
                nombre: "Salvajes",
                palabras: ["León", "Elefante", "Jirafa", "Tigre", "Oso", "Hipopótamo", "Canguro"]
            }
        }
    }
};

// Listas de colores
const COLORES_CARTA_FUERTE = ['#FFD60A', '#00A6FB', '#FF595E', '#e83e8c', '#8338EC', '#00C49A'];
const COLORES_CARTA_PALIDO = ['#FFFBEB', '#E6F6FF', '#FFF0F1', '#FDECF4', '#F3EBFF', '#E6FAF5'];

// --- 2. Constantes de Límites ---
const MAX_CATEGORIAS = 2;
const MAX_PALABRAS = 50;
const MAX_CHAR_PALABRA = 30;

// --- 3. Variables de Estado del Juego ---
let totalJugadores = 0, impostores = [], tripulantes = [], palabraSecreta = "", jugadorActual = 1;
let modoEdicion = null; // Guarda el nombre de la categoría que se está editando

// --- 4. Obtener Elementos del HTML ---

// Pantalla Selector de Juegos
const pantallaSelectorJuegos = document.getElementById('pantallaSelectorJuegos');
const botonJugarImpostor = document.getElementById('botonJugarImpostor');

// Pantalla de Menú Impostor
const pantallaMenuImpostor = document.getElementById('pantallaMenuImpostor'); 
const botonJugarLocal = document.getElementById('botonJugarLocal');
const botonGestionarCategorias = document.getElementById('botonGestionarCategorias');
const botonVolverSelector = document.getElementById('botonVolverSelector');

// Pantalla de Configuración
const pantallaConfig = document.getElementById('pantallaConfig');
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

// --- 5. Event Listeners ---

// Listener de Carga
document.addEventListener('DOMContentLoaded', () => {
    popularTemasPrincipales();
    cargarCategoriasPropias();
});

// (NUEVO) Listeners del Selector de Juegos
botonJugarImpostor.addEventListener('click', () => cambiarPantalla(pantallaMenuImpostor, pantallaSelectorJuegos));
// (Aquí irían los listeners para botonJugarEspia, etc. en el futuro)

// Listeners del Menú Impostor
botonJugarLocal.addEventListener('click', () => cambiarPantalla(pantallaConfig, pantallaMenu));
botonGestionarCategorias.addEventListener('click', mostrarPantallaGestionar);
botonVolverSelector.addEventListener('click', () => cambiarPantalla(pantallaSelectorJuegos, pantallaMenuImpostor));

// Listeners de Configuración
selectTematica.addEventListener('change', actualizarSubcategorias);
botonComenzar.addEventListener('click', iniciarJuego);
botonVolverMenu.addEventListener('click', () => cambiarPantalla(pantallaMenuImpostor, pantallaConfig));

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

// --- 6. Funciones de Navegación y Categorías ---

function cambiarPantalla(pantallaMostrar, pantallaOcultar) {
    pantallaMostrar.classList.remove('oculto');
    pantallaOcultar.classList.add('oculto');
}

/**
 * Llena el primer <select> con las categorías base
 */
function popularTemasPrincipales() {
    selectTematica.innerHTML = ''; // Limpiamos

    for (const key in TEMAS) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = TEMAS[key].nombre;
        selectTematica.appendChild(option);
    }
}

/**
 * Muestra y llena el segundo <select> si es necesario
 */
function actualizarSubcategorias() {
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

/**
 * Carga las categorías de localStorage
 */
function cargarCategoriasPropias() {
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

/**
 * Muestra la pantalla de gestión y llena la lista
 */
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

/**
 * Llena la lista en la pantalla de "Gestionar Categorías"
 */
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

/**
 * Prepara la pantalla de "Crear" para modo Edición
 */
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

/**
 * Prepara la pantalla de "Crear" para modo Creación
 */
function irAPantallaCrear() {
    modoEdicion = null;
    tituloCrearEditar.textContent = "Crear Categoría";
    mensajeCategoria.style.display = 'none';

    inputNombreCategoria.value = "";
    textareaPalabras.value = "";
    actualizarConteoPalabras();

    cambiarPantalla(pantallaCrearCategoria, pantallaGestionar);
}

/**
 * Elimina una categoría del localStorage
 */
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

/**
 * Guarda una categoría (Nueva o Editada)
 */
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

    if (!seleccionarPalabra(temaKey, subTemaKey)) {
        return;
    }

    if (numImpostores >= totalJugadores) {
        mostrarMensaje(mensajeError, 'Error: No puede haber más impostores que jugadores.', 'error');
        return;
    }
     if (totalJugadores < 3 || numImpostores < 1) {
        mostrarMensaje(mensajeError, 'Error: Mínimo 3 jugadores y 1 impostor.', 'error');
        return;
    }

    jugadorActual = 1;
    seleccionarImpostores(totalJugadores, numImpostores);
    cambiarPantalla(pantallaJuego, pantallaConfig);
    prepararTurno();
}

function seleccionarPalabra(temaKey, subTemaKey) {
    let listaPalabras = [];

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
        // --- Lógica de categorías base ---
        const tema = TEMAS[temaKey];

        if (tema.subcategorias) {
            if (subTemaKey === "todo") {
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
        textoRol.textContent = "¡ERES EL IMPOSTOR!";
        textoPalabra.textContent = "";
        cartaRevelada.classList.add('impostor');
        pantallaJuego.classList.add('flash-impostor');
    } else {
        textoRol.textContent = "LA PALABRA ES:";
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

    const indiceAleatorio = Math.floor(Math.random() * tripulantes.length);
    const jugadorInicial = tripulantes[indiceAleatorio];
    textoJugadorInicial.textContent = `¡Comienza el Jugador ${jugadorInicial}!`;
}

function mostrarPantallaFinal() {
    cambiarPantalla(pantallaFinal, pantallaInicioRonda);

    palabraFinal.textContent = `La palabra era: ${palabraSecreta}`;
    if (impostores.length === 1) {
        impostoresFinal.textContent = `El impostor era: Jugador ${impostores[0]}`;
    } else {
        impostoresFinal.textContent = `Los impostores eran: Jugadores ${impostores.join(', ')}`;
    }
}

function reiniciarJuego() {
    cambiarPantalla(pantallaMenuImpostor, pantallaFinal);

    totalJugadores = 0;
    impostores = [];
    tripulantes = [];
    palabraSecreta = "";
    jugadorActual = 1;

    selectTematica.value = 'objetos';
    actualizarSubcategorias();
}
