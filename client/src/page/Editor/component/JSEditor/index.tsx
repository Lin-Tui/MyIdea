import { FC } from 'react';
import Editor from '../Editor';
const JSEditor: FC = () => {
    return (
        <div>
            <Editor lang="javascript" setCode={() => {}} value="" />
        </div>
    );
};
export default JSEditor;
