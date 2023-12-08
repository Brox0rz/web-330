/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 12/07/23
    http-client.js Description: 
*/

class HttpClient {
  // setting params to a default value allows the user to get the URL without
  // needing the additional parameter
  async get(url, params = ""){   
    url = new URL(url)
    // to do ! #2
    const res = await fetch(url.toString(), { method: "GET" });
  }
}

