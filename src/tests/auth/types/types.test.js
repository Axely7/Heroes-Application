import { types } from "../../../auth/types/types";

describe('Pruebas en "Types.js"', () => {
  test("debe de regresar estos type", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
