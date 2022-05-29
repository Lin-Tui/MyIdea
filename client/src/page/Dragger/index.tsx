import GridLayout, { WidthProvider } from 'react-grid-layout';
import { FC, useState } from 'react';
import { ItemList } from '../../constant/practice';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.scss';

const defaultLayout = [
    { i: 'a', x: 0, y: 0, w: 2, h: 1, static: true },
    { i: 'b', x: 1, y: 1, w: 1, h: 2, minW: 1, maxW: 2 },
    { i: 'c', x: 2, y: 0, w: 1, h: 3, minH: 3, maxH: 5 },
    { i: 'd', x: 3, y: 0, w: 2, h: 1 },
    { i: 'e', x: 0, y: 1, w: 1, h: 2 },
    { i: 'f', x: 3, y: 0, w: 3, h: 2 },
    { i: 'g', x: 6, y: 0, w: 2, h: 2 },
    { i: 'h', x: 5, y: 0, w: 1, h: 1 },
];
const ReactGridLayout = WidthProvider(GridLayout);

const Dragger: FC = () => {
    const [layout, setLayout] = useState(defaultLayout);
    const stringifyLayout = () => {
        return layout.map(function (l) {
            const name = l.i === '__dropping-elem__' ? 'drop' : l.i;
            return (
                <div key={l.i}>
                    <b>{name}</b>
                    {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
                </div>
            );
        });
    };
    const onLayoutChange = (layout: any) => {
        setLayout(layout);
    };
    return (
        <div className="w-full h-full">
            <div className="w-full  bg-fill rounded-md shadow flex flex-col items-center p-8">
                <div className="text-[25px] font-bold mb-7">
                    实时位置信息 <code>[x, y, w, h]</code>
                </div>
                <div className="w-full flex flex-row flex-wrap justify-between text-[20px]">
                    {stringifyLayout()}
                </div>
            </div>
            <div className="bg-fill rounded-md shadow mt-5 p-4">
                <ReactGridLayout
                    className="layou"
                    layout={layout}
                    cols={10}
                    rowHeight={200}
                    width={1950}
                    isResizable
                    onLayoutChange={onLayoutChange}
                    resizeHandles={['e', 'nw', 'n', 's', 'se', 'ne', 'sw', 'w']}
                >
                    {ItemList.map(item => {
                        return (
                            <div key={item.key} className={`${item.className} dragger-item`}>
                                {item.key}
                            </div>
                        );
                    })}
                </ReactGridLayout>
            </div>
        </div>
    );
};
export default Dragger;
