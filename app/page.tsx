import {Container, Title, TopBar} from "@/components/index";
import {Filters} from "@/components/shared/filters";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text={'All pizzas'} size='lg' className='font-extrabold'/>
            </Container>
                <TopBar/>
            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    {/*filter*/}
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>

                    {/*list of goods*/}
                    <div className='flex-1'>
                        <div className="flex flex-col gap-16">
                            {/*<ProductsGroupList title="Pizza" items={[1, 2, 3, 4, 5]}/>*/}
                            {/*<ProductsGroupList title="Combo" items={[1, 2, 3, 4, 5]}/>*/}
                        </div>

                    </div>
                </div>
            </Container>
        </>

    )
}
