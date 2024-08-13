import * as React from 'react';
import {
    FilterCheckbox,
    Input,
    RangeSlider,
    Title
} from "@/components/index";

type Props = {
    className?: string;
};
export const Filters:React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Filter' size='sm' className='mb-5 font-extrabold'/>
            <div className="flex flex-col gap-4">
                <FilterCheckbox text={'Possible to collect'} value={'1'}/>
                <FilterCheckbox text={'Novelty'} value={'2'}/>
            </div>
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className={'font-bold mb-3'}>Price from to:</p>
                <div className="flex mb-5 gap-3">
                    <Input type='number' min={0} max={30000} placeholder='0' defaultValue={0}/>
                    <Input type='number' min={100} max={1000} placeholder='30000'/>
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0,5000]}/>
            </div>

        </div>
    );
};