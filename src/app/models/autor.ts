export class Autor {

    public nombre : String;
    public apellido : String;
    public edad : number;
    public biografia : String = "";
    public obra = [""];
    public email : String = "";

    constructor(nombre : String, apellido : String, edad : number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
