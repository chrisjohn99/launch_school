function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(code, note) {
      let courseIdx = this.courses.findIndex((course) => course.code === code);

      if (this.courses[courseIdx].note) {
        this.courses[courseIdx].note += `; ${note}`;
      } else {
        this.courses[courseIdx].note = note;
      }
    },

    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(code, note) {
      let courseIdx = this.courses.findIndex((course) => course.code === code);

      this.courses[courseIdx].note = note;
    },
  };
}

let foo = createStudent("Foo", "1st");
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: "Math", code: 101 });
foo.addCourse({ name: "Advanced Math", code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for algebra");
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, "Difficult subject");
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, "Fun course");
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
