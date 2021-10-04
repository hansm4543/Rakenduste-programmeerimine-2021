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
    public void postItem(@RequestBody Item item){
        itemService.saveItem(item);
        //return "Ese edukalt lisatud " + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }
    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception{
        return itemService.getOneItem(id);
    }

    // swagger


    //j2rgmine kord frontendis
    //frontendis kustuda p'ring valmis
    //edit p2ringu,
    // view one item p2ringu
    //ostukorv lisada/eemaldada
    //cache backendis
}
