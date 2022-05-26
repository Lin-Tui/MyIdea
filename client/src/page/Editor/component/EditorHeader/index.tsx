import { Button } from '@vechaiui/react';
import { FC } from 'react';
const EditorHeader: FC = () => {
    return (
        <div className="flex flex-row w-full h-50  items-center pl-5 border-neutral-200 dark:border-neutral-700 border-b-2">
            <div className="font-bold mr-3">HTML/CSS在线编辑工具</div>
            <Button color="primary" className="mr-2">
                HTML模板
            </Button>
            <Button className="mr-2" color="primary">
                案例
            </Button>
            <Button className="mr-2" color="primary" variant="solid">
                运行
            </Button>
        </div>
    );
};
export default EditorHeader;
