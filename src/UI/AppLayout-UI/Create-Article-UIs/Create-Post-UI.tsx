import React, { useRef, useState, ChangeEvent, useContext } from "react";
import style from "./create-article-UI.module.css";
import { ArticleContext } from "../../../layouts/PublishArticleLayout";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ReactComponent as ImgIcon } from "../../../assets/svg/imgIcon.svg";
import { ReactComponent as VidIcon } from "../../../assets/svg/vidIcon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plusIcon.svg";
import { ReactComponent as TimesIcon } from "../../../assets/svg/timesIcon.svg";
import MDEditor from "@uiw/react-md-editor";
import "./mdeditor.css";

const animatedComponents = makeAnimated();

const CreatePostUI: React.FC = () => {
  const articleProps = useContext(ArticleContext);

  // Ensure the ArticleContext is provided
  if (!articleProps) {
    throw new Error("useContext must be used within a Provider");
  }

  // Destructure the articleData and setArticleData from the context
  const { articleData, setArticleData } = articleProps;

  // State variables
  const [openMediaSelect, setOpenMediaSelect] = useState<boolean>(false);
  const imgRef = useRef<HTMLInputElement | null>(null);
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  // const [articleTitle, setArticleTitle] = useState<string>("");
  // const [articleContent, setArticleContent] = useState<string>("");

  const articleTags = [
    { value: "Programming", label: "Programming" },
    { value: "Data Science", label: "Data Science" },
    { value: "Technology", label: "Technology" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Politics", label: "Politics" },
  ];

  // Handlers for opening media select and triggering image upload
  const handleOpenMediaSelect = () => {
    setOpenMediaSelect(!openMediaSelect);
  };

  const handleImgTrigger = () => {
    setOpenMediaSelect(!openMediaSelect);
    imgRef.current?.click();
  };

  // Handler for uploading image
  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgUrl = reader.result as string;
        // Update articleData with the new image URL
        setArticleData({ ...articleData, coverImgUrl: imgUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for selecting tags
  const handleSelectedItems = (selectedOptions: any) => {
    const tags = selectedOptions.map((option: any) => option.value);
    // Update articleData with selected tags
    setArticleData({ ...articleData, articleTag: tags });
  };

  // Handler for updating article title
  const handleTextTitle = (title: string) => {
    // Update articleData with the new title
    setArticleData({ ...articleData, articleTitle: title });
  };

  // Handler for updating article content
  const handleTextContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    // Update articleData with the new content
    setArticleData({ ...articleData, articleContent: content });
  };

  // Styles for Select component
  const colourStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
    placeholder: (styles: any) => ({ ...styles, backgroundColor: "white" }),
    singleValue: (styles: any) => ({ ...styles, backgroundColor: "white" }),
  };

  return (
    <>
      <div className={style.create_post_body}>
        <div className={style.create_post_body_img_tag_container}>
          <div className={style.create_post_body_img_btn_container}>
            <div
              onClick={handleOpenMediaSelect}
              className={
                openMediaSelect
                  ? style.show
                  : style.create_post_body_img_add_svg_container
              }
            >
              <PlusIcon />
            </div>
            <input
              ref={imgRef}
              id="form_img"
              type="file"
              onChange={handleImgUpload}
              style={{ display: "none" }}
              accept="image/png, image/jpg, image/jpeg"
            />
            <div
              className={
                openMediaSelect
                  ? style.create_post_body_img_cancel_btn_container
                  : style.show
              }
            >
              <div
                onClick={handleOpenMediaSelect}
                className={style.create_post_body_img_cancel_svg_container}
              >
                <TimesIcon />
              </div>
            </div>
            <div
              className={
                openMediaSelect ? style.create_post_media_container : style.show
              }
            >
              <div
                onClick={handleImgTrigger}
                className={style.create_post_media_img}
              >
                <ImgIcon />
              </div>
              <div className={style.create_post_media_video}>
                <VidIcon />
              </div>
            </div>
          </div>
          <div className={style.create_post_body_tag_container}>
            <div className={style.create_post_body_tag_inner_container}>
              <h3 className={style.create_post_body_tag_h3}>Tag: </h3>
              {/* Select component for choosing multiple tags */}
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={articleTags[0]}
                isMulti
                options={articleTags}
                onChange={handleSelectedItems}
                styles={colourStyles}
              />
            </div>
          </div>
        </div>
        {articleData.coverImgUrl && (
          <div
            style={{ backgroundImage: `url(${articleData.coverImgUrl})` }}
            className={style.img_holder}
          ></div>
        )}
        <div className={style.create_post_input_wrapper}>
          <div className={style.create_post_input_container}>
            <input
              id="form_title"
              type="text"
              placeholder="Title"
              className={style.create_post_input_title}
              value={articleData.articleTitle ?? ''} // Use nullish coalescing operator to handle null values
              onChange={(e) => handleTextTitle(e.target.value)}
            />
            <textarea
              id="form_notes"
              placeholder="Write a post......."
              className={style.create_post_input_note}
              value={articleData.articleContent}
              onChange={handleTextContent}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostUI;
