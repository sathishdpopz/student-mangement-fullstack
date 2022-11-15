package com.letsdobro.controller;

import com.letsdobro.model.Student;
import com.letsdobro.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.addStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
