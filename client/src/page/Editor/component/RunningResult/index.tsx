import { FC } from 'react';
import { useAppSelector } from '../../../../store';
const RunningResult: FC = () => {
    const experiment = useAppSelector(stete => stete.experiment);
    return (
        <div className="bg-white w-full h-full">
            <iframe
                srcDoc={experiment.srcDoc}
                title="运行结果"
                sandbox="allow-scripts"
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </div>
    );
};
export default RunningResult;
