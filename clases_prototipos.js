//prototipos con la sintaxis de clases

class Student {
  constructor(name, age, cursos) {
    this.name = name;
    this.age = age;
    this.cursos = cursos;
    //es posible crear :
    //this.aprobar=fucntion(){}
  }
  aprobarCurso(nuevoCurso) {
    this.cursos.push(nuevoCurso);
  }
}

const miguelito = new Student("SANTI", 20, ["UFA I", "UFA II"]);

//podemos recibir solo un parametro que se aun objeto
//los argunmentos son muy utilizes por el paso por objetos o patron roro
class Student1 {
  constructor({ name, age, cursos = [] }) {
    this.name = name;
    this.age = age;
    this.cursos = cursos;
    //es posible crear :
    //this.aprobar=fucntion(){}
  }
  aprobarCurso(nuevoCurso) {
    this.cursos.push(nuevoCurso);
  }
}
const santi = new Student1({
  name: "SANTIX",
  age: 20,
  cursos: ["UFA I", "UFA II"],
});
