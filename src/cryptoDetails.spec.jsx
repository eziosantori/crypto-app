import { render, screen, waitFor } from "@testing-library/react";
import CryptoDetails from "./cryptoDetails";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import { mockCryptos } from "./__mocks__/data";

// // Mock dei dati
// vi.mock("./__mocks__/data", () => ({
//   mockCryptos: [
//     {
//       id: "bitcoin",
//       name: "Bitcoin",
//       price: 57321.45,
//       description: "The first and most well-known cryptocurrency.",
//     },
//   ],
// }));

describe("CryptoDetails", () => {
  it("mostra la descrizione dopo il caricamento", async () => {
    render(
      <CryptoDetails
        open={true}
        currency={mockCryptos[0]}
        handleClose={() => {}}
      />
    );

    const description = await waitFor(
      () => screen.getByText(mockCryptos[0].description),
      { timeout: 1000 }
    );

    expect(description).toBeInTheDocument();
  });
});
