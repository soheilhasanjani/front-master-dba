"use client";

import Input from "@/components/core/Input";
import Textarea from "@/components/core/Textarea";
import React, { useState } from "react";

const ContactUsPage = () => {
  //
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Description, setDescription] = useState("");
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   if (validation.current.allValid()) {
    //     var model = {
    //       FullName,
    //       Email,
    //       Subject,
    //       Description,
    //     };

    //     const { data } = await SaveConectUs(model);
    //     if (data.Status == "success") {
    //       successMessage("پیام شما با موفقیت ثبت شد");
    //       resetStates();
    //     } else {
    //       errorMessage("مشکلی پیش آمده");
    //     }
    //   } else {
    //     validation.current.showMessages();
    //     forceUpdate(1);
    //   }
    // } catch (ex) {
    //   errorMessage("مشکلی پیش آمده" + ex);
    // }
  };
  //
  return (
    <div className="container py-8">
      <div className="rounded bg-[#ededed] p-4">
        <div className="row about-title pb-2">
          <div className="co-md-12">تماس با ما</div>
        </div>
        <div className="about-content grid grid-cols-12">
          <div className="col-span-6">
            <form onSubmit={handleSubmit}>
              <div className="col-auto mb-2">
                <Input
                  className="form-control"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  aria-label="default input example"
                  value={FullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    // validation.current.showMessageFor("FullName");
                  }}
                />
              </div>
              {/* {validation.current.message("FullName", FullName, "required")} */}
              <div className="col-auto mb-2">
                <Input
                  // class="form-control"
                  type="text"
                  placeholder="ایمیل"
                  aria-label="default input example"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // validation.current.showMessageFor("Email");
                  }}
                />
              </div>
              {/* {validation.current.message("Email", Email, "required")} */}
              <div className="col-auto mb-2">
                <Input
                  // class="form-control"
                  type="text"
                  placeholder="موضوع"
                  aria-label="default input example"
                  value={Subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    // validation.current.showMessageFor("Subject");
                  }}
                />
              </div>
              {/* {validation.current.message("Subject", Subject, "required")} */}
              <div className="col-auto mb-2">
                <Textarea
                  className="form-control"
                  // type="text"
                  placeholder="توضیحات"
                  aria-label="default input example"
                  style={{ resize: "vertical" }}
                  value={Description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    // validation.current.showMessageFor("Description");
                  }}
                />
              </div>
              {/* {validation.current.message(
                "Description",
                Description,
                "required",
              )} */}
              <div className="d-grid gap-2">
                <button
                  className="btn main-background-color-btn text-white"
                  type="submit"
                >
                  ثبت
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-6">
            <img src="/images/undraw-contact.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
