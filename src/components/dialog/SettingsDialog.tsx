import { GPT_API_TYPES } from '@/constants';
import { SettingsContext } from '@/contexts';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React, { useCallback, useContext } from 'react';
import { ModelsDropDown, TypesDropDown } from '../dropdown';
import { CompletionForm } from '../form';

interface SettingsDialogProps {
    open: boolean;
    handleOpen: any;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ open, handleOpen }) => {
    const { settings, resetSettings } = useContext(SettingsContext);

    const getCurrentContent = useCallback(() => {
        switch (settings.type) {
            case GPT_API_TYPES[0].value: {
                return (
                    <div className="my-1">
                        <CompletionForm />
                    </div>
                );
            }
            default: {
                return <></>;
            }
        }
    }, [settings]);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="bg-gray-900 overflow-y-scroll"
            size="xxl"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader className="text-white">Settings</DialogHeader>
            <DialogBody divider>
                <form className="flex flex-col gap-4">
                    <div className="my-1">
                        <ModelsDropDown />
                    </div>
                    <div className="my-1">
                        <TypesDropDown />
                    </div>
                    {getCurrentContent()}
                </form>
            </DialogBody>
            <DialogFooter className="gap-5">
                <Button
                    variant="outlined"
                    color="red"
                    onClick={() => {
                        resetSettings();
                        handleOpen();
                    }}
                >
                    <span>Reset</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Save</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default SettingsDialog;
