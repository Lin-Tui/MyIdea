import { FC } from 'react';
import Editor from '../Editor';
const CSSEditor: FC = () => {
    return (
        <div>
            <Editor lang="css" setCode={() => {}} value="" />
        </div>
    );
};
export default CSSEditor;
