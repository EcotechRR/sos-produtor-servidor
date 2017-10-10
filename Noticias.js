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
var noticiaRef = firebase.database().ref('noticias');
 
// Listen for form submit 
document.getElementById("noticiasForm").addEventListener('submit', submitClick);


function submitClick(e){
	e.preventDefault();
	
	var categ =  getInputVal('categoria');
	var conteu = getInputVal('conteudo');
	var data = getInputVal('data');
	var imagem = getInputVal('imagem');
	var titulo = getInputVal('titulo');
	var aut = getInputVal('autor');
	var codig = getInputVal('codigo');
	var emai = getInputVal('email');
	var telef = getInputVal('telefone');
	var unida = getInputVal('unidade');

	savenoticia(titulo,data,categ,imagem,conteu,aut,codig,emai,telef,unida);

}

function getInputVal(id){
	return document.getElementById(id).value;
}

// Save message to firebase
function savenoticia(titulo,data,categ,imagem,conteu,aut,codig,emai,telef,unida){
  var newnoticiaRef = noticiaRef.push();
  newnoticiaRef.set({
    titulo: titulo,
    data:data,
    categoria:categ,
    imagem:imagem,
	conteudo:conteu,
	unidade:{
		autor:aut,
		codigo:codig,
		email:emai,
		telefone:telef,
		unidade:unida
	}
  });
}
