/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 12/07/23
    http-client.js Description: 
*/

class HttpClient {
  // setting params to a default value allows the user to get the URL without
  // needing the additional parameter
  async get(url, params = ""){   
    url = new URL(url);

    if (params) {
      const searchParams = new URLSearchParams(params);
      url.search = searchParams;
    }

    try {
      // Step #3 and #4: Fetch the URL and return the response as JSON
      const res = await fetch(url.toString(), { method: "GET" });
      // Check if the request was successful
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      // Return the response as JSON
      return await res.json();
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    }
  }
}

export { HttpClient };