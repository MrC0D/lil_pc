/*lectura de archivos .ch
--------------------------------*/
let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
/*intrucciones del simulador
------------------------------ */
let palabrasClave = Array(
    "cargue",
    "almacene",
    "nueva",
    "lea",
    "sume",
    "reste",
    "multiplique",
    "divida",
    "potencia",
    "modulo",
    "concatene",
    "elimine",
    "extraiga",
    "y",
    "o",
    "no",
    "muestre",
    "imprima",
    "vaya",
    "vayasi",
    "etiqueta",
    "retorne"
);

//------implementacion de funciones del simulador-------
function instruccion(inst){

}

function sintaxis(linea) {
    let chars=linea.split(" ");

    if (chars[0]=="cargue"){}
    if (chars[0]=="nueva"){}
    if (chars[0]=="lea"){}
    if (chars[0]=="sume"){}
    if (chars[0]=="reste"){}
    if (chars[0]=="multiplique"){}
    if (chars[0]=="divida"){}
    if (chars[0]=="potencia"){}
    if (chars[0]=="modulo"){}
    if (chars[0]=="concatene"){}
    if (chars[0]=="elimine"){}
    if (chars[0]=="extraiga"){}
    if (chars[0]=="y"){}
    if (chars[0]=="o"){}
    if (chars[0]=="no"){}
    if (chars[0]=="muestre"){}
    if (chars[0]=="imprima"){}
    if (chars[0]=="vaya"){}
    if (chars[0]=="vayasi"){}
    if (chars[0]=="etiqueta"){}
    if (chars[0]=="retorne"){}
    else{
        alert("no se reconoce: "+String(chars[0]));
    }

}

//-------lectura del archivo ejecutable------
input.addEventListener('change', () => {
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
    textarea.value = lines.join('\n');
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
});

let btn_cargar=document.getElementById("cargarArchivo");


//-------carga el contenido del archivo--------
btn_cargar.addEventListener("click",()=>{

    alert("programa cargado");
    btn_cargar.style.backgroundColor='yellow';
    /*btn_cargar.style.color="white";*/
    btn_cargar.value="ejecutando...";

    //ejecucion del programa
    let programa=textarea.value;

    let monitor=document.getElementByClass("monitor");
    
    let texto=document.createElemnt("p")
    texto.text=textarea.value;
    
    monitor.appendChild(texto);

    //separando linea a linea el programa
    let lineas=programa.split("\n");

    for(let i=0;i<lineas.length;i++){
        //chequeo sintaxis de cada elemnto en cada linea
        sintaxis(lineas[i].toLowerCase());
        
        //lectura y ejecucion de instrucciones
        //instruccion(lineas[i].toLocaleLowerCase());
    }
});

