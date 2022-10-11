import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [searchValue, setSearchValue] = React.useState('')

    // 1. Для того, чтобы делать приглашение пользователей. Он будет пустой, другими
    // словами приглашенных пользователей у нас нето. И нам необходимо, что при нажатии
    // на кнопку плюс узнали id - пользователя и если же мы кликнули на него, то
    // его добавить в этот массив invites или же от туда его удалить, если он был уже добавлен
    const [invites, setInvites] = React.useState([])

    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => {
                setUsers(json.data)
            })
            .catch((err) => {
                console.warn(err)
                alert("Ошибка при получении пользователей")
            })
            .finally(() => setLoading(false))
    },[]);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    // 4. Когда мы будем кликать на эту кнопку проверять есть ли он (человек) у нас в массиве или
    // нет. Если есть, то исключаем его, если нет, то оставляем
    const onClickInvite = (id) => {
        // 5. Если в приглашенных у нас есть уже такой же айди, то
        if (invites.includes(id)) {
            // мы должны получить предыдущее значение, сделать фильтрацию, вытащить каждого пользователя
            // если то что передали в эту функцию нету(совпадать с конкретным id) в этом массиве, то
            // добавляй этого пользователя.
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            // Однако если его нет, то мы добавляем его в этот массив
            setInvites(prev => [...prev, id])
        }
    }

    return (
        <div className="App">
            <Users
                items = {users}
                isLoading = {isLoading}
                searchValue = {searchValue}
                onChangeSearchValue = {onChangeSearchValue}
                invites = {invites}
                onClickInvite = {onClickInvite}
            />
            {/* <Success /> */}
        </div>
    );
}

export default App;
