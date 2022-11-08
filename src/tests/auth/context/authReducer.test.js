import { authReducer } from "../../../auth/context/authReducer";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
  };

  test("debe de retornar el estado por defecto", () => {
    const newState = authReducer(initialState);
  });
});
