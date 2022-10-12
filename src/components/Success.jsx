import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
          // 5. И когда мы кликаем на кнопку назад, мы просто перезагружаем нашу страницу.
          onClick={ () => window.location.reload() }
          className="send-invite-btn">Назад</button>
    </div>
  );
};
