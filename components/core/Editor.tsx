"use client";

import React, { useEffect } from "react";
import {
  $getRoot,
  $getSelection,
  EditorState,
  EditorThemeClasses,
  LexicalEditor,
} from "lexical";
//
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

interface EditorProps {}

const theme: EditorThemeClasses = {};

function onError(error: Error, editor: LexicalEditor): void {
  console.error(error);
}

const Editor: React.FC<EditorProps> = ({}) => {
  const initialConfig: InitialConfigType = {
    namespace: "MyEditor",
    theme,
    onError,
  };
  //
  const onChangeHandler = (
    editorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>,
  ): void => {
    console.log(editorState.toJSON());
  };
  //
  return (
    <div className="relative">
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-96 rounded border p-3" />
          }
          placeholder={
            <div className="absolute start-3 top-3">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={onChangeHandler} />
        {/* <CheckListPlugin  /> */}
      </LexicalComposer>
    </div>
  );
};

export default Editor;
