import ListButton from "@components/listButton/ListButton";
import { ListButtonName, BUTTON_NAME_TO_COLOR } from "@libs/types/listButton";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("ListButton component", () => {
	it("should render the button with the correct name", () => {
		const buttonName = ListButtonName.RESET;
		const clickHandler = vi.fn();

		render(<ListButton buttonName={buttonName} clickHandler={clickHandler} />);

		const button = screen.getByRole("button", { name: buttonName });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(buttonName);
	});

	it("should apply the correct background color based on buttonName", () => {
		const buttonName = ListButtonName.FINALIZE;
		const clickHandler = vi.fn();

		render(<ListButton buttonName={buttonName} clickHandler={clickHandler} />);

		const button = screen.getByRole("button", { name: buttonName });
		expect(button).toHaveStyle(
			`background-color: ${BUTTON_NAME_TO_COLOR[buttonName]}`
		);
	});

	it("should call clickHandler when the button is clicked", () => {
		const buttonName = ListButtonName.RESULTS;
		const clickHandler = vi.fn();

		render(<ListButton buttonName={buttonName} clickHandler={clickHandler} />);

		const button = screen.getByRole("button", { name: buttonName });
		fireEvent.click(button);

		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});
