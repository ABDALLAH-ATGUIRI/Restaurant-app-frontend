import React, { Fragment } from 'react'
import { HeroCategory, SmallCategory } from '../../components/restaurant-components/components-food'

const CATEGORYITEMS = [
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "./assets/hero/pngwing.com.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng-caesar-salad.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/desire.png"
    }, {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng-hamburger.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng-caesar-salad.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng-orange-juice.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/sandwich.png"
    },
    {
        title: "Hungry Burger",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        image: "./assets/images/kisspng-caesar-salad.png"
    },


]

const CategoriesMenu = () => {
    return (
        <Fragment>
            <div className='w-full p-10 font-bold flex flex-wrap gap-10 justify-between first-letter:uppercase text-3xl text-white'>
                {CATEGORYITEMS.map((item, index) => {
                    if (index === 0) {
                        return (
                            <HeroCategory
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                index={index}
                            />
                        )
                    }
                    return (
                        <SmallCategory
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            index={index}
                        />
                    )
                })}
            </div>
        </Fragment>)
}

export default CategoriesMenu
