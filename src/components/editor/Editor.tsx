import { Option, Select } from '@material-tailwind/react';
import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import { camelCase } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { MONOCO_LANGUAGES } from '../../constants';
import { CopyButton } from '../button';

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
                    monaco.editor.defineTheme(camelCase(theme), data);
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
        <div className="my-2">
            <div>
                <MonacoEditor
                    height={'55vh'}
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
            <div className="flex my-2 justify-between gap-5 sm:flex-row flex-col">
                <div className="my-2">
                    <Select
                        color="blue"
                        className="text-white"
                        value={language}
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
                </div>
                {/* <div>
                    <Select
                        color="blue"
                        className="text-white"
                        value={theme}
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
                </div> */}
                <div>
                    <CopyButton text={response} />
                </div>
            </div>
        </div>
    );
};

export default Editor;
