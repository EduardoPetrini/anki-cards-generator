import http from "http";

const ALLOWED_METHOD = "POST";

const start = async () => {
  
  http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", ALLOWED_METHOD);

    const { method } = req;

    if (method !== ALLOWED_METHOD) {
      res.statusCode = 404;
      return res.end();
    }

    //call prepare request

    //call request

    //call create a file

    //return the file to download
  });
};
