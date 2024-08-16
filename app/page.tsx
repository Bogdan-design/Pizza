import {Container, Title, TopBar} from "@/components/index";
import {Filters} from "@/components/shared/filters";
import {ProductsGroupList} from "@/components/shared/products.group.list";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text={'All pizzas'} size='lg' className='font-extrabold'/>
            </Container>
                <TopBar/>
            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    {/*filter*/}
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>

                    {/*list of goods*/}
                    <div className='flex-1'>
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList categoryId={1} items={[
                                {
                                    id: 1,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 7,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 8,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 9,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]} title={'Pizzas'}/>
                            <ProductsGroupList categoryId={2} items={[
                                {
                                    id: 1,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 7,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 8,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 9,
                                    name: 'Cheeseburger pizza',
                                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hungryhowies.com%2Fbacon-cheddar-cheeseburger-pizza&psig=AOvVaw2ZcqVHL30Jr7WehfI-WA6V&ust=1723836895903000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjh74ff94cDFQAAAAAdAAAAABAE',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]} title={'Combos'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>

    )
}
