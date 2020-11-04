import {API_URL_DEVELOPMENT, API_URL_TEST, API_URL_PRODUCTION, APP_ENV} from "../../config";

function getchoirbookApi() {
  let baseUrl = "";
    if (APP_ENV === API_URL_DEVELOPMENT) {
        baseUrl = API_URL_DEVELOPMENT;
    }

    if (APP_ENV === API_URL_TEST) {
        baseUrl = API_URL_TEST;
    }

    if (APP_ENV=== API_URL_PRODUCTION){
        baseUrl = API_URL_PRODUCTION;
    }

    return baseUrl;
}

function usersApi() {
    let url = getchoirbookApi();
    url = url + "/api/users";
    console.log("users url***********",url);
    return url;
}




export default {
    getchoirbookApi,
    usersApi
}