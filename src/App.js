import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)

    //1. Собираемся сделать контролируемый инпут в месте где index.jsx в 13 строке
    // укажем отдельный onChange, который будет контролироватся от state
    const [searchValue, setSearchValue] = React.useState('')

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

    return (
        <div className="App">
            {
                //2. Передаем стрелочные функции
            }
            <Users
                items = {users}
                isLoading = {isLoading}
                searchValue = {searchValue}
                onChangeSearchValue = {onChangeSearchValue}
            />
            {/* <Success /> */}
        </div>
    );
}

export default App;
