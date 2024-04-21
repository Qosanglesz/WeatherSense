import { describe, it, expect, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/svelte"
import Card from "./Card.svelte"

describe("Card component", () => {

    beforeEach(() => {
        render(Card, { props: { title: "Test Title", value: "Test Value" } })
    })

    it('should render with title and value', () => {
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test Value")).toBeInTheDocument();
    });
});
