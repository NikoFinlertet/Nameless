import { useState } from 'react';
import './ContentCard.css';



const Card = ({ link, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.location.href = link; // Перенаправляем на новую страницу
    }
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children} 
      {isOpen && (
        <div className="card-details" style={{ marginTop: '10px' }}>  
          <p>Дополнительная информация о карточке...</p>
        </div>
      )}
    </div>
  );
};



const ContentCard = ({content}) => {
    const {type, title, description, postPattern, imgPreview } = content; // imgPreview - сделать отрисовку

    return(
      <Card link={postPattern}>
        <h3>{title}</h3>
        <p>{description}</p>

        {type === "video" && (
        <video controls src={postPattern} className="content-video" />
      )}

      {type === "image" && (
        <img src={postPattern} alt={title} className="content-image" />
      )}

      {type === "text" && <p>{description}</p>}

      {type === "article" && (
        <p>Для просмотра статьи нажмите на карточку!</p>
      )}
      </Card>
    );
};

export default ContentCard;


