import { FC } from 'react';
import Editor from '../Editor';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { experimentActions } from '../../../../store/features/experimentSlice';
const CSSEditor: FC = () => {
    const dispatch = useAppDispatch();
    const experiment = useAppSelector(state => state.experiment);
    const setCssCode = (value: string) => {
        dispatch(experimentActions.setCssCode({ cssCode: value }));
    };
    return (
        <div>
            <Editor lang="css" setCode={setCssCode} value={experiment.cssCode} />
        </div>
    );
};
export default CSSEditor;
