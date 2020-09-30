import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sort } from 'semver'
import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components'
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые',
    'Закрытые']

const sortItem = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }]


function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    
    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [category]);

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
                    isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}

            </div>
        </div>
    )
}

export default Home
