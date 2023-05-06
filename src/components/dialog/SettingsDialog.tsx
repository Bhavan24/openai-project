import { DEFAULT_MODEL } from '@/constants';
import { SettingsContext } from '@/context';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { CommandsDropDown, ModelsDropDown } from '../dropdown';

interface SettingsDialogProps {
    open: boolean;
    handleOpen: any;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ open, handleOpen }) => {
    const { updateSettings } = useContext(SettingsContext);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="bg-gray-900"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader className="text-white">Settings</DialogHeader>
            <DialogBody divider>
                <div className="flex gap-2 m-2 sm:flex-row flex-col">
                    <ModelsDropDown />
                    <CommandsDropDown />
                </div>
            </DialogBody>
            <DialogFooter className="gap-5">
                <Button
                    variant="outlined"
                    color="red"
                    onClick={() => {
                        updateSettings({
                            model: DEFAULT_MODEL,
                            command: '',
                        });
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
