import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('text: did you know?', () => {
    test('should start with did you know? written on the page', () => {
        render(<Header />);

        const headerText = screen.getByText('Did you know?');

        expect(headerText).toBeInTheDocument();
    });
});
