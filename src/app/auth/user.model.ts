export class User {
  constructor(
    email: string,
    id: string,
    private _token: string,
    private _tokenExp: number
  ) { }

  get token() {
    if (!this._tokenExp || this._tokenExp <= 0) {
      return null;
    }
    return this._token;
  }
}
