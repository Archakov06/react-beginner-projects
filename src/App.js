import React from 'react';
import './index.scss';
import {Collection} from "./Collection";

const carts = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
]

function App() {
    // Определяеем какую категорию мы выбрали и передавать её в мок.апи
    const [categoryId, setCategoryId] = React.useState(0)
    const [searchValue, setSearchValue] = React.useState("")
    const [collections, setCollections] = React.useState([])

    React.useEffect(() => {
        fetch('https://634812fbdb76843976b9b35d.mockapi.io/Collections')
            .then((res) => res.json())
            .then((json) => {
                setCollections(json)
            })
            .catch((err) => {
                console.warn(err);
                alert("Ошибка при получение данных")
            })
    }, [])


    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {  carts.map((obj, index) => (
                        // Если категория айди совпадает с индексом то сделай флажок темным
                        <li
                            onClick={() => setCategoryId(index)}
                            className={categoryId === index ? "active" : ""}
                            key = {obj.name}>{obj.name}</li>
                    ))}

                </ul>
                <input
                    value={searchValue}
                    onChange = {(e) => setSearchValue(e.target.value)}
                    className="search-input"
                    placeholder="Поиск по названию"/>
            </div>
            <div className="content">
                {collections
                    .filter(obj => {
                        return obj.name.toLowerCase().includes(searchValue.toLowerCase())
                    })
                    .map((obj, index) => (
                        <Collection key = {index} name={obj.name} images={obj.photos}/>
                    ))}
            </div>
            <ul className="pagination">
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default App;
