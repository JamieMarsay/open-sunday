import React, {
  FunctionComponent,
  createContext,
  useState,
  useEffect
} from "react";
import Spinner from "@Components/Spinner/Spinner";
import { IProvider } from "./IProvider";

export const AppContext = createContext({});

export const AppProvider: FunctionComponent<IProvider> = ({
  children,
  urls
}) => {
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([{}]);

  const fetchData = async () => {
    toggleLoading(true);
    try {
      const responses = await Promise.all(
        urls.map((url: string) => fetch(url))
      );
      const finalData = await Promise.all(
        responses.map((response: any) => {
          if (!response.ok) {
            throw "Bad response";
          } else {
            return response.json();
          }
        })
      );
      setData(finalData);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    toggleLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [urls]);

  return (
    <AppContext.Provider value={data}>
      {error ? <p>error</p> : loading ? <Spinner /> : children}
    </AppContext.Provider>
  );
};
