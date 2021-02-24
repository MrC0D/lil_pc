/*lectura de archivos .ch
--------------------------------
 */

let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

/*chequeo de sintaxis
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
function sume(a,b){
    alert(a+b);
}

function sintaxis(tipo) {
    
    
    
    switch (tipo) {


        case "Sume":
        case "sume":
            alert("cargado exitosamente!");
            sume(1,3);
            textarea.style.backgroundColor="green";
            break;

        /*
        default:
            alert("--> Error encontrado, no se reconoce:\n " + tipo);
            document.getElementById("terminal").innerHTML = "--> Error encontrado, no se reconoce: " + tipo;
            document.getElementById("texto_computador").innerHTML="--> Error encontrado, no se reconoce: " + tipo;
            break;
        */

        /*
        case :
    
        break;
    */

    }

}
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

btn_cargar.addEventListener("click",()=>{

    alert("Cargado :U");
    btn_cargar.style.backgroundColor='red';
    btn_cargar.style.color="white";
    btn_cargar.value="ejecutando...";

    //ejecucion del programa
    let programa=textarea.value;

    //separando elementos individuales(palabras clave, valores)
    let lineas=programa.split(" ");

    for(let i=0;i<lineas.length;i++){
    //chequeo sintaxis de cada elemnto en cada linea
        sintaxis(lineas[i]);
        alert(lineas[i]);
    }




});

