import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';

describe("Home Component", () => {
    test("must have the header on the screen", () => {
        render(<Home />);

        const header = screen.getByText('Did you know?');

        expect(header).toBeInTheDocument();
    });
});
