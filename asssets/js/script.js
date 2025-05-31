document.addEventListener('DOMContentLoaded', () => {
    // ... (significadosNumeros, tablaAlfanumerica, vocales, selectores de input SIN CAMBIOS) ...
    const significadosNumeros = {
        1: { titulo: "NÚMERO 1: EL LÍDER", luz: "Tiene iniciativa, es emprendedor, acción, cree en sí mismo. Tiende a dirigir y mandar a otros. Son los dirigentes de una empresa o presidente de curso. Tremendamente creativo e inventivo (inventores). Personas muy decididas, independientes, autónomas y solventes.", sombra: "Es egoísta, soberbia, pretenden siempre tener la razón y no reconocer sus errores. Es una persona que podría ser dictatorial, agresiva de palabra o hasta físicamente. Presenta un tema tremendo con el orgullo (tema con las rodillas o cuello). Obstinados, dominantes e irritables." },
        2: { titulo: "NÚMERO 2: EL COLABORADOR", luz: "Alguien que apoya a otros. Contiene y escucha al otro “la oreja”. Escucho mi voz interior (la intuición). Son por esencia asesores, consejeros. Brillan mucho como terapeutas, psicólogos, médicos. Hacen muchas evaluaciones y son diplomáticos. Es una persona conciliadora y muy buena para las negociaciones. Son de naturaleza romántica y anhelan tener su propio hogar. Como padres pueden ser excelentes, pero deben cuidar no asfixiar a sus hijos (se muestran muy posesivos).", sombra: "Desvalorización, postergación, servilismo o que actúa como servidumbre. Puede tener tremendos problemas con la autoestima, va a tener dudas y no confía en sí mismo, está en segundo lugar, alcanza para todos pero no para él. Necesito que me amen y empieza hacer cosas por los demás para que el otro me quiera. Necesitan apoyo constante para concretar sus proyectos, lo cual los hace muy dependientes. Se desmoralizan y caen en el pesimismo con facilidad." },
        3: { titulo: "NÚMERO 3: EL COMUNICADOR", luz: "El 3 es una persona que tiene el don de la palabra cuando está conectada con su luz, es muy expresiva, usa su creatividad. Esta persona se muestra alegre optimista y espontánea. Le gusta reírse, compartir momentos felices. Sociable, simpática y agradable. Son los niños de la numerología, son lúdicos, juegan y sonríe. Dan vida, dan energía. Son artistas en potencia. Faceta de cantantes, cineastas, publicidad, escritores, radio, TV, faceta del humorista (Coco Legrand, Bombo Fica, Kramer)", sombra: "Pueden mostrarse egoístas y superficiales, con tendencia a excederse con los placeres, no asumir responsabilidades y gastar en exceso. Caprichosos y con tal de satisfacer sus deseos engañan a los demás. Busca la vida fácil. Se muestran infantiles e influenciables (complejo peter pan). También se le llama el infeliz, es la persona dramática que se anda quejando, persona insatisfecha de la vida." },
        4: { titulo: "NÚMERO 4: EL TRABAJADOR", luz: "Es una persona ordenada, honesta, práctica, reservada, lógica y racional. Conservador y realista, desconfía de todo lo que sea inseguro o arriesgado. Trabajador incansable, disciplinado y perfeccionista. Buscan la seguridad y estabilidad económica.", sombra: "Son poco demostrativos afectivamente. Se pueden mostrar duros, aburridos, rutinarios. Deben tener cuidado de ser excesivamente cautelosos y precavidos, con lo cual dejan escapar las oportunidades. Por otro lado, muestran posturas represivas e intolerantes. También puede ser intransigente, mandón." },
        5: { titulo: "NÚMERO 5: EL AVENTURERO", luz: "Tiene que ver con todo lo impredecible. Es uno de los números más adaptables que hay. Se llama el progreso y la evolución. Representa todo lo que son los nuevos paradigmas, representa el conocimiento y la genialidad. Son multifacéticos y curiosos. Es considerado el número de la energía. Cambio transformación constante y también lleva el resto a lo mismo. Cuándo está conectado con su luz esta persona estaría en paz, tendría flexibilidad y tranquilidad.", sombra: "Hay 2 bloqueos: -Representa el libertinaje y descontrol. Puede ser inconstante, indisciplinado, indeciso, poco prolijos. Hacen de todo, comienzan muchas cosas y no terminan nada. -Puede ser una persona miedosa al cambio y transformación. No es atrevido. No se atreve a correr riesgos en la vida y puede presentar problemas con el dinero. Inestabilidad en el área financiera (sube y baja) dinero impredecible." },
        6: { titulo: "NÚMERO 6: EL ARMONIZADOR", luz: "Son personas románticas, sociables, cariñosas y artísticas. Poseen un gran sentido estético, habilidades creativas y una intensa afinidad con la música. Estas personas cuando asumen un compromiso afectivo demuestran verdadera devoción por el ser amado. Viven el amor con intensidad y disfrutan de la compañía de sus seres queridos. Se sienten más completos realizando sus planes en compañía que actuando por su propia cuenta.", sombra: "Presenta un tema con la irresponsabilidad en el trabajo, descuidados, poco puntuales, poco prolijos, no se hacen responsables de los hijos, no se preocupan de su comida, etc. Y puede llegar al abandono de los hijos. Indecisos e inseguros. Cuando se bloquean son promiscuos y se meten en relaciones tóxicas, cuando pasan por esto y vuelven a la luz, llega la culpa. El 6 también puede ser una persona que no logra comprometerse." },
        7: { titulo: "NÚMERO 7: EL REFLEXIVO", luz: "Personas introspectivas, estudiosas, con gran capacidad para ahondar en las verdades de la existencia humana. Perfeccionistas, analíticos y sensibles. Gustan de cosas refinadas y delicadas. Reservados e introvertidos en lo que se refiere a su vida privada, les cuesta expresar sus sentimientos y prefiere grupos pequeños e íntimo de amistades.", sombra: "Puede presentar un aspecto que se cree superior que los demás. Ego muy desarrollado, soberbio, mirador en menos. Una persona que discrimina a los demás, muy clasista. Maltrata a otros con su conocimiento. Personas irónicas y sarcásticas. Es un analfabeto emocional porque considera la emoción como una debilidad." },
        8: { titulo: "NÚMERO 8: EL EJECUTIVO", luz: "Personas que tienden a ser muy prácticas, con gran capacidad para el trabajo, la dirección y el éxito profesional. Eficientes, decididos y con gran autocontrol. Individuos con gran voluntad y concentración. Justos honestos y equilibrados. Un número estratégico y comercial.", sombra: "Personas ambiciosas, poco escrupulosas, que no se detienen ante nada para conseguir sus fines. Pueden mostrarse soberbios, crueles, vengativos y rencoroso. Son bastante exigentes y severos con los demás, llegando al extremo de ser violento. Por otro lado, se puede mostrar como personas cobardes y miedosas." },
        9: { titulo: "NÚMERO 9: EL HUMANITARIO", luz: "Personas nobles, caritativas, compasivas, Entregadas y humanitarias. Espíritu filantrópico que lleva a sus poseedores a compartir con los demás sus experiencias y conocimientos. Profundamente idealista y espiritual. Grandes aptitudes intelectuales e intuitivos. Extremadamente francos y honestos. Con una gran intuición y percepción fuera de lo común, lo cual les permite penetrar fácilmente en el interior de las personas.", sombra: "Se presenta como una persona tremendamente egoísta. Está centrado en sí mismo. Es una persona que le cuesta concretar porque es un soñador e idealista. Su franqueza puede ser hiriente ya que les falta tacto y diplomacia. Es cruel, porque logra ver el lado oscuro de otros y no dudará en atacar." }
    };

    const tablaAlfanumerica = {
        'A': 1, 'J': 1, 'S': 1, 'B': 2, 'K': 2, 'T': 2, 'C': 3, 'L': 3, 'U': 3, 'D': 4, 'M': 4, 'V': 4,
        'E': 5, 'N': 5, 'Ñ': 5, 'W': 5, 'F': 6, 'O': 6, 'X': 6, 'G': 7, 'P': 7, 'Y': 7, 'H': 8, 'Q': 8, 'Z': 8,
        'I': 9, 'R': 9
    };
    const vocales = ['A', 'E', 'I', 'O', 'U'];

    const inputNombre = document.getElementById('nombreCompleto');
    const inputDia = document.getElementById('diaNacimiento');
    const inputMes = document.getElementById('mesNacimiento');
    const inputAnio = document.getElementById('anioNacimiento');
    const botonGenerar = document.getElementById('botonGenerar');

    const arbolContenedorEl = document.getElementById('arbolNumerologicoContenedor');
    const nodoIEl = document.getElementById('nodoI');
    const nodoEEl = document.getElementById('nodoE');
    const nodoPEl = document.getElementById('nodoP');
    const nodoXEl = document.getElementById('nodoX');
    const nodoYEl = document.getElementById('nodoY');
    const nodoTEl = document.getElementById('nodoT');
    const nodoZEl = document.getElementById('nodoZ');

    // Contenedores de los nodos para obtener su posición
    const contenedorI = document.getElementById('contenedorI');
    const contenedorE = document.getElementById('contenedorE');
    const contenedorP = document.getElementById('contenedorP');
    const contenedorX = document.getElementById('contenedorX');
    const contenedorT = document.getElementById('contenedorT');
    const contenedorY = document.getElementById('contenedorY');
    const contenedorZ = document.getElementById('contenedorZ');

    const svgLineas = document.getElementById('svgLineasConectoras');
    const arbolVisualWrapper = document.querySelector('.arbol-visual-wrapper'); // Para obtener offset

    const descripcionContenedor = document.getElementById('descripcionNumeroContenedor');
    const descripcionTituloEl = document.getElementById('descripcionTitulo');
    const descripcionLuzEl = document.getElementById('descripcionLuz');
    const descripcionSombraEl = document.getElementById('descripcionSombra');
    const notaAumentadaEl = document.getElementById('notaAumentada');

    let resultadosCalculados = {};

    // ... (funciones reducirNumero, normalizarNombre, calcularValorNombre SIN CAMBIOS) ...
    function reducirNumero(numeroEntrada) {
        let num = parseInt(numeroEntrada);
        if (isNaN(num)) return { valor: 0, aumentado: false };
        let fueMultiploDeDiezOriginalmente = (num % 10 === 0 && num > 0);
        let algunaSumaIntermediaFueMultiploDeDiez = false;
        while (num > 9) {
            let sumaDigitos = String(num).split('').reduce((acc, digito) => acc + parseInt(digito), 0);
            if (sumaDigitos % 10 === 0 && sumaDigitos > 0) {
                algunaSumaIntermediaFueMultiploDeDiez = true;
            }
            num = sumaDigitos;
        }
        return { valor: num, aumentado: fueMultiploDeDiezOriginalmente || algunaSumaIntermediaFueMultiploDeDiez };
    }

    function normalizarNombre(nombre) {
        return nombre.toUpperCase()
                     .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                     .replace(/[^A-ZÑ]/g, '');
    }

    function calcularValorNombre(nombreNormalizado, tipo) {
        let suma = 0;
        for (let letra of nombreNormalizado) {
            if (tablaAlfanumerica[letra]) {
                const esVocal = vocales.includes(letra);
                if (tipo === 'vocales' && esVocal) suma += tablaAlfanumerica[letra];
                else if (tipo === 'consonantes' && !esVocal) suma += tablaAlfanumerica[letra];
                else if (tipo === 'todo') suma += tablaAlfanumerica[letra];
            }
        }
        return suma;
    }


    function dibujarLineas() {
        svgLineas.innerHTML = ''; // Limpiar líneas anteriores

        const nodosParaConectar = {
            I: nodoIEl, E: nodoEEl, P: nodoPEl,
            X: nodoXEl, T: nodoTEl, Y: nodoYEl, Z: nodoZEl
        };

        // Obtener el offset del SVG wrapper para calcular coordenadas relativas al SVG
        const wrapperRect = arbolVisualWrapper.getBoundingClientRect();

        function getCentroNodoRelativo(nodoEl) {
            const rect = nodoEl.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2 - wrapperRect.left,
                y: rect.top + rect.height / 2 - wrapperRect.top
            };
        }

        // Definir las conexiones [nodo1Key, nodo2Key]
        const conexiones = [
            ['I', 'E'], ["X", "Y"],
            ['I', 'P'], ['E', 'P'],
            ['I', 'X'], ['E', 'Y'], // Verticales largas
            ['X', 'P'], ['Y', 'P'], // Diagonales desde X,Y a P
            ['X', 'T'], ['Y', 'T'],
            ['P', 'T'], // Vertical P-T
            ['X', 'Z'], ['Y', 'Z'], // Diagonales largas desde X,Y a Z
            ['T', 'Z']  // Vertical T-Z
        ];

        conexiones.forEach(par => {
            const centro1 = getCentroNodoRelativo(nodosParaConectar[par[0]]);
            const centro2 = getCentroNodoRelativo(nodosParaConectar[par[1]]);

            const linea = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            linea.setAttribute('x1', centro1.x);
            linea.setAttribute('y1', centro1.y);
            linea.setAttribute('x2', centro2.x);
            linea.setAttribute('y2', centro2.y);
            linea.setAttribute('stroke', 'black');
            linea.setAttribute('stroke-width', '1.5');
            svgLineas.appendChild(linea);
        });
    }

    botonGenerar.addEventListener('click', () => {
        const nombre = inputNombre.value;
        const dia = parseInt(inputDia.value);
        const mes = parseInt(inputMes.value);
        const anio = parseInt(inputAnio.value);

        if (!nombre || isNaN(dia) || isNaN(mes) || isNaN(anio) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1900 || anio > 2099) {
            alert("Por favor, ingresa todos los datos correctamente.");
            return;
        }

        const nombreNorm = normalizarNombre(nombre);
        const sumaVocales = calcularValorNombre(nombreNorm, 'vocales');
        const sumaConsonantes = calcularValorNombre(nombreNorm, 'consonantes');
        const sumaTotalNombre = sumaVocales + sumaConsonantes;

        resultadosCalculados.I = reducirNumero(sumaVocales);
        resultadosCalculados.E = reducirNumero(sumaConsonantes);
        resultadosCalculados.P = reducirNumero(sumaTotalNombre);
        resultadosCalculados.X = reducirNumero(dia);
        resultadosCalculados.Y = reducirNumero(mes);
        const anioReducido = reducirNumero(anio);
        const sumaT = resultadosCalculados.X.valor + resultadosCalculados.Y.valor + anioReducido.valor;
        resultadosCalculados.T = reducirNumero(sumaT);
        const sumaZ = resultadosCalculados.X.valor + resultadosCalculados.Y.valor;
        resultadosCalculados.Z = reducirNumero(sumaZ);
        
        nodoIEl.textContent = resultadosCalculados.I.valor;
        nodoEEl.textContent = resultadosCalculados.E.valor;
        nodoPEl.textContent = resultadosCalculados.P.valor;
        nodoXEl.textContent = resultadosCalculados.X.valor;
        nodoYEl.textContent = resultadosCalculados.Y.valor;
        nodoTEl.textContent = resultadosCalculados.T.valor;
        nodoZEl.textContent = resultadosCalculados.Z.valor;

        arbolContenedorEl.style.display = 'block';
        descripcionContenedor.style.display = 'none';

        // Dibujar líneas DESPUÉS de que los nodos estén visibles y posicionados
        // Usar requestAnimationFrame para asegurar que el DOM se haya actualizado
        requestAnimationFrame(() => {
            requestAnimationFrame(dibujarLineas); // Doble para más seguridad en algunos navegadores
        });
    });

    // ... (función mostrarDescripcion y event listeners para nodos SIN CAMBIOS) ...
    function mostrarDescripcion(nodoKey) {
        const numeroCalculado = resultadosCalculados[nodoKey];
        if (!numeroCalculado || !significadosNumeros[numeroCalculado.valor]) {
            descripcionTituloEl.textContent = "Error";
            descripcionLuzEl.textContent = "No se encontró información para este número.";
            descripcionSombraEl.textContent = "";
            notaAumentadaEl.style.display = 'none';
            descripcionContenedor.style.display = 'block';
            return;
        }

        const significado = significadosNumeros[numeroCalculado.valor];
        descripcionTituloEl.textContent = significado.titulo;
        descripcionLuzEl.innerHTML = significado.luz.replace(/\n/g, '<br>');
        descripcionSombraEl.innerHTML = significado.sombra.replace(/\n/g, '<br>');

        if (numeroCalculado.aumentado) {
            notaAumentadaEl.style.display = 'block';
        } else {
            notaAumentadaEl.style.display = 'none';
        }
        descripcionContenedor.style.display = 'block';
        descripcionContenedor.scrollIntoView({ behavior: 'smooth' });
    }

    nodoIEl.addEventListener('click', () => mostrarDescripcion('I'));
    nodoEEl.addEventListener('click', () => mostrarDescripcion('E'));
    nodoPEl.addEventListener('click', () => mostrarDescripcion('P'));
    nodoXEl.addEventListener('click', () => mostrarDescripcion('X'));
    nodoYEl.addEventListener('click', () => mostrarDescripcion('Y'));
    nodoTEl.addEventListener('click', () => mostrarDescripcion('T'));
    nodoZEl.addEventListener('click', () => mostrarDescripcion('Z'));

    // Redibujar líneas si la ventana cambia de tamaño (opcional, pero bueno para responsive)
    let timeoutId = null;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (arbolContenedorEl.style.display === 'block') {
                dibujarLineas();
            }
        }, 250); // Espera un poco para no sobrecargar
    });
});