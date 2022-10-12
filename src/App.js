import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [searchValue, setSearchValue] = React.useState('')
    const [invites, setInvites] = React.useState([])

    // 1. Изменения стейта для пользователей, которые будут приглашены в дальнейшем
    const [success, setSuccess] = React.useState(false)

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
    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    // 3. Пишем функцию и передаем его в Users , а затем и в index.js в пропсах пишем его
    const onClickSendInvites = () => {
        setSuccess(true)
    }

    return (
        <div className="App">

            {/*
                2. Если у нас выводит success то выводим Сакссес в противном случае пользователей,
                а count={invites.length} - необходим для подсчета пользователей которых мы пригласили
            */}
            { success ? (
                <Success count={invites.length}/>
            ) : (
                <Users
                    items = {users}
                    isLoading = {isLoading}
                    searchValue = {searchValue}
                    onChangeSearchValue = {onChangeSearchValue}
                    invites = {invites}
                    onClickInvite = {onClickInvite}
                    onClickSendInvites = {onClickSendInvites}
                />
            )}
            {/* <Success /> */}
        </div>
    );
}

export default App;
