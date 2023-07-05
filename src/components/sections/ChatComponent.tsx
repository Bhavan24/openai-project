import { Button, Textarea } from '@mantine/core';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const ChatComponent: React.FC = () => {
    const sendMessage = () => {
        alert('Not Implemented');
    };

    return (
        <>
            <div className="text-white">
                <div className="mb-2">
                    <h5>Chat</h5>
                    <a
                        href="https://platform.openai.com/docs/api-reference/chat"
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
                    <Button
                        loading={false}
                        disabled={false}
                        variant="gradient"
                        rightIcon={<AiOutlineSend />}
                        onClick={sendMessage}
                        className={'float-right'}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ChatComponent;
