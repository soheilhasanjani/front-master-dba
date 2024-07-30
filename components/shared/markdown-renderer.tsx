import React, { useEffect } from "react";
import Prism from "prismjs";
import staticFileUrl from "@/utils/staticFileUrl";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism.css";

interface MarkdownProps {
  content: string;
}

function sanitizeClasses(htmlContent: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const elements = doc.querySelectorAll("[class]");
  elements.forEach((el) => {
    const classes = el.className.split(" ");
    const filteredClasses = classes.filter((cls) =>
      cls.startsWith("language-"),
    );
    el.className = filteredClasses.join(" ");
  });

  return doc.body.innerHTML;
}

function updateImageSources(htmlContent: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const images = doc.querySelectorAll("img");
  images.forEach((img) => {
    if (!img.src.startsWith("http://") && !img.src.startsWith("https://")) {
      img.src = staticFileUrl(img.src);
    }
  });

  return doc.body.innerHTML;
}

const enhanceCodeBlocks = (htmlContent: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const preElements = doc.querySelectorAll("pre");
  preElements.forEach((pre) => {
    const code = pre.querySelector("code");
    if (code) {
      const languageClass = Array.from(pre.classList).find((cls) =>
        cls.startsWith("language-"),
      );
      if (languageClass) {
        code.classList.add(languageClass);
      }
    }
  });

  return doc.body.innerHTML;
};

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  const processedContent = content
    ? updateImageSources(sanitizeClasses(enhanceCodeBlocks(content)))
    : "";

  useEffect(() => {
    // Set a slight delay to ensure DOM updates are complete
    const timeoutId = setTimeout(() => {
      const codeElements = document.querySelectorAll("pre code");
      codeElements.forEach((block) => {
        Prism.highlightElement(block);
      });
    }, 1000); // Adjust the delay if necessary

    // Clean up timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [processedContent]);

  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

export default MarkdownRenderer;
