'use client'
import * as React from 'react';
import {Title} from "@/components/index";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product.card";
import {useIntersection} from 'react-use';
import {useEffect} from "react";
import {useCategoryStore} from "@/store/category";


type Props = {
    title: string
    items: any[]
    categoryId: number
    listClassName?: string
    className?: string
};
export const ProductsGroupList: React.FC<Props> = ({
                                                       listClassName,
                                                       className,
                                                       categoryId,
                                                       items,
                                                       title
                                                   }) => {

    const setActiveCategoryId = useCategoryStore((state)=>state.setActiveId)

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    },[title,intersection?.isIntersecting, categoryId]);


    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size={'lg'} className={'font-extrabold mb-5'}/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.filter((product: any) => product.items.length > 0).map((product: any) =>
                    <ProductCard
                        id={product.id}
                        name={product.name}
                        key={product.id}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                )}
            </div>
        </div>
    );
};