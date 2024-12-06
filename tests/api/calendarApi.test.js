import { calendarApi } from "../../src/api";

describe('Pruebas en calendar API', () => {

  test('debe tener config por defecto', () => {
    // Asegúrate de que el valor de process.env.VITE_API_URL esté definido
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test('debe tener x-token en header de petición', async () => {
    // Definir el token antes de usarlo
    const token = 'mocked-token'; // Puedes cambiar esto a un token real si lo tienes

    // Simular el almacenamiento del token en localStorage
    localStorage.setItem('token', token);

    // Hacer la petición a la API
    const res = await calendarApi.get('/auth');

    // Verificar que el token esté en el header de la petición
    expect(res.config.headers['x-token']).toBe(token);
  });

});
