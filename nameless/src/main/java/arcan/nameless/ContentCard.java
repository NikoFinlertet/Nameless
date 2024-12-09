package arcan.nameless;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection="contentCard")
public class ContentCard {
    @Id
    //Hashcode data code
    private String idUser;
    private String id_contentCard;


    //Data of content Card
    private String type_contentCard;
    private String url_contentCard;

    private String title_contentCard;
    private String description_contentCard;
    private String text_markDown_contentCard;
    private String previewImg_contentCard;
    private String mediaUrl_contentCard;
}
