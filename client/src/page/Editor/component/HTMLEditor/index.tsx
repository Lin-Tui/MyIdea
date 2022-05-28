import { FC } from 'react';
import Editor from '../Editor/index';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { experimentActions } from '../../../../store/features/experimentSlice';
const HTMLEditor: FC = () => {
    const dispatch = useAppDispatch();
    const experiment = useAppSelector(state => state.experiment);
    const setHtmlCode = (value: string) => {
        dispatch(experimentActions.setHtmlCode({ htmlCode: value }));
    };
    return (
        <div>
            <Editor lang="html" setCode={setHtmlCode} value={experiment.htmlCode} />
        </div>
    );
};
export default HTMLEditor;
