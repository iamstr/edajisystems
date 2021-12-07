import { Config } from './config';
import { Select } from './select';
import { Slim } from './slim';
import { Data, dataArray, Option } from './data';
interface Constructor {
    select: string | Element;
    data?: dataArray;
    showSearch?: boolean;
    searchPlaceholder?: string;
    searchText?: string;
    searchingText?: string;
    searchFocus?: boolean;
    searchHighlight?: boolean;
    searchFilter?: (opt: Option, search: string) => boolean;
    closeOnSelect?: boolean;
    showContent?: string;
    placeholder?: string;
    allowDeselect?: boolean;
    allowDeselectOption?: boolean;
    hideSelectedOption?: boolean;
    deselectLabel?: string;
    isEnabled?: boolean;
    valuesUseText?: boolean;
    showOptionTooltips?: boolean;
    selectByGroup?: boolean;
    limit?: number;
    timeoutDelay?: number;
    addToBody?: boolean;
    ajax?: (value: string, func: (info: any) => void) => void;
    addable?: (value: string) => Option | string;
    beforeOnChange?: (info: Option | Option[]) => void | boolean;
    onChange?: (info: Option | Option[]) => void;
    beforeOpen?: () => void;
    afterOpen?: () => void;
    beforeClose?: () => void;
    afterClose?: () => void;
}
export default class SlimSelect {
    config: Config;
    select: Select;
    data: Data;
    slim: Slim;
    ajax: ((value: string, func: (info: any) => void) => void) | null;
    addable: ((value: string) => Option | string) | null;
    beforeOnChange: ((info: Option) => void | boolean) | null;
    onChange: ((info: Option) => void) | null;
    beforeOpen: (() => void) | null;
    afterOpen: (() => void) | null;
    beforeClose: (() => void) | null;
    afterClose: (() => void) | null;
    private windowScroll;
    constructor(info: Constructor);
    validate(info: Constructor): HTMLSelectElement;
    selected(): string | string[];
    set(value: string | string[], type?: string, close?: boolean, render?: boolean): void;
    setSelected(value: string | string[], type?: string, close?: boolean, render?: boolean): void;
    setData(data: dataArray): void;
    addData(data: Option): void;
    open(): void;
    close(): void;
    moveContentAbove(): void;
    moveContentBelow(): void;
    enable(): void;
    disable(): void;
    search(value: string): void;
    setSearchText(text: string): void;
    render(): void;
    destroy(id?: string | null): void;
    private documentClick;
}
export {};
