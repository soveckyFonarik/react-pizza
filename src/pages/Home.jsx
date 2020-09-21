import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories, PizzaBlock, SortPopup } from '../components'
import { setCategory } from '../redux/actions/filters'

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые',
    'Закрытые']

const sortItem = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }]

function Home() {
    const items = useSelector(({ pizzas }) => pizzas.items);

    const dispatch = useDispatch();

    const reduxSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={reduxSelectCategory} items={categoriesNames} />
                <SortPopup itemsSort={sortItem} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map((obj) =>
                        <PizzaBlock key={obj.id} {...obj} />
                    )
                }
            </div>
        </div>
    )
}

export default Home
