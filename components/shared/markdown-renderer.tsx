"use client";

import React, { useEffect } from "react";
import MarkdownIt from "markdown-it";
import Prism from "prismjs"; // Prism.js library
import { IMAGE_BASE_URL } from "@/configs/baseUrl";
import "prismjs/themes/prism.css"; // Prism.js theme for syntax highlighting

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

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  //
  const renderMarkdown = (markdownText: string) => {
    return md.render(
      filterLanguageClasses(
        prependBaseUrlToImages(markdownText, IMAGE_BASE_URL ?? ""),
      ),
    );
  };
  //
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  //
  return <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />;
};

export default MarkdownRenderer;
