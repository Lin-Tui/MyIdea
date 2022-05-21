import { Button } from '@vechaiui/react';
import { FC } from 'react';
const EditorHeader: FC = () => {
    return (
        <div>
            Editor Header
            <div>HTML/CSS在线编辑工具</div>
            <Button variant="light" color="orange">
                HTML模板
            </Button>
            <Button>案例</Button>
            <Button>运行</Button>
        </div>
    );
};
export default EditorHeader;
