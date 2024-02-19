/// <reference path="Teacher.ts"/>
namespace Subjects {
  export interface SubjectClassInterface {
    teacher: Teacher; // Use Teacher directly here
    set setTeacher(teacher: Teacher);
  }

  export class Subject implements SubjectClassInterface {
    teacher: Teacher;
    set setTeacher(teacher: Teacher){
      this.teacher = teacher;
    }
  }
}