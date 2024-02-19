/// <reference path="Subject.ts"/>
/// <reference path="Teacher.ts"/>
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export interface ClassReactInterface extends SubjectClassInterface {
    getRequirements(): string,
    getAvailableTeacher(): string,
  }
  
  export class React extends Subject implements ClassReactInterface {
    teacher: Teacher;

    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
