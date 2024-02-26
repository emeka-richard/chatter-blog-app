import React, { useState, ChangeEvent } from 'react';
import MDEditor from "@uiw/react-md-editor";
import style from "./create-article-UI.module.css"

import "./mdeditor.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import ArticlePreview from './Preview-Article-UI';


interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
    </div>
  );
};


// import React, { useState } from 'react';
// import { MdEditor } from '@uiw/react-md-editor';

interface ArticleEditorProps {
  onArticleChange: (content: string) => void;
}

export const ArticleEditor: React.FC<ArticleEditorProps> = ({ onArticleChange }) => {
  const [content, setContent] = useState<string>('');

  const handleContentChange = (value: string | undefined) => {
    if (value) {
      setContent(value);
      onArticleChange(value);
    }
  };

  return (
    <div>
      <MDEditor preview='edit' value={content} onChange={handleContentChange} className={style['mde-editor']} />
    </div>
  );
};


// import React, { useState } from 'react';
// import ImageUploader from './ImageUploader';
// import ArticleEditor from './ArticleEditor';

const CreateArticleUI: React.FC = () => {
  const [articleContent, setArticleContent] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isPreviewed, setIsPreviewed] = useState(false)

  const handleArticleChange = (content: string) => {
    setArticleContent(content);
  };

  const handleImageUpload = (image: File) => {
    setUploadedImage(image);
  };

  const handlePublishArticle = () => {
    console.log('Article Content:', articleContent, 'Uploaded Image:', uploadedImage);
  };
  const handlePreviewArticle = ()=>{
    console.log(articleContent, uploadedImage)
    setIsPreviewed(true)
  }

  return (
    <div>
      <h1>Create New Article</h1>
      <ImageUploader onUpload={handleImageUpload} />
      <ArticleEditor onArticleChange={handleArticleChange} />
      <button onClick={handlePreviewArticle}>Preview Article</button>
      <button onClick={handlePublishArticle}>Publish Article</button>
      
      {/* <ArticlePreview content={articleContent} image={uploadedImage} /> */}
      {isPreviewed && <MDEditor.Markdown source={articleContent }/>}
      {isPreviewed && <ArticlePreview  />}
    </div>
  );
};

export default CreateArticleUI;