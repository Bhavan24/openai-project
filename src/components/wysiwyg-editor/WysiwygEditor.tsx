import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface IWysiwygEditor {
    setReponse: any;
}

const WysiwygEditor: React.FC<IWysiwygEditor> = ({ setReponse }) => {
    return (
        <Editor
            apiKey={'qw458k9ky6vktmpvr1wohuc97f8sbd7r9x73ztfca9ikzjjt'}
            onEditorChange={(val: any, editor: any) => {
                setReponse(val);
            }}
        />
    );
};

export default WysiwygEditor;
