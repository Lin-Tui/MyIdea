import { Popover, RadioGroup } from '@headlessui/react';
import { cx, Divider } from '@vechaiui/react';
import { useTheme, themes } from '../ThemeController';

export default function ThemSwitcher() {
    const { colorScheme, setColorScheme } = useTheme();

    return (
        <Popover className="relative">
            <Popover.Button className="flex items-center w-full px-3 py-2 text-sm border outline-none rounded-base cursor-base border-neutral-600 bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                <div className="flex flex-row items-center flex-1 space-x-2">
                    <span className="font-semibold text-neutral-100">主题</span>
                </div>
                <div className="text-lg text-neutral-100">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </Popover.Button>
            <Popover.Panel
                className={cx(
                    'absolute right-0 z-50 w-full mt-2 origin-top-right rounded-md shadow-sm outline-none border',
                    'py-2 px-2',
                    'bg-white border-neutral-300 text-neutral-900 dark:text-white dark:bg-neutral-800 dark:border-neutral-700'
                )}
            >
                <div className="flow-root">
                    <span className="flex items-center">
                        <span className="text-sm font-medium">Preferences</span>
                    </span>
                </div>
                <Divider
                    orientation="horizontal"
                    className="border-neutral-200 dark:border-neutral-700"
                />
                <div className="" role="group">
                    <div className="flex flex-col flex-shrink-0 w-full space-y-2 text-sm text-left cursor-base focus:outline-none">
                        <span className="text-smm">Color</span>
                        <RadioGroup value={colorScheme} onChange={setColorScheme}>
                            <RadioGroup.Label className="sr-only">Color</RadioGroup.Label>
                            <div className="flex flex-wrap">
                                {themes.map((theme: any) => (
                                    <RadioGroup.Option
                                        key={theme.id}
                                        value={theme.id}
                                        style={{
                                            backgroundColor: theme.backgroundColor,
                                        }}
                                        className={({ checked }) => `
                              w-5 h-5 rounded-full p-0 flex mr-2 mb-2 items-center justify-center
                              border-2
                              ${checked ? 'border-primary-500' : 'border-transparent'}
                          `}
                                    >
                                        <span
                                            style={{
                                                backgroundColor: theme.primaryColor,
                                            }}
                                            className="flex items-center justify-center w-2.5 h-2.5 -m-1 rounded-full"
                                        />
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </Popover.Panel>
        </Popover>
    );
}
