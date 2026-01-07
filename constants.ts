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
    { name: "EDIFICIO WORLD TRADE CENTER", lat: 41.371587, lng: 2.181265 },
    { name: "CRUISE BUS (AZUL)", lat: 41.37182, lng: 2.179492 },
    { name: "METRO DRASSANES", lat: 41.376913, lng: 2.1759 },
    { name: "MONUMENTO A COLÓN", lat: 41.375798, lng: 2.177774 },
    { name: "METRO PASEO DE GRACIA", lat: 41.391519, lng: 2.165324 },
    { name: "LA PEDRERA - RUTA DEL MODERNISMO", lat: 41.395174, lng: 2.161777 },
    { name: "Casa Batlló", lat: 41.391714, lng: 2.165002 },
    { name: "METRO SAGRADA FAMILIA", lat: 41.40406, lng: 2.173935 },
    { name: "METRO JAUME I", lat: 41.383988, lng: 2.178874 },
    { name: "LA CATEDRAL DEL MAR - RUTA DEL BARRIO GOTICO", lat: 41.383497, lng: 2.181772 },
    { name: "TERMINAL DE CRUCEROS", lat: 41.362895, lng: 2.181948 },
    { name: "METRO DIAGONAL", lat: 41.395839, lng: 2.159938 },
    { name: "LA BOQUERIA - CERRADA EN DOMINGO", lat: 41.381939, lng: 2.172071 },
    { name: "CATEDRAL DE BARCELONA", lat: 41.382326, lng: 2.173742 }
];

