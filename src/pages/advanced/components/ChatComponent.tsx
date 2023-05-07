import { CustomButton } from '@/components';
import { Textarea, Typography } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

interface ChatComponentProps {}

const ChatComponent: React.FC<ChatComponentProps> = () => {
    const sendMessage = () => {
        alert('Not Implemented');
    };

    return (
        <>
            <div className="text-white">
                <div className="mb-2">
                    <Typography variant="h5" color="white" className="my-2">
                        Chat
                    </Typography>
                    <a
                        href="https://platform.openai.com/docs/api-reference/chat/create"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500"
                    >
                        Click here for Documentation
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Textarea placeholder="Your Message" rows={1} />
                <div>
                    <CustomButton
                        loading={false}
                        disabled={false}
                        variant="gradient"
                        text={'Send'}
                        icon={<AiOutlineSend />}
                        onClick={sendMessage}
                        className={'float-right'}
                    />
                </div>
            </div>
        </>
    );
};

export default ChatComponent;
