package com.letsdobro.service;

import com.letsdobro.model.Student;

import java.util.List;

public interface StudentService {

    Student  addStudent(Student student);

    List<Student> getAllStudents();


}
