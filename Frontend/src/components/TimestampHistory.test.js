import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import TimestampHistory from "./TimestampHistory.svelte";

describe("TimestampHistory component", () => {
    it("should render formatted timestamp with link", () => {
        const timestamp = "2024-04-21T11:35:00.000Z";
        const link = "/details";

        render(TimestampHistory, { props: { timestamp, link } });
        const renderedText = screen.getByText("Data on April 21, 2024 at 6:35 PM");
        const renderedLink = screen.getByRole("link", { name: "View" });

        expect(renderedText).toBeInTheDocument();
        expect(renderedLink).toBeInTheDocument();
        expect(renderedLink).toHaveAttribute("href", "/details");
    });
});
