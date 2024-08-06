export class AuthService {

  public static async login(username: string, password: string) {
    const url = "http://localhost:5151/login"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await response.json();
    AuthService.saveToken(data);
    location.reload();

    // console.log(username, password)
    // if (username === password) {
    //   AuthService.saveToken(username);
    //   location.reload();
    // } else {
    //   throw new Error('Invalid credentials');
    // }
  }


  public static isAuthenticated(): boolean {
    return !!AuthService.getToken();
  }

  public static logout(): void {
    AuthService.removeToken();
    location.reload();
  }

  public static getToken(): string | null {
    return localStorage.getItem('token');
  }

  public static saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public static removeToken(): void {
    localStorage.removeItem('token');
  }

}