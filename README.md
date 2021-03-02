# GamingClubMERN
Gaming Club MERN

                 Start 20.02.21
                 DeadLine 04.05.21

MERN = mongoDB Express React Node.js

Data Base: MongoDB or Fire Base

Hosting: ######


Pages: 
1. Регистрация
        
        Ввод = {
          email = individual
          login = individual
          phone = individual
          password 
        }
    
        Кнопка регистрация: 
                Сохранение в DB = [id=login, email, phone, password]
                Выход со Страницы регистрация
2 О нас
    
    `Title` = статический текст h3 => h1 => p
    `О “Gaming Club” в цифрах` = статический текст h2 => p
    `Вот что у нас тут новенького` = Двум новым событиям дается isEvent = true начинается countdown на неделю,
    если событий > 2, Они записываются в стэк
    
    Slider = Отдельная папка в проекте Images, от туда берутся фото в слайдер
   
3. Тарифы
    
4. Турниры
5. Контакты

            `Заказать звонок` = {
               isAuthorized = true => Два поля(Имя и Номер) заполнены сами теми данными, которые указанеы у пользователя на аккаунте
               isAuthorized = false => Два поля(Имя и Номер) пустые, их надо заполнить
            }
            `google map` = вставить геолокицию на сайт с google map

            `Адрес` = адрес клуба
            `Почта` = почта клуба
            `Номер` = номер клуба
    
Елементы, которые есть на всех страницах:
  1. logo = возрашает пользователя на страницу О нас
  2. nav:
      О нас
      Тарифы 
      Турниры
      Контакты
  3. icons(links) = [instagram, facebook, telegram]
  4. Profile icon
    isEnter ? true : fasle
    true = alert=[login, количество денег на счету, log out]
    false = alert=[]
  5. 
     
