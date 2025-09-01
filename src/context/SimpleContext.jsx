import { createContext, useContext,  } from "react";
import {useState} from "react";
const SimpleContext = createContext();

function SimpleProvider({ children }) {

    const  [games, setGames] = useState({wc3: 2003, cs: 2002});


    return (
    <SimpleContext.Provider value={{ games, setGames }}>
      {children}
    </SimpleContext.Provider>
  );
}

function useSimple() {
  const context = useContext(SimpleContext);
  if (context === undefined)
    throw new Error("SimpleContext was used outside of SimpleProvider");
  return context;
}

export { SimpleProvider, useSimple };
