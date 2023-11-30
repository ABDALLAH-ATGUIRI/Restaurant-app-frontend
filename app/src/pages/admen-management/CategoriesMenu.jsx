import React, { Fragment } from 'react'
import { HeroCategory, SmallCategory } from '../../components/restaurant-components/components-food'
import { CATEGORYSFOOD } from './appendix/food-category'

const CategoriesMenu = () => {
    return (
        <Fragment>
            <div className='w-full p-10 font-bold flex flex-wrap gap-10 justify-between first-letter:uppercase text-3xl text-white'>
                {CATEGORYSFOOD.map((item, index) => {
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
