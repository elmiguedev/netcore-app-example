export class EmpleadoService {
  public static async getEmpleados(): Promise<any> {
    const url = "http://localhost:5151/empleados";
    const response = await fetch(url);
    return response.json();
  }
}