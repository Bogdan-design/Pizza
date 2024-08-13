import React from 'react';
import {cn} from "@/lib/utils";
import Link from "next/link";

type Props = {
    className?: string;
}

const cats = ['Pizzas', 'Combos', 'Appetizers', 'Cocktails', 'Coffee', 'Beverages', 'Desserts', 'Desserts'] as const;
const activeIndex = 0;


export const Categories: React.FC<Props> = ({className}) => {


    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((cat, i) => (
                <Link className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary',
                )} key={i} href={''}>
                    {cat}
                </Link>
            ))}

        </div>
    );
};
