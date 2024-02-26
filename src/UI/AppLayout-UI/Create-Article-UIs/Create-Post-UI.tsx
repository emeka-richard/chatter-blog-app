import React, { useRef, useState, ChangeEvent } from "react";
import style from "./create-article-UI.module.css";
import { ReactComponent as ImgIcon } from "../../../assets/svg/imgIcon.svg";
import { ReactComponent as VidIcon } from "../../../assets/svg/vidIcon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plusIcon.svg";
import { ReactComponent as TimesIcon } from "../../../assets/svg/timesIcon.svg";
import { NavLink } from "react-router-dom";

const CreatePostUI: React.FC = () => {
  const [openMediaSelect, setOpenMediaSelect] = useState<boolean>(false);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleOpenMediaSelect = () => {
    setOpenMediaSelect(!openMediaSelect);
  };

  const handleImgTrigger = () => {
    setOpenMediaSelect(!openMediaSelect);
    imgRef.current?.click();
  };

  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      console.log(imageUrl);
    }
  };

  return (
    <>
      <div className={style.create_post_header}>
        <NavLink
          to={{
            pathname: "/article/preview",
            
          }}
          className={style.create_post_header_btn}
        >
          Preview
        </NavLink>
        <NavLink
          to={{
            
          }}
          className={style.create_post_header_btn}
        >
          Publish
        </NavLink>
      </div>
      <div className={style.create_post_body}>
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
          <h3
            className={
              openMediaSelect
                ? style.show
                : style.create_post_body_img_add_svg_note
            }
          >
            Choose a cover photo
          </h3>
          <input
            ref={imgRef}
            id="form_img"
            type="file"
            onChange={handleImgUpload}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png, .gif"
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
        {image && (
          <div
            style={image && { backgroundImage: `url(${imageUrl})` }}
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
            />
            <textarea
              id="form_notes"
              placeholder="Write a post......."
              className={style.create_post_input_note}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostUI;
