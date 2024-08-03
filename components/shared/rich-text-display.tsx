// components/RichTextDisplay.tsx
import React, { useMemo, useLayoutEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs.css"; // Importing the vs theme for highlight.js
import { IMAGE_BASE_URL } from "@/configs/baseUrl";
import { Dialog, DialogContent } from "@/components/core/Dialog";

interface RichTextDisplayProps {
  content: string;
}

const BASE_URL = IMAGE_BASE_URL;

// Function to parse HTML content
const parseHTMLString = (htmlString: string): Document => {
  const parser = new DOMParser();
  return parser.parseFromString(htmlString, "text/html");
};

// Function to remove all class names except those starting with 'language-'
const filterClassNames = (htmlString: string): string => {
  const doc = parseHTMLString(htmlString);
  const elementsWithClass = doc.body.querySelectorAll("[class]");
  elementsWithClass.forEach((element) => {
    const classes = Array.from(element.classList);
    const filteredClasses = classes.filter((className) =>
      className.startsWith("language-"),
    );
    element.className = filteredClasses.join(" ");
  });
  return doc.body.innerHTML;
};

// Function to sanitize image src attributes
const processImageSrc = (htmlString: string): string => {
  const doc = parseHTMLString(htmlString);
  const images = doc.body.querySelectorAll("img");
  images.forEach((img) => {
    img.style.cursor = "zoom-in";
    let src = img.getAttribute("src");
    if (src) {
      const isAbsoluteUrl = /^(?:[a-z]+:)?\/\//i.test(src);
      if (!isAbsoluteUrl) {
        src = src.replace(/^\s*(\.\.\/)*/g, "").replace(/^\//, "");
        img.setAttribute("src", BASE_URL + "/" + src);
      }
    }
  });
  return doc.body.innerHTML;
};

// Function to highlight code blocks using highlight.js and set dir to ltr
const highlightCodeBlocks = (htmlString: string): string => {
  const doc = parseHTMLString(htmlString);
  const codeBlocks = doc.body.querySelectorAll("pre code");
  codeBlocks.forEach((block) => {
    hljs.highlightBlock(block as HTMLElement);
    const blockElement = block as HTMLElement;
    blockElement.setAttribute("dir", "ltr"); // Set dir to ltr for all code blocks
    blockElement.style.backgroundColor = "#f5f5f5"; // Light gray background for code blocks
    blockElement.style.margin = "1rem 0"; // 1rem margin on top and bottom for code blocks

    // Create and add the copy button
    const copyButton = document.createElement("button");
    const copyIcon = document.createElement("img");
    copyIcon.src = "/copy-icon.svg"; // Path to the custom icon
    copyIcon.alt = "Copy";
    copyIcon.style.width = "1rem";
    copyIcon.style.height = "1rem";
    copyButton.appendChild(copyIcon);

    copyButton.style.position = "absolute";
    copyButton.style.top = "1rem";
    copyButton.style.right = "1rem";
    copyButton.style.background = "none";
    copyButton.style.border = "none";
    copyButton.style.cursor = "pointer";
    copyButton.style.padding = "0";
    copyButton.className = "copy-button"; // Common class for all buttons

    const preElement = blockElement.parentElement;
    if (preElement) {
      preElement.style.position = "relative";
      preElement.appendChild(copyButton);
    }
  });
  return doc.body.innerHTML;
};

const transformations = [
  filterClassNames,
  processImageSrc,
  highlightCodeBlocks,
];

const RichTextDisplay: React.FC<RichTextDisplayProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const sanitizedContent = useMemo(() => {
    return transformations.reduce(
      (result, transform) => transform(result),
      content,
    );
  }, [content]);

  useLayoutEffect(() => {
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const codeBlock = button.parentElement?.querySelector("code");
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          alert("با موفقیت کپی شد!"); // User feedback
        });
      }
    };

    const handleImageClick = (event: Event) => {
      const img = event.currentTarget as HTMLImageElement;
      if (
        img.parentElement &&
        img.parentElement.classList.contains("copy-button")
      ) {
        // Ignore the click if the image is inside a copy button
        return;
      }
      setImageSrc(img.src);
    };

    const attachEventListeners = () => {
      const copyButtons = contentRef.current?.querySelectorAll(".copy-button");
      const images = contentRef.current?.querySelectorAll("img");

      copyButtons?.forEach((button) => {
        button.addEventListener("click", handleClick);
      });

      images?.forEach((img) => {
        img.addEventListener("click", handleImageClick);
      });
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          attachEventListeners();
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
      attachEventListeners(); // Initial attach for already present elements
    }

    // Cleanup function to remove event listeners and observer
    return () => {
      observer.disconnect();
      const copyButtons = contentRef.current?.querySelectorAll(".copy-button");
      const images = contentRef.current?.querySelectorAll("img");

      copyButtons?.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });

      images?.forEach((img) => {
        img.removeEventListener("click", handleImageClick);
      });
    };
  }, [sanitizedContent]);

  return (
    <>
      <Dialog
        open={!!imageSrc}
        onOpenChange={(open) => {
          if (open === false) setImageSrc(null);
        }}
      >
        <DialogContent className="relative z-20 m-4 rounded bg-white p-4 outline-none">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Selected"
              className="w-full max-w-4xl rounded-md object-cover"
            />
          )}
        </DialogContent>
      </Dialog>
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </>
  );
};

export default RichTextDisplay;
