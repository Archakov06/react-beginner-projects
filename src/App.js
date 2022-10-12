import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
    // const [rates, setRates] = React.useState({})

    /* Хук useRef позволяет сохранить некоторый объект, который можно можно изменять и который хранится в течение всей жизни компонента. В качестве параметра функция useRef() принимает начальное значение хранимого объекта. А возвращаемое значение - ссылка-объект, из свойства current которого можно получить хранимое значение.
     */
    const ratesRef = React.useRef({})

    const [fromCurrency, setFromCurrency] = React.useState("RUB")
    const [toCurrency, setToCurrency] = React.useState("USD")
    const [fromPrice, setFromPrice] = React.useState(0)
    const [toPrice, setToPrice] = React.useState(1)

    React.useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json')
            .then((res) => res.json())
            .then((json) => {
                ratesRef.current = json.rates
                onChangeToPrice(1)
            })
            .catch((err) => {
                console.warn(err);
                alert("Не уделаось получить инфу")
            })
        }, [])

    const onChangeFromPrice = (value) => {
        const price = value /  ratesRef.current[fromCurrency]
        const result = price *  ratesRef.current[toCurrency]
        setToPrice(result.toFixed(3))
        setFromPrice(value)
    }
    const onChangeToPrice = (value) => {
        const result = ( ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
        setFromPrice(result.toFixed(3));
        setToPrice(value)
    }

    // Функция для изменения валюту
    const onChangeFromCurrency = (cur) => {
        // Сохраняем саму валюту
        setFromCurrency(cur)
        // И паралельно сумму от той валюты, которую мы изменили
        // мы будем вносить во вторую колонку
        onChangeFromPrice(fromPrice)
    }

    React.useEffect(() => {
        onChangeFromPrice(fromPrice)
        // 1. Дождись когда наш каренси изменится и только после этого ты должен взять часть
    }, [fromCurrency])

    React.useEffect(() => {
        onChangeToPrice(toPrice)
        // 1. Дождись когда наш каренси изменится и только после этого ты должен взять часть
    }, [toCurrency])

  return (
    <div className="App">
        <Block value={fromPrice}
               currency={fromCurrency}
               onChangeCurrency={onChangeFromCurrency}
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
