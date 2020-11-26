import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

export async function searchForId(id, setSearchResults) {
  if (id.length > 3) {
    // console.log(id, key);
    const config = {
      method: "get",
      url: `${baseUrl}/api/playersById/8r92jjqy`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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

// var config = {
//   method: "get",
//   url: "https://api.clashofclans.com/v1/players/%238r92jjqy",
//   headers: {
//     Authorization: "",
//   },
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
