import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
    const [rates, setRates] = React.useState({})
    const [fromCurrency, setFromCurrency] = React.useState("RUB")
    const [toCurrency, setToCurrency] = React.useState("USD")

    // 2. Сохраняем значение в state
    const [fromPrice, setFromPrice] = React.useState(0)
    const [toPrice, setToPrice] = React.useState(0)

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

    // 1. Функция для контролирование того, что мы вводим в инпуте
    const onChangeFromPrice = (value) => {
        // 3. Функционал для того, чтобы валюта одной страны конвертировалось в валюту
        // другой страны: внутри rates берем ту валюту которую хотим конвертировать. Допустим
        // наш рубль переконвертировать в доллар => значение делится на 63.725006
        const price = value / rates[fromCurrency]
        // Вторая переменная говорит стоимость мы хотим умножить на то, что мы хотим переконвертировать в usd
        const result = price * rates[toCurrency]
        setFromPrice(value)
        setToPrice(result)
    }

    const onChangeToPrice = (value) => {
        const result = (rates[fromCurrency] / rates[toCurrency]) * value
        setFromPrice(result);
        setToPrice(value)
    }

  return (
    <div className="App">
        <Block value={fromPrice}
               currency={fromCurrency}
               onChangeCurrency={setFromCurrency}
               onChangeValue={onChangeFromPrice}
        />

        <Block value={toPrice}
               currency={toCurrency}
               onChangeCurrency={setToCurrency}
               onChangeValue={onChangeToPrice}
        />
    </div>
  );
}

export default App;
