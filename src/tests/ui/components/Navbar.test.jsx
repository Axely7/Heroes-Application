import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth";
import { Navbar } from "../../../ui";

describe("Pruebas en <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Axel Jimenez",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el nombre del usuario", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("debe de llamar el logout y navigate cuando se hace click en el botón", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Axel Jimenez",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });
});
