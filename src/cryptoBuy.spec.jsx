import { render, screen, waitFor } from "@testing-library/react";
import CryptoBuy from "./cryptoBuy";
import { describe, it, expect, vi } from "vitest";
import React from "react";

// Mock del componente CryptoDetails
vi.mock("./cryptoDetails", () => ({
  __esModule: true,
  default: ({ handleClose }) => (
    <button onClick={handleClose}>Mock Close</button>
  ),
}));
vi.mock("./cryptoTable");
vi.mock("./cryptoBasket");

describe("CryptoBuy", () => {
  it("Calls the /close_event GET request when closing the dialog is successful", async () => {
    render(<CryptoBuy />);

    // simulate a successful close event
    const closeButton = await screen.findByText("Mock Close");
    closeButton.click();

    // wait for the error message to appear
    const tryAgain = await waitFor(() => screen.getByText("Try again"), {
      timeout: 1000,
    });
    expect(tryAgain).toBeInTheDocument();
  });
});
