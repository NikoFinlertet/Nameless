import React, { useState } from "react";
import ContentCard from "./ContentCard";

const ContentList = () => {
  // Моковые данные для тестирования
  const mockContent = [
    {
      type: "video",
      title: "React Basics",
      description: "Learn React step by step.",
      mediaUrl: "https://example.com/react-basics.mp4"
    },
    {
      type: "image",
      title: "React Logo",
      description: "Official React logo.",
      mediaUrl: "https://example.com/react-logo.png"
    },
    {
      type: "text",
      title: "Understanding Props",
      description: "Props are used to pass data between components.",
      mediaUrl: null
    },
    {
      type: "article",
      title: "React Documentation",
      description: "Read the official React documentation.",
      mediaUrl: "https://reactjs.org/docs/getting-started.html"
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
