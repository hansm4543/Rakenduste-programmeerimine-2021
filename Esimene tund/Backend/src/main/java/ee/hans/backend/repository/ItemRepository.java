package ee.hans.backend.repository;

import ee.hans.backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface ItemRepository extends JpaRepository<Item, Long> {

}
