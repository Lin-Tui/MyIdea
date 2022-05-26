import { FC } from 'react';
import CSSEditor from './component/CSSEditor';
import HTMLEditor from './component/HTMLEditor';
import EditorHeader from './component/EditorHeader';
import RunningResult from './component/RunningResult';
const Editor: FC = () => {
    return (
        <div className="w-full h-full bg-fill rounded-md shadow-sm ">
            <div className="grid gap-3 grid-cols-editorLayout grid-rows-editorLayout w-full h-full">
                <div className="col-start-1 col-end-3 w-full h-full">
                    <EditorHeader />
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                    <HTMLEditor />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end4">
                    <CSSEditor />
                </div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-4">
                    <RunningResult />
                </div>
            </div>
        </div>
    );
};
export default Editor;
