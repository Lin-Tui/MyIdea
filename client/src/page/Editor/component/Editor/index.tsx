import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
const Editor: FC = () => {
    return (
        <div>
            <CodeMirror
                value="console.log('hello world!');"
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />
        </div>
    );
};
export default Editor;
