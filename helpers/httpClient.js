export class HttpClient {
  constructor() {
    this._url = 'https://issuesdb-1f78.restdb.io/rest/';
  }

  async get(endpoint) {
    try {
      const response = await fetch(this._url + endpoint, {
        headers: {
          'x-apikey': '67a9efe8020c067a95e653bc',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `Felkod: ${response.status} Felmeddelande: ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(this._url + endpoint, {
        method: 'POST',
        headers: {
          'x-apikey': '67a9efe4020c067b55e653b8',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Felkod: ${response.status} Felmeddelande: ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
