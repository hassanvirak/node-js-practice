function findStudent(students, name) {
    return students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );
}

module.exports = {
    findStudent
};