import MonacoEditor from '@monaco-editor/react';
import { useCallback, useState } from 'react';
import { MONOCO_LANGUAGES, MONOCO_THEMES } from '../../constants';

interface IEditor {
    response: any;
    setReponse: any;
    height: any;
    lang: any;
}

const Editor: React.FC<IEditor> = ({ response, setReponse, height, lang }) => {
    const [language, setLanguage] = useState(lang);
    const [theme, setTheme] = useState<boolean>(true);

    const copyResults = useCallback(() => {
        navigator.clipboard.writeText(response);
    }, [response]);

    return (
        <>
            <MonacoEditor
                height={height}
                language={language}
                theme={theme ? MONOCO_THEMES.VSDARK : MONOCO_THEMES.LIGHT}
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
            <div className="flex my-2 justify-between">
                <div className="flex gap-5">
                    {/* <button
                        onClick={() => {
                            setTheme(b => !b);
                        }}
                    >
                        *
                    </button> */}
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={language}
                        placeholder="Select Language"
                        onChange={(lang: any) => {
                            setLanguage(lang);
                        }}
                    >
                        {MONOCO_LANGUAGES.map((language, i) => (
                            <option key={i} value={language.value}>
                                {language.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* <button onClick={copyResults} className="float-right">
                    Copy Results
                </button> */}
            </div>
        </>
    );
};

export default Editor;
