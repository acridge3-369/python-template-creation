import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, asChild, ...props }, ref) => {
    if (asChild) {
        return <>{children}</>;
    }

    return (
        <button ref={ref} className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export { Button };