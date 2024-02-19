/// <reference path="Subject.ts"/>
/// <reference path="Teacher.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export interface ClassJavaInterface extends SubjectClassInterface {
    getRequirements(): string,
    getAvailableTeacher(): string,
  }

  export class Java extends Subject implements ClassJavaInterface {
    teacher: Teacher;
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }


}
