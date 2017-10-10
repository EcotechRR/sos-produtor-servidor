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
var tutorialRef = firebase.database().ref('tutorial');
 
// Listen for form submit 
document.getElementById("tutorialForm").addEventListener('submit', submitClick);


function submitClick(e){
	e.preventDefault();
	
	var titulo = getInputVal('titulo');
	var imagem = getInputVal('imagem');
	var Produto = getInputVal('produto');
	var anolancamento = getInputVal('anolancamento');
	var encontrar = getInputVal('encontrar');
	var local = getInputVal('local');
	var cep = getInputVal('cep');
	var caixapostal = getInputVal('caixapostal');
	var telefone = getInputVal('telefone');
	var resumo = getInputVal('resumo');


	savetutorial(titulo,imagem,Produto,anolancamento,encontrar,local,cep,caixapostal,telefone,resumo);

}

function getInputVal(id){
	return document.getElementById(id).value;
}

// Save message to firebase
function savetutorial(titulo,imagem,Produto,anolancamento,encontrar,local,cep,caixapostal,telefone,resumo){
  var newtutorialRef = tutorialRef.push();
  newtutorialRef.set({
    titulo: titulo,
	imagem: imagem,
	Produto: Produto,
	anolancamento: anolancamento,
	informacao:{
		encontrar: encontrar,
		local: local,
		cep: cep,
		caixapostal: caixapostal,
		telefone: telefone
	},
	resumo: resumo
  });
 
}
