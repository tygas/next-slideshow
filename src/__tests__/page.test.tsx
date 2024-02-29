import { render, fireEvent } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage reducer", () => {
  it("updates the current image URL when 'next' action is dispatched", () => {
    const cats = [{ url: "cat1.jpg" }, { url: "cat2.jpg" }, { url: "cat3.jpg" }]; // Replace with your actual cat data
    const { getByTestId } = render(<HomePage cats={cats} />);

    // Assuming you have a button or element that triggers the "next" action
    const nextButton = getByTestId("next-button"); // Adjust this selector based on your UI

    // Click the "next" button
    fireEvent.click(nextButton);

    // Assert that the current image URL has been updated
    const updatedImage = getByTestId("current-image"); // Adjust this selector based on your UI
    expect(updatedImage.src).toBe("cat2.jpg"); // Assuming cat2.jpg is the next image in the array
  });
});
