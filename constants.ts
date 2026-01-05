import { Activity, Pronunciation, Coordinates } from './types';

export const SHIP_DEPARTURE_TIME = "18:00";
export const SHIP_ONBOARD_TIME = "17:30";
export const DATE_OF_VISIT = "2026-04-12";

export const COORDS = {
    BARCELONA_PORT: { lat: 41.362895, lng: 2.181948 },
    COLON: { lat: 41.375798, lng: 2.177774 },
    SAGRADA_FAMILIA: { lat: 41.40406, lng: 2.173935 },
    LA_PEDRERA: { lat: 41.395174, lng: 2.161777 },
    CASA_BATLLO: { lat: 41.391714, lng: 2.165002 },
    BOQUERIA: { lat: 41.381939, lng: 2.172071 }
};

export const GPX_WAYPOINTS = [
    { name: "WORLD TRADE CENTER", lat: 41.371587, lng: 2.181265 },
    { name: "CRUISE BUS (AZUL)", lat: 41.37182, lng: 2.179492 },
    { name: "METRO DRASSANES", lat: 41.376913, lng: 2.1759 },
    { name: "MONUMENTO A COLÓN", lat: 41.375798, lng: 2.177774 },
    { name: "METRO PASEO DE GRACIA", lat: 41.391519, lng: 2.165324 },
    { name: "LA PEDRERA", lat: 41.395174, lng: 2.161777 },
    { name: "Casa Batlló", lat: 41.391714, lng: 2.165002 },
    { name: "METRO SAGRADA FAMILIA", lat: 41.40406, lng: 2.173935 },
    { name: "METRO JAUME I", lat: 41.383988, lng: 2.178874 },
    { name: "CATEDRAL DEL MAR", lat: 41.383497, lng: 2.181772 },
    { name: "TERMINAL DE CRUCEROS", lat: 41.362895, lng: 2.181948 },
    { name: "METRO DIAGONAL", lat: 41.395839, lng: 2.159938 },
    { name: "LA BOQUERIA", lat: 41.381939, lng: 2.172071 },
    { name: "CATEDRAL DE BARCELONA", lat: 41.382326, lng: 2.173742 }
];

