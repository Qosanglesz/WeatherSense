import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Navbar from "./Navbar.svelte";

describe("Navigation component", () => {
    beforeEach(() => {
        render(Navbar, {
            props: {
                link: {
                    home: "/home",
                    history: "/history",
                    github: "/github",
                    contact: "/contact",
                    visualize: "/visualize"
                }
            }
        });
    });

    it('should render navigation links', () => {
        expect(screen.getByText("WeatherSense")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("History")).toBeInTheDocument();
        expect(screen.getByText("Github")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("Data Visualize")).toBeInTheDocument();
    });

    it('should have correct href attributes', () => {
        expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/home");
        expect(screen.getByText("History").closest("a")).toHaveAttribute("href", "/history");
        expect(screen.getByText("Github").closest("a")).toHaveAttribute("href", "/github");
        expect(screen.getByText("Contact").closest("a")).toHaveAttribute("href", "/contact");
        expect(screen.getByText("Data Visualize").closest("a")).toHaveAttribute("href", "/visualize");
    });
});
