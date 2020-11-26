import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

export async function searchForId(id, setSearchResults) {
  if (id.length > 3) {
    // console.log(id, key);
    const config = {
      method: "get",
      url: `${baseUrl}/api/playersById/8r92jjqy`,
    };

    axios(config)
      .then(function (response) {
        setSearchResults(response.data); //  ? response.data.Search : null;
        // console.log(JSON.stringify(response.status));
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log("ID must be 8 characters long");
  }
}

export function useDebounce(search, delay) {
  const [debounced, setDebounced] = useState(search);
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounced(search);
    }, delay);
    return () => clearTimeout(handle);
  }, [search, delay]);
  // console.log(debounced);
  return debounced;
}
