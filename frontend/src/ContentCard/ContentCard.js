import './ContentCard.css';


const ContentCard = ({content}) => {
    const {type, title, description, mediaUrl } = content;

    return (
        <div className="card">
          <h3>{title}</h3>
          <p>{description}</p>
    
          {type === "video" && (
            <video controls src={mediaUrl} className="content-video" />
          )}
    
          {type === "image" && (
            <img src={mediaUrl} alt={title} className="content-image" />
          )}
    
          {type === "text" && <p>{description}</p>}
    
          {type === "article" && (
            <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
              Читать статью
            </a>
          )}
        </div>
      );
};

export default ContentCard;


