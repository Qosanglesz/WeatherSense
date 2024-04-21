import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Footer from "./Footer.svelte";

describe("Footer component", () => {
    it("should render footer text", () => {
        render(Footer);
        expect(screen.getByText("© 2024 Your Website. All rights reserved.")).toBeInTheDocument();
    });
});
