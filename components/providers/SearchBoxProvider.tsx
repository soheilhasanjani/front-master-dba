import useDebouncedState from "@/hooks/useDebouncedState";
import React, { useRef, useState } from "react";

const ctx = React.createContext<any>({});
export const useSearchBox = () => React.useContext(ctx);

const SearchBoxProvider = ({ children }: { children: React.ReactNode }) => {
  //
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [inputText, debouncedInputText, setInputText] = useDebouncedState("");
  //
  return (
    <ctx.Provider
      value={{
        searchBoxRef,
        inputText,
        debouncedInputText,
        setInputText,
        isFocus,
        setIsFocus,
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default SearchBoxProvider;
