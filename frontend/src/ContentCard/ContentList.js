import React, { useState } from "react";
import ContentCard from "./ContentCard";

const ContentList = () => {
  // Моковые данные для тестирования
  const mockContent = [
    {
      type: "video",
      title: "Video post",
      description: "Aboba.",
      postPattern: "https://example.com/react-basics.mp4"
    },
    {
      type: "image",
      title: "IMG post",
      description: "Logo",
      imgPreview: "https://pic.rutubelist.ru/user/57/7f/577f254eca6461029dc36412890cf7a8.jpg"
    },
    {
      type: "text",
      title: "Text post",
      description: "Text",
      mediaUrl: null
    },
    {
      type: "article",
      title: "React Documentation",
      description: "Read the official React documentation.",
      postPattern: "https://reactjs.org/docs/getting-started.html"
    }
  ];

  // Состояние для тестирования (используем локально вместо загрузки с API)
  const [contentList] = useState(mockContent);

  return (
    <div className="content-list">
      {contentList.map((content, index) => (
        <ContentCard key={index} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
