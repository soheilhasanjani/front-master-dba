import React from "react";
import { Bookmark } from "react-feather";

const DashboardPage = () => {
  return (
    <div className="container-fluid pt-3">
      <BreadcrumbsItem to="/dashboard"> تنظیمات</BreadcrumbsItem>

      <div className="col-12 dashboard-content">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <Bookmark /> <h6 className="dashboard-title">تنظیمات سایت</h6>
          </div>

          <hr className=" mt-1 mb-3" />
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              عنوان سایت
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={WebSiteTitle}
                onChange={(e) => {
                  setWebSiteTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              لوگو سایت
            </label>
            <div className="col-sm-9">
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  setImageFile(e);
                  setWebsiteLogo(e.target.files[0]);
                }}
              />
            </div>
            <div className="col-sm-1">
              <img
                src={WebsiteLogoUrl}
                style={{ width: "110px", cursor: "pointer" }}
                onClick={() => handleShowImageModal(WebsiteLogoUrl)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              {" "}
              کلمات کلیدی صفحه اصلی
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="کلمات را با , جدا کنید"
                value={MainPageKeyWord}
                onChange={(e) => {
                  setMainPageKeyWord(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="d-flex">
            <Bookmark /> <h6 className="dashboard-title">صفحه اصلی</h6>
          </div>

          <hr className=" mt-1 mb-3" />
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              عنوان درباره ما
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={MainPageAboutUsTitle}
                onChange={(e) => setMainPageAboutUsTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              متن درباره ما
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                id="inputPassword"
                style={{ resize: "vertical" }}
                value={MainPageAboutUsText}
                onChange={(e) => setMainPageAboutUsText(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              عکس درباره ما
            </label>
            <div className="col-sm-9">
              <input
                type="file"
                className="form-control"
                onChange={(e) => {
                  setImageFile(e);
                  setMainPageAboutUsImageUrl(e.target.files[0]);
                }}
              />
            </div>
            <div className="col-sm-1">
              <img
                src={MainPageAboutUsImageUrl}
                style={{ width: "110px", cursor: "pointer" }}
                onClick={() => handleShowImageModal(MainPageAboutUsImageUrl)}
              />
            </div>
          </div>
          <div className="d-flex">
            <Bookmark />
            <h6 className="dashboard-title">فوتر</h6>
          </div>

          <hr className=" mt-1 mb-3" />
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              متن درباره ما
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                id="inputPassword"
                style={{ resize: "vertical" }}
                value={FooterAboutUsText}
                onChange={(e) => setFooterAboutUsText(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              تلفن
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={Tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              ایمیل
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={Fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              ای نماد
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={EnamadCode}
                onChange={(e) => setEnamadCode(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex">
            <Bookmark />
            <h6 className="dashboard-title">درباره ما</h6>
          </div>

          <hr className=" mt-1 mb-3" />
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              عنوان درباره ما
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={AboutUsTitle}
                onChange={(e) => setAboutUsTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              متن درباره ما
            </label>
            <div className="col-sm-10">
              <Editor
                tinymceScriptSrc={
                  process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                }
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={AboutUsText}
                init={{
                  height: 600,
                  menubar: true,
                  directionality: "rtl",
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "imagetools",
                    "charmap",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "codesample",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "preview",
                    "help",
                    "wordcount",
                    "emoticons",
                    "quickbars",
                    "pagebreak",
                    "nonbreaking",
                    "searchreplace ",
                    "directionality",
                    "textcolor colorpicker",
                    "print",
                  ],
                  toolbar:
                    "undo redo | bold italic underline strikethrough |formats blocks fontsize|" +
                    "alignleft aligncenter alignright justify alignjustify  " +
                    "pagebreak nonbreaking searchreplace| bullist numlist outdent indent | " +
                    "removeformat forecolor| codesample |table image media link emoticons |preview fullscreen " +
                    "styleselect ltr rtl forecolor backcolor print ",

                  quickbars_image_toolbar: true,
                  quickbars_image_toolbar:
                    "alignleft aligncenter alignright rotateleft rotateright | flipv fliph | editimage imageoptions ",
                  quickbars_selection_toolbar:
                    "bold italic | quicklink blockquote",
                  quickbars_insert_toolbar:
                    "quickimage quicktable | hr pagebreak",
                  advlist_bullet_styles: "square",
                  a11y_advanced_options: true,
                  image_title: true,
                  codesample_global_prismjs: true,
                  forced_root_block: "div",
                  images_file_types: "jpg,png,jpeg,sql,pdf,docx",
                  file_picker_types: "file image media",
                  images_upload_handler: handleImageUpload,
                  codesample_languages: [
                    { text: "Python", value: "python" },
                    { text: "HTML/XML", value: "markup" },
                    { text: "CSS", value: "css" },
                    { text: "JavaScript", value: "javascript" },
                    { text: "C#", value: "csharp" },
                    { text: "SQL", value: "sql" },
                  ],
                  content_style:
                    "@font-face {" +
                    'font-family: "IranSanse";' +
                    'src: url("../fonts/BYekan-webfont.eot") format("eot"),' +
                    'url("../fonts/BYekan-webfont.woff") format("woff"),' +
                    'url("../fonts/BYekan-webfont.ttf") format("truetype");' +
                    'url("../fonts/IRANSansWeb.woff2") format("woff")' +
                    "};" +
                    "body { font-family:IranSanse; font-size:14px }",
                }}
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn main-background-color-btn text-white">
              ثبت
            </button>
          </div>

          <div id="myModal" className="image-modal">
            <span className="close" onClick={handleCloseImageModal}>
              &times;
            </span>
            <img className="image-modal-content" id="img01" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
