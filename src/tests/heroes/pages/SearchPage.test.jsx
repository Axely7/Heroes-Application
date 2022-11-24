import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages/SearchPage";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))



describe("Pruebas en <SearchPage />", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    // expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test("debe de mostrar a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

    const alert = screen.getByLabelText("alert-danger");
    expect(alert.style.display).toBe("none");
  });

  test('debe de mostrar un error si no se encuentra el hero (batman1231)', () => { 

    render(
      <MemoryRouter initialEntries={["/search?q=batman1231"]}>
        <SearchPage />
      </MemoryRouter>
    )

    // screen.debug()
    const alert = screen.getByLabelText("alert-primary")
    expect(alert.style.display).toBe("none")

   })

  
  test('debe de llamar el navigate a la pantalla nueva', () => { 
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}})

    const form  = screen.getByRole("form")
    fireEvent.submit(form)

   expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')

   })


});
