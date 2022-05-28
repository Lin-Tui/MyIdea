import { FC } from 'react';
import Editor from '../Editor';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { experimentActions } from '../../../../store/features/experimentSlice';
const JSEditor: FC = () => {
    const dispatch = useAppDispatch();
    const experiment = useAppSelector(state => state.experiment);
    const setJsCode = (value: string) => {
        dispatch(experimentActions.setJsCode({ jsCode: value }));
    };
    return (
        <div>
            <Editor lang="javascript" setCode={setJsCode} value={experiment.jsCode} />
        </div>
    );
};
export default JSEditor;
