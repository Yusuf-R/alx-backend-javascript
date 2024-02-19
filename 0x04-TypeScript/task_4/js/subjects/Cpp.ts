/// <reference path="Subject.ts"/>
/// <reference path="Teacher.ts"/>
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export interface ClassCppInterface extends SubjectClassInterface{
    getRequirements(): string,
    getAvailableTeacher(): string,
  }

  export class Cpp extends Subject implements ClassCppInterface{
    teacher: Teacher;
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}