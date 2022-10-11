import React from 'react';
import {Skeleton} from './Skeleton';
import {User} from "./User";

export const Users = ({items, isLoading}) => {
    // 6. isLoading - позволяет нам отрендарить скелетон, другими словами - это
    // ложная загрузка (3 блоков) означает, что сейчас что-то появится
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                <input type="text" placeholder="Найти пользователя..."/>
            </div>

            {/* 7. Работает лживая загрузка вот здесь, если оно true, а если
            оно false, то рендерится лишь один блок, то есть начальная страница
            пользователей */}
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className="users-list">
                    {/* 8. Тут мы берем (получаем) данные items, из него вытаскиваем каждого пользователя и передаем внутрь*/}
                    {items.map((obj) => (
                        /* 13. Если у нас в объекте хранятся такие же
                        объекты, что и пропсы
                           first_name = {obj.first_name}
                             last_name = {obj.last_name}
                              email = {obj.email}
                               avatar = {obj.avatar}
                            можно сократить и передать
                         */
                        // Также необходимо передать ключ, так как мы рендерим его с помощью map
                        <User key={obj.id} {...obj} />
                    ))}
                </ul>
            )}
            <button className="send-invite-btn">Отправить приглашение</button>
        </>
    );
};