export const BARCELONA_TRACK: [number, number][] = [
    [41.372324, 2.178648], [41.372887, 2.17745], [41.372917, 2.177385], [41.372972, 2.177428], [41.373037, 2.177476], [41.373068, 2.177503], [41.37313, 2.177367], [41.373184, 2.177454], [41.373252, 2.177521], [41.373263, 2.177498], [41.373271, 2.177471], [41.373342, 2.177504], [41.373413, 2.177503], [41.373499, 2.177467], [41.373579, 2.177382], [41.373605, 2.177352], [41.373643, 2.177283], [41.373674, 2.177209], [41.373695, 2.177127], [41.373693, 2.177067], [41.373759, 2.177082], [41.373804, 2.177089], [41.373851, 2.177097], [41.373873, 2.177097], [41.373908, 2.177097], [41.373941, 2.177095], [41.373977, 2.177095], [41.374094, 2.177062], [41.374228, 2.177], [41.374383, 2.176848], [41.374469, 2.1769], [41.37453, 2.17695], [41.375254, 2.177528], [41.375264, 2.177507], [41.37529, 2.177448], [41.375317, 2.177388], [41.375326, 2.177367], [41.375331, 2.177356], [41.37537, 2.177393], [41.375395, 2.177412], [41.375444, 2.177454], [41.375491, 2.177492], [41.375516, 2.177509], [41.375552, 2.177535], [41.375564, 2.177537], [41.37557, 2.17753], [41.375591, 2.177512], [41.375627, 2.177482], [41.375663, 2.177467], [41.375685, 2.17746], [41.375711, 2.177458], [41.375761, 2.17746], [41.375775, 2.177447], [41.37584, 2.177405], [41.375934, 2.177343], [41.375944, 2.177297], [41.376069, 2.177197], [41.376092, 2.177229], [41.376564, 2.176819], [41.37656, 2.176808], [41.376553, 2.176794], [41.37654, 2.176765], [41.376524, 2.176732], [41.376817, 2.176473], [41.376994, 2.176314], [41.377026, 2.17629], [41.377034, 2.176255], [41.377482, 2.176213], [41.377931, 2.176172], [41.378379, 2.176131], [41.378828, 2.17609], [41.379276, 2.176048], [41.379725, 2.176007], [41.380174, 2.175966], [41.380622, 2.175925], [41.381071, 2.175884], [41.381519, 2.175842], [41.381968, 2.175801], [41.382417, 2.17576], [41.382865, 2.175719], [41.383314, 2.175678], [41.383762, 2.175636], [41.384211, 2.175595], [41.38466, 2.175554], [41.385108, 2.175513], [41.385557, 2.175471], [41.386005, 2.17543], [41.386454, 2.175389], [41.386903, 2.175348], [41.387351, 2.175307], [41.3878, 2.175265], [41.388248, 2.175224], [41.388697, 2.175183], [41.389146, 2.175142], [41.389594, 2.175101], [41.390043, 2.175059], [41.390491, 2.175018], [41.39094, 2.174977], [41.391389, 2.174936], [41.391837, 2.174895], [41.392286, 2.174853], [41.392734, 2.174812], [41.393183, 2.174771], [41.393632, 2.17473], [41.39408, 2.174688], [41.394529, 2.174647], [41.394977, 2.174606], [41.395426, 2.174565], [41.395875, 2.174524], [41.396323, 2.174482], [41.396772, 2.174441], [41.39722, 2.1744], [41.397669, 2.174359], [41.398118, 2.174318], [41.398566, 2.174276], [41.399015, 2.174235], [41.399463, 2.174194], [41.399912, 2.174153], [41.40036, 2.174111], [41.400809, 2.17407], [41.401258, 2.174029], [41.401706, 2.173988], [41.402155, 2.173947], [41.402603, 2.173905], [41.403052, 2.173864], [41.403501, 2.173823], [41.403949, 2.173782], [41.404008, 2.173776], [41.404015, 2.173768], [41.403713, 2.173356], [41.403695, 2.17338], [41.403682, 2.173396], [41.40366, 2.173366], [41.403556, 2.173226], [41.403509, 2.173161], [41.403354, 2.172954], [41.402886, 2.172329], [41.40283, 2.172254], [41.402811, 2.172231], [41.402664, 2.172033], [41.402506, 2.171822], [41.402493, 2.171804], [41.402018, 2.17117], [41.401993, 2.171136], [41.401855, 2.17094], [41.401805, 2.170886], [41.401645, 2.170673], [41.40115, 2.170012], [41.401122, 2.169975], [41.400983, 2.169789], [41.400787, 2.169526], [41.400768, 2.169558], [41.400347, 2.169002], [41.400329, 2.16898], [41.400207, 2.168823], [41.400185, 2.168796], [41.400091, 2.168666], [41.40006, 2.168627], [41.400017, 2.168569], [41.399987, 2.168528], [41.399963, 2.168492], [41.399827, 2.168319], [41.399856, 2.168275], [41.399791, 2.168188], [41.399438, 2.167719], [41.399412, 2.167685], [41.399276, 2.167502], [41.399102, 2.167274], [41.398556, 2.16655], [41.39853, 2.166515], [41.398508, 2.166547], [41.398496, 2.166561], [41.398483, 2.166577], [41.398466, 2.166595], [41.398436, 2.166503], [41.398405, 2.166579], [41.398379, 2.166598], [41.398354, 2.166626], [41.398336, 2.166648], [41.398311, 2.166678], [41.398288, 2.166704], [41.398277, 2.166719], [41.398271, 2.166695], [41.398252, 2.16669], [41.398228, 2.166723], [41.398212, 2.166652], [41.3982, 2.166602], [41.398193, 2.166579], [41.398177, 2.166588], [41.398161, 2.166587], [41.398145, 2.166571], [41.398137, 2.166558], [41.397775, 2.1651], [41.39777, 2.165111], [41.397756, 2.165132], [41.397742, 2.16515], [41.397729, 2.16517], [41.397698, 2.165195], [41.397676, 2.165163], [41.397673, 2.165159], [41.397635, 2.165106], [41.397621, 2.165087], [41.3976, 2.165059], [41.397574, 2.165092], [41.397544, 2.165087], [41.397502, 2.165138], [41.396928, 2.16434], [41.396896, 2.164298], [41.396744, 2.164093], [41.396702, 2.16404], [41.396569, 2.163869], [41.396073, 2.163239], [41.396042, 2.163198], [41.395898, 2.163013], [41.395868, 2.162971], [41.395699, 2.16276], [41.395013, 2.16185], [41.395042, 2.161814], [41.395058, 2.161794], [41.395037, 2.161713], [41.395032, 2.161691], [41.395017, 2.161671], [41.394946, 2.161761], [41.394918, 2.161797], [41.394806, 2.16165], [41.394693, 2.1615], [41.394651, 2.161555], [41.393968, 2.162407], [41.393937, 2.162445], [41.393833, 2.162575], [41.393817, 2.162595], [41.393749, 2.16268], [41.393081, 2.163515], [41.392997, 2.16362], [41.392987, 2.163633], [41.392957, 2.163671], [41.392891, 2.163754], [41.392226, 2.164582], [41.39215, 2.164683], [41.392095, 2.164756], [41.392046, 2.164819], [41.391961, 2.164933], [41.391570, 2.165229], [41.391179, 2.165525], [41.390788, 2.165822], [41.390397, 2.166118], [41.390006, 2.166414], [41.389616, 2.166711], [41.389225, 2.167007], [41.388834, 2.167304], [41.388443, 2.167600], [41.388052, 2.167896], [41.387661, 2.168193], [41.387271, 2.168489], [41.386880, 2.168786], [41.386489, 2.169082], [41.386098, 2.169378], [41.385707, 2.169675], [41.385317, 2.169971], [41.384926, 2.170268], [41.384535, 2.170564], [41.384144, 2.170860], [41.383753, 2.171157], [41.383362, 2.171453], [41.382972, 2.171750], [41.382581, 2.172046], [41.382190, 2.172342], [41.381799, 2.172639], [41.381408, 2.172935], [41.381232, 2.173069], [41.381229, 2.173064], [41.381241, 2.173054], [41.381251, 2.173103], [41.381257, 2.173194], [41.381293, 2.173274], [41.381307, 2.173301], [41.381326, 2.173341], [41.381333, 2.173355], [41.38138, 2.173464], [41.38142, 2.173436], [41.381565, 2.173387], [41.38159, 2.173389], [41.381852, 2.173416], [41.381884, 2.173429], [41.381885, 2.173430], [41.381974, 2.173468], [41.38224, 2.173661], [41.382389, 2.173767], [41.382421, 2.173887], [41.38240, 2.173928], [41.382293, 2.17423], [41.382072, 2.174432], [41.382035, 2.174553], [41.381902, 2.174694], [41.381636, 2.174832], [41.38167, 2.174953], [41.381752, 2.175273], [41.381752, 2.175273], [41.381838, 2.175513], [41.381776, 2.175591], [41.381757, 2.175651], [41.381661, 2.175845], [41.381667, 2.175852], [41.381979, 2.176239], [41.382151, 2.176467], [41.382424, 2.176798], [41.382439, 2.176816], [41.382767, 2.177231], [41.38283, 2.177311], [41.38284, 2.177394], [41.382852, 2.177408], [41.383032, 2.177631], [41.383312, 2.177995], [41.383703, 2.178477], [41.383832, 2.178635], [41.383845, 2.17866], [41.383845, 2.17866], [41.383855, 2.178707], [41.383848, 2.178738], [41.383728, 2.178901], [41.383783, 2.17897], [41.383809, 2.178998], [41.383828, 2.179032], [41.383838, 2.179038], [41.383878, 2.179009], [41.383893, 2.17905], [41.383863, 2.179213], [41.383837, 2.179354], [41.383743, 2.179838], [41.383707, 2.180138], [41.383666, 2.180409], [41.383621, 2.180659], [41.383582, 2.180881], [41.383533, 2.18149], [41.383523, 2.181518], [41.383465, 2.181681], [41.383394, 2.181826], [41.38335, 2.181917], [41.383245, 2.181889], [41.383185, 2.181835], [41.383122, 2.181924], [41.383015, 2.182076], [41.382874, 2.182324], [41.382695, 2.182188], [41.38261, 2.182129], [41.382576, 2.182206], [41.382543, 2.182213], [41.382475, 2.182178], [41.382385, 2.182109], [41.382348, 2.182195], [41.381875, 2.181807], [41.381814, 2.181754], [41.381783, 2.181816], [41.38164, 2.182006], [41.381552, 2.182183], [41.381555, 2.182200], [41.381605, 2.182253], [41.381597, 2.182270], [41.381589, 2.182278], [41.381552, 2.182315], [41.38153, 2.182336], [41.38151, 2.182355], [41.381485, 2.182380], [41.381462, 2.182403], [41.381443, 2.182420], [41.381421, 2.182443], [41.381385, 2.182477], [41.381364, 2.182498], [41.381295, 2.182446], [41.381243, 2.182464], [41.38122, 2.182495], [41.381206, 2.182531], [41.381187, 2.182515], [41.381073, 2.182669], [41.381039, 2.182725], [41.381012, 2.182780], [41.380976, 2.182882], [41.380918, 2.182842], [41.380852, 2.182796], [41.380791, 2.182743], [41.380729, 2.182833], [41.380702, 2.182848], [41.380676, 2.182860], [41.380642, 2.182755], [41.380547, 2.182545], [41.380419, 2.182620], [41.38039, 2.182638], [41.380323, 2.182694], [41.380295, 2.182697], [41.380255, 2.182702], [41.380212, 2.182668], [41.379893, 2.182378], [41.379838, 2.182284], [41.379417, 2.181942], [41.37938, 2.182031], [41.378459, 2.181304], [41.377543, 2.180572], [41.376526, 2.179776], [41.376499, 2.179799], [41.376476, 2.179847], [41.376074, 2.179525], [41.375938, 2.179347], [41.375889, 2.179308], [41.375775, 2.179216], [41.375712, 2.179160], [41.375786, 2.178980], [41.37542, 2.178649], [41.374919, 2.178252], [41.374874, 2.178222], [41.374042, 2.177551], [41.373997, 2.177515], [41.373970, 2.177498], [41.373955, 2.177484], [41.373919, 2.177457], [41.37386, 2.177587], [41.373761, 2.177644], [41.373735, 2.177632], [41.373712, 2.177687], [41.37370, 2.177728], [41.373582, 2.177651], [41.373559, 2.177643], [41.373538, 2.177651], [41.373464, 2.177819], [41.373433, 2.177885], [41.373439, 2.177902], [41.373256, 2.178313], [41.373228, 2.178291], [41.373214, 2.178321], [41.372905, 2.178144], [41.372538, 2.178956]
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
    "description": "Visita exterior de la Fachada de la Pasión y Natividad. La gran obra maestra inacabada de Antoni Gaudí.",
    "keyDetails": "Fotos desde Plaza de Gaudí (parque con lago).",
    "priceEUR": 0,
    "type": "sightseeing",
    "completed": false,
    "contingencyNote": "Entrada estricta con hora reservada. Si no hay tickets, visitar tienda oficial.",
    "audioGuideText": "Estás ante el monumento más visitado de España. La Sagrada Familia es una biblia en piedra. Gaudí dedicó sus últimos 12 años exclusivamente a esta basílica. Observa la Fachada del Nacimiento: es una explosión de vida y naturaleza. Al otro lado, la Fachada de la Pasión es austera y angular, representando el sufrimiento. Cuando se termine, su torre central será el punto más alto de Barcelona, pero siempre un metro por debajo de la montaña de Montjuic, porque Gaudí decía que la obra del hombre no debe superar a la de Dios."
 },
 {
    "id": "5",
    "title": "Paseo Modernista a La Pedrera",
    "startTime": "12:20",
    "endTime": "12:50",
    "locationName": "Paseo de Gracia",
    "endLocationName": "La Pedrera (Casa Milà)",
    "coords": { "lat": 41.40406, "lng": 2.173935 },
    "endCoords": { "lat": 41.395174, "lng": 2.161777 },
    "description": "Caminata por el Eixample, el corazón del diseño burgués de principios del siglo XX.",
    "keyDetails": "Distancia 1.4km. Ruta agradable y plana.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false,
    "audioGuideText": "Estamos recorriendo el Eixample, un barrio diseñado con una cuadrícula perfecta por Ildefons Cerdà. Al final de este paseo nos espera La Pedrera. Su nombre oficial es Casa Milà, pero los barceloneses la apodaron 'la cantera' por su aspecto rudo de piedra ondulada. Gaudí se inspiró en las formas de la naturaleza, por eso no verás ni una sola línea recta en su fachada. Sus balcones de hierro forjado parecen algas marinas y su azotea es famosa por las chimeneas que parecen guerreros petrificados."
 },
 {
    "id": "6",
    "title": "Casa Batlló",
    "startTime": "12:50",
    "endTime": "13:00",
    "locationName": "Passeig de Gràcia",
    "coords": { "lat": 41.391714, "lng": 2.165002 },
    "description": "Admiración de la joya de la 'Manzana de la Discordia'. La fachada más colorida de la ciudad.",
    "keyDetails": "Admirar fachada y Casa Amatller (al lado).",
    "priceEUR": 0,
    "type": "sightseeing",
    "completed": false,
    "audioGuideText": "Mira la fachada de la Casa Batlló. Es una de las obras más creativas de Gaudí. Muchos ven en ella la leyenda de Sant Jordi: el tejado escamoso es el lomo del dragón, y la torre con la cruz es la lanza del caballero. Las columnas de las plantas bajas parecen huesos, por eso también se la conoce como la 'Casa de los Huesos'. Los balcones tienen forma de antifaces, y todo el conjunto brilla con fragmentos de cerámica de colores que imitan la superficie de un mar en calma."
 },
 {
    "id": "7",
    "title": "Metro Paseo de Gràcia a Liceu",
    "startTime": "13:00",
    "endTime": "13:20",
    "locationName": "Metro Paseo de Gràcia (L3)",
    "endLocationName": "Metro Liceu",
    "coords": { "lat": 41.391519, "lng": 2.165324 },
    "endCoords": { "lat": 41.381387, "lng": 2.173061 },
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
    "coords": { "lat": 41.381939, "lng": 2.172071 },
    "description": "Recorrido por la vía más famosa de Barcelona hacia el laberinto medieval.",
    "keyDetails": "Evitar terrazas y sitios para comer que son muy caros en esta zona",
    "priceEUR": 0,
    "type": "walk",
    "completed": false,
    "audioGuideText": "Caminas por Las Ramblas, un antiguo torrente de agua que hoy es la arteria de la ciudad. A tu derecha está el Mercado de la Boquería; aunque hoy domingo esté cerrado, su estructura metálica de mil novecientos catorce sigue siendo impresionante. Al adentrarnos en las calles laterales, pasamos del ruido de la rambla al silencio del Barrio Gótico. Aquí se encontraba la antigua ciudad romana de Barcino y todavía hoy podemos ver restos de sus murallas y el trazado de sus plazas señoriales."
 },
 {
    "id": "9",
    "title": "Barrio Gótico y Catedral del Mar",
    "startTime": "14:00",
    "endTime": "14:30",
    "locationName": "Basílica de Santa Maria del Mar",
    "coords": { "lat": 41.383497, "lng": 2.181772 },
    "description": "Paseo histórico por las callejuelas del centro. El corazón de la Barcelona medieval.",
    "keyDetails": "La Catedral del Mar.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false,
    "audioGuideText": "Llegamos a Santa Maria del Mar, conocida como la Catedral del Mar. Es el ejemplo más perfecto del gótico catalán. A diferencia del gótico francés, aquí prima la horizontalidad y la sobriedad. Fue construida en un tiempo récord de cincuenta y cuatro años gracias al esfuerzo de los 'bastaixos', los estibadores del puerto, que cargaban las piedras una a una desde la montaña de Montjuic. Su interior es un espacio diáfano y elegante donde la luz juega un papel fundamental a través de sus rosetones."
 },
 {
    "id": "10",
    "title": "Regreso a Shuttle ",
    "startTime": "14:30",
    "endTime": "15:00",
    "locationName": "Catedral del Mar",
    "endLocationName": "Monumento a Colón",
    "coords": { "lat": 41.383497, "lng": 2.181772 },
    "endCoords": { "lat": 41.375798, "lng": 2.177774 },
    "description": "Paseo por el Paseo Marítimo para tomar el shuttle. Disfrutando de la brisa marina.",
    "keyDetails": "Paseo de unos 20-25 minutos por el frente marítimo.",
    "priceEUR": 0,
    "type": "walk",
    "completed": false,
    "audioGuideText": "Estamos regresando hacia el puerto por el frente marítimo. A tu izquierda queda el Port Vell, el puerto antiguo, que fue renovado totalmente para las Olimpiadas de mil novecientos noventa y dos. Al fondo verás la columna de Colón, con el almirante señalando hacia el mar. Es el momento ideal para tomar las últimas fotos del skyline de Barcelona y prepararnos para el regreso al barco. Recuerda verificar que tienes contigo todos los tickets y la tarjeta del crucero."
 },
 {
    "id": "11",
    "title": "Shuttle Bus al Barco / COMEMOS EN EL BARCO",
    "startTime": "15:00",
    "endTime": "15:30",
    "locationName": "Monumento a Colón",
    "endLocationName": "Terminal de Cruceros",
    "coords": { "lat": 41.375798, "lng": 2.177774 },
    "endCoords": { "lat": 41.362895, "lng": 2.181948 },
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