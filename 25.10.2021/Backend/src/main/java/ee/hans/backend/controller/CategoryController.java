package ee.hans.backend.controller;


import ee.hans.backend.model.Category;
import ee.hans.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categorys")
    public List<Category> getCategorys(){
        return categoryService.getCategorys();
    }

    @PostMapping("categorys")
    public String postCategory(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Ese edukalt lisatud " + category.getName();
    }
    // delete p2ringu, edit p2ringu, view one item p2ringu
    // andmebaas
    // kategooria osas samad asjad
}
