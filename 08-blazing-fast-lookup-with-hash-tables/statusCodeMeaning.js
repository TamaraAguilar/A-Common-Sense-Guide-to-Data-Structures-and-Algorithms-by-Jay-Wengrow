let statusCodes = {
  200: "OK",
  301: "Moved Permanently",
  401: "Unauthorized",
  404: "Not found",
  500: "Internal Server Error"
}

const statusCodeMeaning = number => statusCodes[number];

console.log(statusCodeMeaning(200)); // Returns 'OK'