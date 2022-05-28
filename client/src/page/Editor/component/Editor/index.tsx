import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { useTheme } from '../../../../component/ThemeController';
import { eidtorThemeMap } from './theme';
interface Iprops {
    lang: 'html' | 'css' | 'javascript';
    editable?: boolean;
    setCode: (value: string) => void;
    value: string;
}
const langMap: Record<string, any> = {
    html,
    css,
    javascript,
};
const placeholderMap: Record<string, any> = {
    html: '请输入HTML代码...',
    css: '请输入CSS代码...',
    javascript: '请输入JS代码...',
};
const Editor: FC<Iprops> = props => {
    const { value, lang, setCode, editable = true } = props;
    const { colorScheme } = useTheme();
    return (
        <div>
            <CodeMirror
                value={value}
                theme={colorScheme && eidtorThemeMap[colorScheme]}
                height="400px"
                extensions={[langMap[lang]()]}
                editable={editable}
                placeholder={placeholderMap[lang]}
                autoFocus={true}
                onChange={value => setCode(value)}
                className="w-full h-full text-[16px]"
            />
        </div>
    );
};
export default Editor;