export const BARCELONA_TRACK: [number, number][] = [
    [41.372324, 2.178648], [41.372887, 2.17745], [41.372917, 2.177385], [41.372972, 2.177428], [41.373037, 2.177476], [41.373068, 2.177503], [41.37313, 2.177367], [41.373184, 2.177454], [41.373252, 2.177521], [41.373263, 2.177498], [41.373271, 2.177471], [41.373342, 2.177504], [41.373413, 2.177503], [41.373499, 2.177467], [41.373579, 2.177382], [41.373605, 2.177352], [41.373643, 2.177283], [41.373674, 2.177209], [41.373695, 2.177127], [41.373693, 2.177067], [41.373759, 2.177082], [41.373804, 2.177089], [41.373851, 2.177097], [41.373873, 2.177097], [41.373908, 2.177097], [41.373941, 2.177095], [41.373977, 2.177095], [41.374094, 2.177062], [41.374228, 2.177], [41.374383, 2.176848], [41.374469, 2.1769], [41.37453, 2.17695], [41.375254, 2.177528], [41.375264, 2.177507], [41.37529, 2.177448], [41.375317, 2.177388], [41.375326, 2.177367], [41.375331, 2.177356], [41.37537, 2.177393], [41.375395, 2.177412], [41.375444, 2.177454], [41.375491, 2.177492], [41.375516, 2.177509], [41.375552, 2.177535], [41.375564, 2.177537], [41.37557, 2.17753], [41.375591, 2.177512], [41.375627, 2.177482], [41.375663, 2.177467], [41.375685, 2.17746], [41.375711, 2.177458], [41.375761, 2.17746], [41.375775, 2.177447], [41.37584, 2.177405], [41.375934, 2.177343], [41.375944, 2.177297], [41.376069, 2.177197], [41.376092, 2.177229], [41.376564, 2.176819], [41.37656, 2.176808], [41.376553, 2.176794], [41.37654, 2.176765], [41.376524, 2.176732], [41.376817, 2.176473], [41.376994, 2.176314], [41.377026, 2.17629], [41.377034, 2.176255], [41.377482, 2.176213], [41.377931, 2.176172], [41.378379, 2.176131], [41.378828, 2.17609], [41.379276, 2.176048], [41.379725, 2.176007], [41.380174, 2.175966], [41.380622, 2.175925], [41.381071, 2.175884], [41.381519, 2.175842], [41.381968, 2.175801], [41.382417, 2.17576], [41.382865, 2.175719], [41.383314, 2.175678], [41.383762, 2.175636], [41.384211, 2.175595], [41.384660, 2.175554], [41.385108, 2.175513], [41.385557, 2.175471], [41.386005, 2.17543], [41.386454, 2.175389], [41.386903, 2.175348], [41.387351, 2.175307], [41.387800, 2.175265], [41.388248, 2.175224], [41.388697, 2.175183], [41.389146, 2.175142], [41.389594, 2.175101], [41.390043, 2.175059], [41.390491, 2.175018], [41.390940, 2.174977], [41.391389, 2.174936], [41.391837, 2.174895], [41.392286, 2.174853], [41.392734, 2.174812], [41.393183, 2.174771], [41.393632, 2.17473], [41.394080, 2.174688], [41.394529, 2.174647], [41.394977, 2.174606], [41.395426, 2.174565], [41.395875, 2.174524], [41.396323, 2.174482], [41.396772, 2.174441], [41.397220, 2.1744], [41.397669, 2.174359], [41.398118, 2.174318], [41.398566, 2.174276], [41.399015, 2.174235], [41.399463, 2.174194], [41.399912, 2.174153], [41.400360, 2.174111], [41.400809, 2.17407], [41.401258, 2.174029], [41.401706, 2.173988], [41.402155, 2.173947], [41.402603, 2.173905], [41.403052, 2.173864], [41.403501, 2.173823], [41.403949, 2.173782], [41.404008, 2.173776], [41.404015, 2.173768], [41.403713, 2.173356], [41.403695, 2.17338], [41.403682, 2.173396], [41.40366, 2.173366], [41.403556, 2.173226], [41.403509, 2.173161], [41.403354, 2.172954], [41.402886, 2.172329], [41.40283, 2.172254], [41.402811, 2.172231], [41.402664, 2.172033], [41.402506, 2.171822], [41.402493, 2.171804], [41.402018, 2.17117], [41.401993, 2.171136], [41.401855, 2.17094], [41.401805, 2.170886], [41.401645, 2.170673], [41.40115, 2.170012], [41.401122, 2.169975], [41.400983, 2.169789], [41.400787, 2.169526], [41.400768, 2.169558], [41.400347, 2.169002], [41.400329, 2.16898], [41.400207, 2.168823], [41.400185, 2.168796], [41.400091, 2.168666], [41.40006, 2.168627], [41.400017, 2.168569], [41.399987, 2.168528], [41.399963, 2.168492], [41.399827, 2.168319], [41.399856, 2.168275], [41.399791, 2.168188], [41.399438, 2.167719], [41.399412, 2.167685], [41.399276, 2.167502], [41.399102, 2.167274], [41.398556, 2.16655], [41.39853, 2.166515], [41.398508, 2.166547], [41.398496, 2.166561], [41.398483, 2.166577], [41.398466, 2.166595], [41.398436, 2.166603], [41.398405, 2.166579], [41.398379, 2.166598], [41.398354, 2.166626], [41.398336, 2.166648], [41.398311, 2.166678], [41.398288, 2.166704], [41.398277, 2.166719], [41.398271, 2.166695], [41.398252, 2.16669], [41.398228, 2.166723], [41.398212, 2.166652], [41.3982, 2.166602], [41.398193, 2.166579], [41.398177, 2.166588], [41.398161, 2.166587], [41.398145, 2.166571], [41.398137, 2.166558], [41.397775, 2.1651], [41.39777, 2.165111], [41.397756, 2.165132], [41.397742, 2.16515], [41.397729, 2.16517], [41.397698, 2.165195], [41.397676, 2.165163], [41.397673, 2.165159], [41.397635, 2.165106], [41.397621, 2.165087], [41.3976, 2.165059], [41.397574, 2.165092], [41.397544, 2.165087], [41.397502, 2.165138], [41.396928, 2.16434], [41.396896, 2.164298], [41.396744, 2.164093], [41.396702, 2.16404], [41.396569, 2.163869], [41.396073, 2.163239], [41.396042, 2.163198], [41.395898, 2.163013], [41.395868, 2.162971], [41.395699, 2.16276], [41.395013, 2.16185], [41.395042, 2.161814], [41.395058, 2.161794], [41.395037, 2.161713], [41.395032, 2.161691], [41.395017, 2.161671], [41.394946, 2.161761], [41.394918, 2.161797], [41.394806, 2.16165], [41.394693, 2.1615], [41.394651, 2.161555], [41.393968, 2.162407], [41.393937, 2.162445], [41.393833, 2.162575], [41.393817, 2.162595], [41.393749, 2.16268], [41.393081, 2.163515], [41.392997, 2.16362], [41.392987, 2.163633], [41.392957, 2.163671], [41.392891, 2.163754], [41.392226, 2.164582], [41.39215, 2.164683], [41.392095, 2.164756], [41.392046, 2.164819], [41.391961, 2.164933]
];

