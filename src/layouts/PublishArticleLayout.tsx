import React from "react";
// import React, { useRef, useState, ChangeEvent } from "react";
import style from "./layouts.module.css";
import { Outlet } from "react-router-dom";
// import { ReactComponent as ImgIcon } from "../../../assets/svg/imgIcon.svg";
// import { ReactComponent as VidIcon } from "../../../assets/svg/vidIcon.svg";
// import { ReactComponent as PlusIcon } from "../../../assets/svg/plusIcon.svg";
// import { ReactComponent as TimesIcon } from "../../../assets/svg/timesIcon.svg";

const PublishArticleLayout: React.FC = () => {
//   const [openMediaSelect, setOpenMediaSelect] = useState<boolean>(false);
//   const imgRef = useRef<HTMLInputElement | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
  
//   const handleOpenMediaSelect = () => {
//     setOpenMediaSelect(!openMediaSelect);
//   };

//   const handleImgTrigger = () => {
//     setOpenMediaSelect(!openMediaSelect);
//     imgRef.current?.click();
//   };

//   const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     console.log(file)
//     if (file) {
//       setImage(file);
//         const url = URL.createObjectURL(file);
//         setImageUrl(url)
//         console.log(imageUrl);  
//     }
//   };

  return (
    <div className={style.create_post_wrapper}>
      <section className={style.create_post_container}>
        {/* <div className={style.create_post_header}>
          <NavLink to={"/article/preview"} className={style.create_post_header_btn}>Preview</NavLink>
          <NavLink to={"/article/publish"} className={style.create_post_header_btn}>Publish</NavLink>
        </div> */}
        <Outlet />
      </section>
    </div>
  );
};

export default PublishArticleLayout;
