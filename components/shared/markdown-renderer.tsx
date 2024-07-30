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
import { IMAGE_BASE_URL } from "@/configs/baseUrl";

interface MarkdownProps {
  content: string;
}

function filterLanguageClasses(html: string): string {
  return html.replace(/(<[^>]+)\sclass="([^"]*)"/g, (_, tag, classAttr) => {
    // Split the class attribute into individual classes
    const classes = classAttr.split(/\s+/);
    // Filter classes to keep only those starting with 'language'
    const filteredClasses = classes.filter((cls: any) =>
      cls.startsWith("language"),
    );
    if (filteredClasses.length > 0) {
      // Join the remaining classes and return the modified tag
      return `${tag} class="${filteredClasses.join(" ")}"`;
    } else {
      // If no classes left, return the tag without the class attribute
      return tag;
    }
  });
}

// Function to prepend base URL to relative image srcs
const prependBaseUrlToImages = (html: string, baseUrl: string): string => {
  // Regular expression to find all <img> tags with src attributes
  const imgTagRegex = /<img\b[^>]*\bsrc="([^"]*)"/gi;

  // Replace each relative src with the base URL prepended
  return html.replace(imgTagRegex, (match, src: string) => {
    // If the src is not an absolute URL, prepend the base URL
    if (src && !src.startsWith("http")) {
      return match.replace(src, `${baseUrl}/${src}`);
    }
    return match; // return the original match if src is already absolute
  });
};

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

// Copy Button Component
const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <button
      onClick={copyCode}
      style={{ position: "absolute", top: 0, right: 0 }}
    >
      Copy
    </button>
  );
};

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  const processedContent = content
    ? filterLanguageClasses(
        prependBaseUrlToImages(
          enhanceCodeBlocks(content),
          IMAGE_BASE_URL ?? "",
        ),
      )
    : "";

  useEffect(() => {
    // Set a slight delay to ensure DOM updates are complete
    const timeoutId = setTimeout(() => {
      const codeElements = document.querySelectorAll("pre code");
      codeElements.forEach((block) => {
        Prism.highlightElement(block);
        const pre = block.parentElement;
        if (pre) {
          const codeText = block.textContent || "";
          const copyButton = document.createElement("button");
          copyButton.innerHTML =
            '<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></span>';
          copyButton.style.position = "absolute";
          copyButton.style.top = "5px";
          copyButton.style.right = "5px";
          copyButton.onclick = () => {
            navigator.clipboard.writeText(codeText);
            alert("Code copied to clipboard!");
          };
          pre.style.position = "relative";
          pre.appendChild(copyButton);
        }
      });
    }, 1000); // Adjust the delay if necessary

    // Clean up timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [processedContent]);

  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

export default MarkdownRenderer;
