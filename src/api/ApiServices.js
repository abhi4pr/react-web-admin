import axios from 'axios';
import * as SessionService from './SessionService';

//var APIURL = 'https://phpdev.ga/signable/public/api/';
var APIURL = 'https://phpdev.ga/signable_dev/public/api/';
//var APIURL = 'https://signableapi.phpstaging.ga/api/';

function handleErrorObservable(error) {
   var response = error.message || error;
   let responseJson = { is_error: true, message: response };
   return responseJson;
}

function Headers() {
   let AuthToken = SessionService.GetAuthTokenSession();
   if (AuthToken) {
      let headers = {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + AuthToken,
      }
      return headers;
   } else {
      return null;
   }
}


export const ConfigAPIURL = async () => {
   return APIURL;
}

export const GetAPI = async (URL, props) => {
   try {
      const response = await axios.get(APIURL + URL, { headers: Headers() });
      return response.data;
   }
   catch (error) {
      handleErrorObservable(error);
   }
}

export const PostAPI = async (URL, Data) => {
   try {
      const response = await axios.post(APIURL + URL, Data, { headers: Headers() });
      return response.data;
   }
   catch (error) {
      handleErrorObservable(error);
   }
}

export const PutAPI = async (URL, Data) => {
   try {
      const response = await axios.put(APIURL + URL, Data, { headers: Headers() });
      return response.data.data;
   }
   catch (error) {
      handleErrorObservable(error);
   }
}

export const DeleteAPI = async (URL) => {
   try {
      const response = await axios.delete(APIURL + URL, { headers: Headers() });
      return response;
   }
   catch (error) {
      handleErrorObservable(error);
   }
}