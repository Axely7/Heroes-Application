import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
  };

  test("debe de retornar el estado por defecto", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: "Axel",
    };
    const newState = authReducer(initialState, action);
    expect(newState.logged).toBe(true);
    expect(newState.user).toEqual("Axel");
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const action = {
      type: types.logout,
    };
    const newState = authReducer(initialState, action);
    expect(newState.logged).toBe(false);
  });
});
