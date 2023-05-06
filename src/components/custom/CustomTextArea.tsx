import { Button, Spinner } from '@material-tailwind/react';
import { MouseEventHandler } from 'react';

interface CustomTextAreaProps {
    loading: boolean;
    disabled: boolean;
    text: string;
    icon: any;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ loading, disabled, text, icon, onClick }) => {
    return (
        <Button onClick={onClick} disabled={disabled} variant="gradient" className="m-2">
            <div className="flex gap-2 items-center">
                {loading && <Spinner />}
                {text} {icon}
            </div>
        </Button>
    );
};

export default CustomTextArea;
