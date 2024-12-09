package arcan.nameless;


import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {

    @Bean
    public MongoClient mongoClient(){
        ConnectionString connectionString = new ConnectionString(""); //load from another file
    }
}
