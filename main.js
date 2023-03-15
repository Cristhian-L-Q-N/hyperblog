//objeto literal natalia
//es un objeto en especifico
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: ["Curso definitivo de HTML", "Curso definitivo de HTML"],
  //vamos a crear metodos
  //metodo para aprobar curso

  //creamos metodos con una funcion anonima:
  aprobarCurso1: function () {},
  //existe la sintaxis
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
//tiene el atributo __photo__ son instancias del Object

//Hacer que natalia apruebe mas cursos
//push lo hereda del prototipo de arraay

//Creacion de un prototipo creamos el molde
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  //2 opciones para metodos
  this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  };
}
//creamos metodos por fuera del molde
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student("Juana", 20, ["ufa , UFAA II"]);

var obj1 = {
  a: 1,
  b: 2,
};

var obj2 = Object.create(obj1);
obj2.a = 2;

console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c);
