package ee.hans.backend.controller;


import ee.hans.backend.model.Item;
import ee.hans.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }
    // delete p2ringu, edit p2ringu, view one item p2ringu
    // andmebaas
    // kategooria osas samad asjad
}
