import axios from "axios";

function Get(uri) {
  return axios.get(`${process.env.REACT_APP_API}${uri}`, {
    headers: {
      "X-API-Key": process.env.REACT_APP_API_KEY,
      "Cache-Control": "no-cache",
    },
  });
}

export { Get };
