'use client'
import * as React from 'react';
import {ChangeEvent, Fragment} from 'react';
import {FilterCheckbox, FilterCheckboxProps, Input} from "@/components/index";

type Item = FilterCheckboxProps

type Props = {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string
};
export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        limit = 5,
        defaultItems,
        items,
        searchInputPlaceholder = 'Search...',
        onChange,
        defaultValue,
        className,
    }
) => {

    const [showAll, setShowAll] = React.useState(false);



    const [searchValue, setSearchValue] = React.useState("");

    const onChangeSearchInput = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setSearchValue(value)
    }

    const list = showAll ? items.filter((item)=>
        item.text.toLowerCase().includes(searchValue.toLowerCase()) ): defaultItems.slice(0, limit)

    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>

            {showAll && <div className={'mb-5'}>
                <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className={'bg-gray-100 border-none'}/>
            </div>}
            <div className={'flex flex-col gap-4 max-h-96 pr-2 overflow-x-auto scrollbar'}>
                {list.map((item, index) => (
                    <Fragment key={index}>
                        <FilterCheckbox
                            text={item.text}
                            value={item.value}
                            andAdornment={item.andAdornment}
                            checked={false}
                            onCheckedChange={(ide) => console.log(ide)}
                        />
                    </Fragment>

                ))}
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className={'text-primary mt-3'}>
                        {showAll ? 'Hide' : '+ Show'}
                    </button>
                </div>
            )}
        </div>
    );
};