const juan1 = {
  name: "ufasario",
  username: "juandxd",
  points: 199,
  socialMedia: {
    twitter: "ASDafsd",
    instagram: "asfaf",
    faceboook: undefined,
  },
  approvedCourses: ["UFA I", "UFA II", "UFA III"],
  learningPATS: [
    {
      name: "EScuela DEV",
      courses: ["UFA I", "UFA II", "UFA III"],
    },
    {
      name: "EScuela DEVVIDEOJUEGOS",
      courses: ["UFA I", "UFA II", "UFA III", "UFASAURIO III"],
    },
  ],
};

const miguelito1 = {
  name: "miguelito",
  username: "miguelitoxd",
  points: 1990,
  socialMedia: {
    twitter: "ASDafsdasda",
    instagram: "asfafasd",
    faceboook: "miguel ",
  },
  approvedCourses: ["UFA I", "UFA II", "UFA III", "DATABUSSINES"],
  learningPATS: [
    {
      name: "EScuela DEV",
      courses: ["UFA I", "UFA II", "UFA III", "databusiines"],
    },
    {
      name: "EScuela DEVVIDEOJUEGOS",
      courses: ["UFA I", "UFA II", "UFA III", "UFASAURIO III"],
    },
  ],
};

//vamos a crear clases

class Student {
  constructor({
    name,
    email,
    username,
    twitter,
    instagram,
    faceboook,
    approvedCourses = [],
    learningPATS = [],
  }) {
    (this.name = name),
      (this.email = email),
      (this.username = username),
      (this.socialMedia = {
        // this.twitter=twitter,
        //this.instagram=instagram,
        //this.faceboook=faceboook,
        twitter,
        instagram,
        faceboook,
      });

    (this.approvedCourses = approvedCourses = []),
      (this.learningPATS = learningPATS = []);
  }
}

const juan = new Student({
  name: "miguelito",
  username: "miguelitoxd",
  email: "suapsdas",

  twitter: "ASDafsdasda",
  instagram: "asfafasd",
  faceboook: "miguel ",
});
