import { AuthService } from "./AuthService";

export class EmpleadoService {
  public static async getEmpleados(): Promise<any> {
    const url = "http://localhost:5151/empleados";
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${AuthService.getToken()}`
    // }
    // const response = await fetch(url, { headers });
    const response = await fetch(url);
    return response.json();
  }
}