import * as React from 'react';
import {FilterCheckboxProps} from "@/components/index";

type Item = FilterCheckboxProps

type Props = {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string
};
export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        limit =5,
        defaultItems,
        items,
        searchInputPlaceholder='Search...',
        onChange,
        defaultValue,
        className,
    }
) => {
    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>

            

        </div>
    );
};