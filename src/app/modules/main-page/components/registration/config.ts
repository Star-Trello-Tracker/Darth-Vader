export const config = [
  {
    type: 'email',
    class: 'registration-page__content__registration__form__input_text',
    placeholder: 'Укажите адрес электронной почты',
    ngModel: 'email',
  },
  {
    type: 'text',
    class: 'registration-page__content__registration__form__input_text',
    placeholder: 'Укажите Ваше имя',
    ngModel: 'login',
  },
  {
    type: 'password',
    class: 'registration-page__content__registration__form__input_text',
    placeholder: 'Придумайте пароль',
    ngModel: 'password1',
  },
  {
    type: 'password',
    class: 'registration-page__content__registration__form__input_text',
    placeholder: 'Повторите пароль',
    ngModel: 'password2',
  },
];
