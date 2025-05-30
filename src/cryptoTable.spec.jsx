import { render, screen, fireEvent } from "@testing-library/react";
import CryptoTable from "./cryptoTable";
import { describe, it, expect, vi } from "vitest";
import { mockCryptos } from "./__mocks__/data";

const mockData = {
  count: 7,
  results: mockCryptos,
};

describe("CryptoTable", () => {
  it("1. correctly handles page change (table pagination)", () => {
    const handlePageChange = vi.fn();

    render(
      <CryptoTable
        data={mockData}
        page={0}
        handleBuy={() => {}}
        handleOpen={() => {}}
        handlePageChange={handlePageChange}
      />
    );

    const nextButton = screen.getByLabelText("Go to next page");
    fireEvent.click(nextButton);

    expect(handlePageChange).toHaveBeenCalled();
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it("2. details button should have margin left set to 20px", () => {
    render(
      <CryptoTable
        data={mockData}
        page={0}
        handleBuy={() => {}}
        handleOpen={() => {}}
        handlePageChange={() => {}}
      />
    );

    const detailsButton = screen.getAllByText("Details")[0];
    expect(detailsButton).toHaveStyle({ marginLeft: "20px" });
  });

  it("3. name cells for coins with prices < 100 should have color green", () => {
    render(
      <CryptoTable
        data={mockData}
        page={0}
        handleBuy={() => {}}
        handleOpen={() => {}}
        handlePageChange={() => {}}
      />
    );

    const rippleCell = screen.getByText("Ripple");
    expect(rippleCell).toBeInTheDocument();
    expect(rippleCell).toHaveStyle({ color: "rgb(0, 128, 0)" });
  });

  it("4. correctly opne modal passign the currency", () => {
    const handleOpen = vi.fn();
    render(
      <CryptoTable
        data={mockData}
        page={0}
        handleBuy={() => {}}
        handleOpen={handleOpen}
        handlePageChange={() => {}}
      />
    );

    const detailsButton = screen.getAllByText("Details")[0];
    fireEvent.click(detailsButton);
    expect(handleOpen).toHaveBeenCalledWith(mockCryptos[0]);
  });
});
