  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDfy18-14TZxmuNy-UVvaXmFgL6mKwsSw0",
    authDomain: "bd-embrapa.firebaseapp.com",
    databaseURL: "https://bd-embrapa.firebaseio.com",
    projectId: "bd-embrapa",
    storageBucket: "bd-embrapa.appspot.com",
    messagingSenderId: "147254476795"
  };
  firebase.initializeApp(config);

 // Reference noticias collection
var eventosRef = firebase.database().ref('eventos');
 
// Listen for form submit 
document.getElementById("eventosForm").addEventListener('submit', submitClick);


function submitClick(e){
	e.preventDefault();
	
	var tipo =  getInputVal('tipoevento');
	var titulo = getInputVal('titulo');
	var publicalvo = getInputVal('publicalvo');
	var data = getInputVal('data');
	var hora = getInputVal('hora');
	var unidaderesp = getInputVal('unidaderesp');
	var promovido = getInputVal('promovido');
	var telefone = getInputVal('telefone');
	var email = getInputVal('email');
	var pais = getInputVal('pais');
	var estado = getInputVal('estado');
	var municipio = getInputVal('municipio');
	var resumo = getInputVal('resumo');

	saveventos(tipo,titulo,publicalvo,data,hora,unidaderesp,promovido,telefone,email,pais,estado,municipio,resumo);

}

function getInputVal(id){
	return document.getElementById(id).value;
}

// Save message to firebase
function saveventos(tipo,titulo,publicalvo,data,hora,unidaderesp,promovido,telefone,email,pais,estado,municipio,resumo){
  var neweventosRef = eventosRef.push();
  neweventosRef.set({
    evento: tipo,
    titulo: titulo,
	Resumo: resumo,
	informacao:{
	email: email,
	  unidade: unidaderesp,
	  promovido: promovido,
	  publico: publicalvo,
	  telefone: telefone  
	},
	local:{
		 País: pais,
	  Estado: estado,
	  Municipio: municipio
	},
	data:{
		 data: data,
	  hora: hora
	}
  });
 
}
