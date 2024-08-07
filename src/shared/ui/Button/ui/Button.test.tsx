import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "shared/ui/Button/ui/Button";

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    });

    test('Test cleat theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    });
});
