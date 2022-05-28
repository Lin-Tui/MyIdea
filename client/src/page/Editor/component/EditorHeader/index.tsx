import { Button, Checkbox } from '@vechaiui/react';
import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { experimentActions } from '../../../../store/features/experimentSlice';
import { htmlTemplateCode } from '../../../../constant/experiment';
import { throttle } from '../../../../util';
const EditorHeader: FC = () => {
    const [autoRun, setAutoRun] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const experiment = useAppSelector(state => state.experiment);
    const { htmlCode, cssCode, jsCode } = experiment;
    useEffect(() => {
        if (autoRun) {
            throttle(runCode, 300);
        }
    }, [htmlCode, cssCode, jsCode]);
    const runCode = () => {
        dispatch(experimentActions.setSrcDoc());
    };
    const setHtmltemplate = () => {
        dispatch(experimentActions.setHtmlCode({ htmlCode: htmlTemplateCode }));
    };
    return (
        <div className="flex flex-row w-full h-50  items-center pl-5 border-neutral-200 dark:border-neutral-700 border-b-2">
            <div className="font-bold mr-3">HTML/CSS/JS在线编辑工具</div>
            <Button color="primary" className="mr-2" onClick={setHtmltemplate}>
                HTML模板
            </Button>
            {/* <Button className="mr-2" color="primary">
                案例
            </Button> */}
            <Button className="mr-2" color="primary" variant="solid" onClick={runCode}>
                运行
            </Button>
            <Checkbox
                size="lg"
                checked={autoRun}
                onChange={() => {
                    setAutoRun(!autoRun);
                }}
            >
                <span className="text-[15px]">自动执行</span>
            </Checkbox>
        </div>
    );
};
export default EditorHeader;
