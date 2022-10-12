import React from 'react';

// Статичный массив, где указаны 4 валюты и затем маппит он, то есть выводит все по очереди
const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({value, currency, onChangeValue, onChangeCurrency}) => (
    // Получает value (значение), которое будет вбита input; currency - саму валюту
    // рубль, евро; onChangeValue - функция которая будет возвращать нам то, что мы ввели
    // в этом инпуте; и onChangeCurrency - функция, которая будет оповещать нам какая функция
    // выбрана
    <div className="block">
        <ul className="currencies">
            {defaultCurrencies.map((cur) => (
                <li
                    onClick={() => onChangeCurrency(cur)}
                    className={currency === cur ? 'active' : ''}
                    key={cur}>
                    {cur}
                </li>
            ))
            }

            <li>
                <svg height="50px" viewBox="0 0 50 50" width="50px">
                    <rect fill="none" height="50" width="50"/>
                    <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/>
                </svg>
            </li>
        </ul>

        <input
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            type="number"
            placeholder={0}
        />
    </div>
);
