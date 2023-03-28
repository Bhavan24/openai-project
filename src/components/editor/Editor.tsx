import { Button, Option, Select } from '@material-tailwind/react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { MONOCO_LANGUAGES } from '../../constants';
import { MONOCO_THEMES_LIST } from './../../constants/MonocoConstants';

interface IEditor {
    response: any;
    setReponse: any;
}

const Editor: React.FC<IEditor> = ({ response, setReponse }) => {
    const monaco = useMonaco();
    const [language, setLanguage] = useState('plaintext');
    const [theme, setTheme] = useState('vs-dark');

    useEffect(() => {
        if (monaco && theme) {
            import(`monaco-themes/themes/${theme}.json`)
                .then(data => {
                    monaco.editor.defineTheme(theme, data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }, [monaco, theme]);

    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(response);
    }, [response]);

    return (
        <div className="py-2">
            <div className="flex my-2 justify-between ">
                <div className="flex gap-5">
                    <Select
                        color="blue"
                        defaultValue={language}
                        label="Select Language"
                        onChange={(lang: any) => {
                            setLanguage(lang);
                        }}
                    >
                        {MONOCO_LANGUAGES.map((language, i) => (
                            <Option key={i} value={language.value}>
                                {language.label}
                            </Option>
                        ))}
                    </Select>
                    <Select
                        color="blue"
                        defaultValue={theme}
                        label="Select Theme"
                        onChange={(theme: any) => {
                            setTheme(theme);
                        }}
                    >
                        {MONOCO_THEMES_LIST.map((theme, i) => (
                            <Option key={i} value={theme.value}>
                                {theme.label}
                            </Option>
                        ))}
                    </Select>
                    <div>
                        <Button variant="outlined" className="text-lg" onClick={copyResults}>
                            <AiOutlineCopy />
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <MonacoEditor
                    height={'75vh'}
                    language={language}
                    theme={theme}
                    value={response}
                    options={{
                        fontSize: 12,
                        wordWrap: 'on',
                        minimap: {
                            enabled: false,
                        },
                    }}
                    onChange={newValue => {
                        setReponse(newValue!);
                    }}
                />
            </div>
        </div>
    );
};

export default Editor;
