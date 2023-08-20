import ApiError from "./errros/ApiError";

class Api {
  constructor({ baseUrl, headers, ...opts }) {
    this._baseUrl = baseUrl;
    this._opts = opts;
    this._headers = headers;
  }

  async sendRequest(path, opts = {}) {
    const res = await fetch(this._baseUrl + path, {
      headers: this._headers,
      ...this._opts,
      ...opts,
    });

    const data = await res.json();
    if (!res.ok) throw new ApiError(data);

    return data;
  }
}

export default Api;
