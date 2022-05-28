import { FC } from 'react';
import Editor from '../Editor/index';
const HTMLEditor: FC = () => {
    return (
        <div>
            <Editor lang="html" setCode={() => {}} value="" />
        </div>
    );
};
export default HTMLEditor;
