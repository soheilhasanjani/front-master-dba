import React, { useState } from "react";
import Input from "@/components/core/Input";
import Label from "@/components/core/Label";
import Section from "@/components/pages/dashboard/articles/add/Section";
import ReferenceComponent, {
  Reference,
} from "@/components/pages/dashboard/articles/add/ReferenceComponent";
import Textarea from "@/components/core/Textarea";
import Editor from "@/components/core/TextEditor";

export type ArticleSectionSubmitValue = {
  articleType: 1;
};

type ArticleSectionProps = {
  onSubmit: (value: ArticleSectionSubmitValue) => void;
};

const ArticleSection: React.FC<ArticleSectionProps> = ({ onSubmit }) => {
  //
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [referenceList, setReferenceList] = useState<Array<Reference>>([]);
  //
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8 grid grid-cols-12 gap-4 h-fit">
        <Section className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Label>عنوان</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="col-span-12">
            <Label>عنوان لاتین</Label>
            <Input
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
            />
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <Label>مقاله قبلی</Label>
                <Input
                  value={latinName}
                  onChange={(e) => setLatinName(e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <Label>مقاله بعدی</Label>
                <Input
                  value={latinName}
                  onChange={(e) => setLatinName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Section>
        <Section className="col-span-12">
          <Label>متن</Label>
          <Editor value={name} onChange={(e) => setName(e.target.value)} />
        </Section>
      </div>
      <div className="col-span-4 grid grid-cols-12 gap-4 h-fit">
        <Section className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <Label>مدت زمان مطالعه</Label>
            <Input
              type="number"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مقدار وارد شده براساس دقیقه می باشد"
            />
          </div>
          <div className="col-span-12">
            <Label>کلمات کلیدی</Label>
            <Textarea
              rows={5}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="کلمات کلیدی را با ویرگول (,) جدا نمایید"
            />
          </div>
          <div className="col-span-12">
            <Label>خلاصه</Label>
            <Textarea
              rows={10}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </Section>

        <Section className="col-span-12">
          <Label className="mb-2">منابع</Label>
          <ReferenceComponent
            value={referenceList}
            onChange={(value) => setReferenceList(value)}
          />
        </Section>
        <div className="col-span-6">
          <button
            type="button"
            className="bg-[#198754] border border-[#198754] disabled:bg-[#53b889] w-full disabled:border-[#53b889] disabled:pointer-events-none hover:bg-white px-4 transition-colors h-10 rounded text-white hover:text-[#198754]"
          >
            ثبت نهایی
          </button>
        </div>
        <div className="col-span-6">
          <button
            type="button"
            className="bg-[#0f70b7] border border-[#0f70b7] disabled:bg-[#5096c7] w-full disabled:border-[#5096c7] disabled:pointer-events-none hover:bg-white px-4 transition-colors h-10 rounded text-white hover:text-[#0f70b7]"
          >
            ثبت موقت
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
