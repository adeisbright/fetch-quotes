import HTTP_STATUS_CODE from "./http-codes";
import ERROR_NAME from "./error-name";

const constants = {
    statusCode: HTTP_STATUS_CODE,
    errorName: ERROR_NAME, 
    mongoConnect: "Connection to MongoDB : Successful",
    mongoNoConnect: "Cannot Connect to MongoDB",
    mongoTerminate : "Connection to MongoDB Terminated"
};

export default constants;
