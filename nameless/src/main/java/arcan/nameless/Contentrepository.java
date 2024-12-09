package arcan.nameless;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Contentrepository extends MongoRepository<ContentCard, String> {
    //Можео добавить доп методы запросов
}
