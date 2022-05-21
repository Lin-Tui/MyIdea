import { Popover, RadioGroup } from '@headlessui/react';
import { cx, Divider } from '@vechaiui/react';
import { useTheme, themes } from '../ThemeController';

export default function ThemSwitcher() {
    const { colorScheme, setColorScheme } = useTheme();

    return (
        <Popover className="relative w-full">
            <Popover.Button className="flex items-center w-full text-sm ">
                <div className="flex flex-row items-center flex-1 space-x-2">
                    <span className="font-semibold">主题</span>
                </div>
            </Popover.Button>
            <Popover.Panel
                className={cx(
                    'absolute right-0 z-50 w-150 mt-4 origin-top-right rounded-md shadow-sm outline-none border',
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
