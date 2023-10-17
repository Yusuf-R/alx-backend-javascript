// A template for HolbertonCourse
class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, 'string', 'name');
    this._checkType(length, 'number', 'length');
    this._checkStudentsType(students);
  }

  // setter function
  set name(name) {
    this._checkType(name, 'string', 'name');
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._checkType(length, 'number', 'length');
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._checkStudentsType(students);
  }

  get students() {
    return this._students;
  }

  _checkType(value, expectedType, paramName) {
    if (expectedType === 'string') {
      if (typeof value !== 'string') {
        throw new TypeError(`${paramName} must be a ${expectedType}`);
      }
    }
    if (expectedType === 'number') {
      if (typeof value !== 'number') {
        throw new TypeError(`${paramName} must be a ${expectedType}`);
      }
    }

    if (paramName === 'name') {
      this._name = value;
    } else if (paramName === 'length') {
      this._length = value;
    }
  }

  _checkStudentsType(students) {
    if (typeof students === 'string') {
      this._students = students; // If it's a string, it's valid.
    } else if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students; // If it's an array of strings, it's valid.
    } else {
      throw new TypeError('students must be a string or an array of strings');
    }
  }
}

export default HolbertonCourse;
