import { Button, Spinner } from '@material-tailwind/react';
import { variant } from '@material-tailwind/react/types/components/button';
import { MouseEventHandler } from 'react';

interface CustomButtonProps {
    text: string;
    className: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    icon?: any;
    variant?: variant;
    loading?: boolean;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    loading = false,
    disabled = false,
    text,
    icon,
    variant,
    className,
    onClick,
}) => {
    return (
        <Button onClick={onClick} disabled={disabled} variant={variant} className={className}>
            <div className="flex gap-2 items-center">
                {loading && <Spinner />}
                {text} {icon}
            </div>
        </Button>
    );
};

export default CustomButton;