export const INITIAL_ITINERARY: Activity[] = [
 {
    "id": "1",
    "title": "Llegada al Puerto de Barcelona",
    "startTime": "08:00",
    "endTime": "08:00",
    "locationName": "Terminal de Cruceros Barcelona",
    "coords": { "lat": 41.362895, "lng": 2.181948 },
    "description": "Llegada del barco a puerto. Preparación para el desembarque.",
    "keyDetails": "Tener a mano la tarjeta de embarque.",
    "priceEUR": 0,
    "type": "logistics",
    "completed": false,
    "notes": "CRITICAL"
 },
 {
    "id": "2",
    "title": "Desembarco y Shuttle (Cruise Bus)",
    "startTime": "09:45",
    "endTime": "10:15",
    "locationName": "Terminal de Cruceros",
    "endLocationName": "Monumento a Colón",
    "coords": { "lat": 41.362895, "lng": 2.181948 },
    "endCoords": { "lat": 41.375798, "lng": 2.177774 },
    "description": "Traslado en autobús lanzadera (Cruise Bus azul) hasta el Monumento a Colón.",
    "keyDetails": "Comprar ticket en el bus (aprox 4.50€ ida/vuelta).",
    "priceEUR": 4.5,
    "type": "transport",
    "completed": false,
    "contingencyNote": "Si hay mucha cola, valorar taxi compartido (15-20€)."
 },
 {
    "id": "3",
    "title": "Metro a Sagrada Familia",
    "startTime": "10:40",
    "endTime": "11:10",
    "locationName": "Metro Drassanes (L3)",
    "endLocationName": "Metro Sagrada Familia",
    "coords": { "lat": 41.376913, "lng": 2.1759 },
    "endCoords": { "lat": 41.40406, "lng": 2.173935 },
    "description": "L3 Drassanes -> Paral·lel (transbordo) -> L2 Sagrada Família.",
    "keyDetails": "Usar tarjeta T-Familiar. Atención carteristas.",
    "priceEUR": 2.9,
    "type": "transport",
    "completed": false,
    "googleMapsUrl": "https://maps.app.goo.gl/pcdyeNVY2btj4WPS8"
 },
 {
    "id": "4",
    "title": "Basílica Sagrada Familia",
    "startTime": "11:20",
    "endTime": "12:20",
    "locationName": "Sagrada Família",
    "coords": { "lat": 41.40406, "lng": 2.173935 },
    "description": "Visita exterior de la Fachada de la Pasión y Natividad. Obra magna de Gaudí.",
    "keyDetails": "Fotos desde Plaza de Gaudí (parque con lago).",
    "priceEUR": 0,
    "type": "sightseeing",
    "completed": false,
    "contingencyNote": "Entrada estricta con hora reservada. Si no hay tickets, visitar tienda oficial."
 },
 {
    "id": "5",
    "title": "Paseo Modernista a La Pedrera",
    "startTime": "12:20",
    "endTime": "12:50",
    "locationName": "Calle Mallorca / Provença",
    "endLocationName": "La Pedrera (Casa Milà)",
    "coords": { "lat": 41.40406, "lng": 2.173935 },
    "endCoords": { "lat": 41.395174, "lng": 2.161777 },
    "description": "Caminata por el Eixample admirando la arquitectura de Barcelona.",
    "keyDetails": "Distancia 1.4km. Ruta agradable y plana.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false
 },
 {
    "id": "6",
    "title": "Casa Batlló",
    "startTime": "12:50",
    "endTime": "13:00",
    "locationName": "Passeig de Gràcia",
    "coords": { "lat": 41.391714, "lng": 2.165002 },
    "description": "Bajada por Paseo de Gracia hasta la Manzana de la Discordia.",
    "keyDetails": "Admirar fachada y Casa Amatller (al lado).",
    "priceEUR": 0,
    "type": "sightseeing",
    "completed": false
 },
 {
    "id": "7",
    "title": "Metro Paseo de Gràcia a Liceu",
    "startTime": "13:00",
    "endTime": "13:20",
    "locationName": "Metro Paseo de Gràcia (L3)",
    "endLocationName": "Metro Liceu",
    "coords": { "lat": 41.391519, "lng": 2.165324 },
    "endCoords": { "lat": 41.381229, "lng": 2.173064 },
    "description": "L3 directa (Línea Verde) dirección Zona Universitària. 2 paradas.",
    "keyDetails": "Transbordo gratuito si ha pasado poco tiempo.",
    "priceEUR": 2.9,
    "type": "transport",
    "completed": false,
    "googleMapsUrl": "https://maps.app.goo.gl/PZegJ2aRa87uQQdk7"
 },
 {
    "id": "8",
    "title": "Paseo de La Rambla al Barrio Gótico",
    "startTime": "13:30",
    "endTime": "14:00",
    "locationName": "Mercado de la Boquería",
    "coords": { "lat": 41.3817, "lng": 2.1716 },
    "description": "El famoso Mercado de la Boquería esta cerrado por ser Domingo",
    "keyDetails": "Evitar terrazas y sitios para comer que son muy caros en esta zona",
    "priceEUR": 0,
    "type": "walk",
    "completed": false
 },
 {
    "id": "9",
    "title": "Barrio Gótico y Catedral del Mar",
    "startTime": "14:00",
    "endTime": "14:30",
    "locationName": "Basílica de Santa Maria del Mar",
    "coords": { "lat": 41.38367, "lng": 2.18189 },
    "description": "Paseo histórico por las callejuelas del centro.",
    "keyDetails": "La Catedral del Mar.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false
 },
 {
    "id": "10",
    "title": "Regreso a Shuttle ",
    "startTime": "14:30",
    "endTime": "15:00",
    "locationName": "Catedral del Mar",
    "endLocationName": "Monumento a Colón",
    "coords": { "lat": 41.3833, "lng": 2.1764 },
    "endCoords": { "lat": 41.3758, "lng": 2.1778 },
    "description": "Paseo por el Paseo Marítimo para tomar el shuttle.",
    // Added missing keyDetails property to fix TS error
    "keyDetails": "Paseo de unos 20-25 minutos por el frente marítimo.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false
 },
 {
    "id": "11",
    "title": "Shuttle Bus al Barco / COMEMOS EN EL BARCO",
    "startTime": "15:00",
    "endTime": "15:30",
    "locationName": "Monumento a Colón",
    "endLocationName": "Terminal de Cruceros",
    "coords": { "lat": 41.3758, "lng": 2.1778 },
    "endCoords": { "lat": 41.3628, "lng": 2.1819 },
    "description": "Autobús de vuelta a la terminal. Suele haber cola.",
    "keyDetails": "Tener el ticket de vuelta preparado.",
    "priceEUR": 0,
    "type": "transport",
    "completed": false
 },
 {
    "id": "12",
    "title": "TODOS A BORDO",
    "startTime": "17:30",
    "endTime": "17:30",
    "locationName": "Terminal de Cruceros",
    "coords": { "lat": 41.362895, "lng": 2.181948 },
    "description": "Límite de tiempo para estar en el barco. Control de seguridad.",
    "keyDetails": "Verificar hora real en diario de a bordo.",
    "priceEUR": 0,
    "type": "logistics",
    "completed": false,
    "notes": "CRITICAL",
    "contingencyNote": "El barco no espera. ¡No llegues tarde!"
 },
 {
    "id": "13",
    "title": "Zarpe del Barco",
    "startTime": "18:00",
    "endTime": "18:00",
    "locationName": "Puerto de Barcelona",
    "coords": { "lat": 41.362895, "lng": 2.181948 },
    "description": "Salida del puerto. Fin de la escala.",
    "keyDetails": "Disfrutar del skyline de Barcelona desde cubierta.",
    "priceEUR": 0,
    "type": "logistics",
    "completed": false
 }
];

export const PRONUNCIATIONS: Pronunciation[] = [
    { word: 'Bon dia', phonetic: "Bon dee-ah", simplified: 'Bon día', meaning: 'Buenos días' },
    { word: 'Gràcies', phonetic: "Grah-sy-es", simplified: 'Gracias', meaning: 'Gracias' },
    { word: 'On es el bany?', phonetic: "On es el bah-ny?", simplified: 'Dové el baño', meaning: '¿Dónde está el baño?' },
    { word: 'El compte, si us plau', phonetic: "El compte sees plaw", simplified: 'La cuenta', meaning: 'La cuenta, por favor' },
    { word: 'Si us plau', phonetic: "Sees plaw", simplified: 'Por favor', meaning: 'Por favor' }
];