import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingPage from "../components/LandingPage";

describe("LandingPage Component", () => {
  test("renders the main heading", () => {
    render(<LandingPage />);
    expect(
      screen.getByRole("heading", { name: /welcome to my landing page/i })
    ).toBeInTheDocument();
  });

  test("renders features list", () => {
    render(<LandingPage />);
    expect(screen.getByText(/fast development with vite/i)).toBeInTheDocument();
    expect(screen.getByText(/tested with jest & rtl/i)).toBeInTheDocument();
    expect(screen.getByText(/styled with simplicity/i)).toBeInTheDocument();
  });

  test("renders call-to-action button", () => {
    render(<LandingPage />);
    expect(
      screen.getByRole("button", { name: /subscribe now/i })
    ).toBeInTheDocument();
  });

  test("button click triggers action", async () => {
    const user = userEvent.setup();
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<LandingPage />);
    const button = screen.getByRole("button", { name: /subscribe now/i });

    await user.click(button);

    expect(alertMock).toHaveBeenCalledWith("Subscribed!");
    alertMock.mockRestore(); // cleanup
  });
});
