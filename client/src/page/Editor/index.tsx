import { FC } from 'react';
import CSSEditor from './component/CSSEditor';
import HTMLEditor from './component/HTMLEditor';
import EditorHeader from './component/EditorHeader';
import RunningResult from './component/RunningResult';
import JSEditor from './component/JSEditor/index';
const Editor: FC = () => {
    return (
        <div className="bg-fill rounded-md shadow">
            <div className="grid grid-cols-editorLayout grid-rows-editorLayout">
                <div className="col-start-1 col-end-3">
                    <EditorHeader />
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 h-full w-full border-neutral-200 dark:border-neutral-700 border-b-2">
                    <HTMLEditor />
                </div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-3 border-neutral-200 dark:border-neutral-700 border-b-2 border-l-2">
                    <CSSEditor />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end-4 ">
                    <JSEditor />
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-4 border-l-2 border-neutral-200 dark:border-neutral-700">
                    <RunningResult />
                </div>
            </div>
        </div>
    );
};
export default Editor;
