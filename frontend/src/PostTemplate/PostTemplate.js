import './PostTemplate.css'; // Импортируем стили для компонента

const PostTemplate = ({ post }) => {
    const { type, title, text, mediaUrl, postUrl, author, date} = content;
    return (
        <div className="post-template">
            <div className="post-header">
                <h2>{post.title}</h2>
                <p className="post-author">Автор: {post.author}</p>
                <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <div className="post-footer">
                <button className="like-button">❤️ Нравится</button>
                <button className="comment-button">💬 Комментарии</button>
            </div>
        </div>
    );
};

export default PostTemplate;