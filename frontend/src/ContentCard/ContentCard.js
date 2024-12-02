import { useState } from 'react';
import './ContentCard.css';

const Card = ({ link, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                window.location.href = link; // Перенаправляем на новую страницу
            }, 800); // Задержка должна совпадать с длительностью анимации
        }
    };

    return (
        <div className={`card ${isAnimating ? 'expand' : ''}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

const ContentCard = ({ content }) => {
    const { type, title, description, mediaUrl, postPattern } = content;

    return (
        <Card link={postPattern}>
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
                <p>Для просмотра статьи нажмите на карточку!</p>
            )}
        </Card>
    );
};

export default ContentCard;