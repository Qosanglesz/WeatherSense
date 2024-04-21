import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Timestamp from "./Timestamp.svelte";

describe("Timestamp component", () => {

    beforeEach(() => {
        render(Timestamp, { props: {
            timestamp: "2024-04-21T11:35:00.000Z",
                prefix: "Latest update on"

            }});
    });

    it("should render formatted timestamp with prefix", () => {
        expect(screen.getByText("Latest update on April 21, 2024 at 6:35 PM")).toBeInTheDocument();
    });
});
