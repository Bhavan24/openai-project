import { DEFAULT_MODEL } from '@/constants';
import { SettingsContext } from '@/context';
import { BanknotesIcon, CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from '@material-tailwind/react';
import React, { useContext } from 'react';
import { CommandsDropDown, ModelsDropDown } from '../dropdown';

interface SettingsDialogProps {
    open: boolean;
    handleOpen: any;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ open, handleOpen }) => {
    const { settings, updateSettings } = useContext(SettingsContext);

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
            <DialogBody divider className="h-[15rem] overflow-y-scroll">
                <form className="flex flex-col gap-4">
                    <div className="my-1">
                        <ModelsDropDown />
                    </div>
                    <div className="my-1">
                        <CommandsDropDown />
                    </div>
                    <div className="my-1">
                        <Input
                            value={settings.subCommand}
                            label="Sub Command (Ex: Code to be converted)"
                            onChange={event => {
                                updateSettings({ ...settings, subCommand: event.target.value });
                            }}
                        />
                    </div>
                </form>
            </DialogBody>
            <DialogFooter className="gap-5">
                <Button
                    variant="outlined"
                    color="red"
                    onClick={() => {
                        updateSettings({
                            model: DEFAULT_MODEL,
                            command: '',
                            subCommand: '',
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
