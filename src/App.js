import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
    // 1. Стейт для валюты (по умолчанию будет пустой объект, в которой
    // потом запихнем данные из бека
    const [rates, setRates] = React.useState({})

    // 3. Будущий функционал для выбора валюты (От (первая колонка) - до (вторая колонка) ).
    // По умолчанию будет выбран рубль
    const [fromCurrency, setFromCurrency] = React.useState("RUB")
    const [toCurrency, setToCurrency] = React.useState("USD")

    // 2. Запрос на бекенд
    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then((res) => res.json())
            .then((json) => {
                setRates(json.rates);
                console.log(json.rates)
            })
            .catch((err) => {
                console.warn(err);
                alert("Не уделаось получить инфу")
            })
        }, [])

  return (
    <div className="App">
        <Block value={0}
               currency={fromCurrency}
               onChangeCurrency={setFromCurrency}
        />
        <Block value={0}
               currency={toCurrency}
               onChangeCurrency={setToCurrency}
        />
    </div>
  );
}

export default App;
