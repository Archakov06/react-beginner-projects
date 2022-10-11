import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
    // 1. Запрашиваем с бека данные
    const [users, setUsers] = React.useState([])

    // При загрузки страницы у нас уже должен отправляться запрос
    const [isLoading, setLoading] = React.useState(true)

    // 2. При первом рендеринге мы будем отправлять запрос на бекенд и для этого
    // мы используем функцию fetch
    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
            // 3.  Преобразуем файл в json
            .then(res => res.json())
            // 4. Из всего json нам необходимо вытащить data и получить массив
            .then(json => {
                setUsers(json.data)
            })
            // 5. Если вдруг произошла ошибка, то мы отлавливаем его с помощью
            // catch
            .catch((err) => {
                console.warn(err)
                alert("Ошибка при получении пользователей")
            })
            // 9. Финальная часть, она будет менять loading на false
            // говорить о том, что загрузка завершилась
            .finally(() => setLoading(false))
    },[]);


    return (
        <div className="App">
            <Users items={users} isLoading={isLoading}/>
            {/* <Success /> */}
        </div>
    );
}

export default App;
