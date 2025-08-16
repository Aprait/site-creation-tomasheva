# Инструкция по копированию логотипов из GitHub

Для корректной работы сайта необходимо скопировать следующие файлы логотипов из вашего GitHub репозитория в папку `public/img/`:

## Логотипы акселераторов из GitHub:
https://github.com/Aprait/site-creation-tomasheva/tree/69401ba9e426ece15b46f399e9db046a5127bae9/public/img

Необходимые файлы:
1. **Архипелаг 2121.png**
2. **ДУ Лаб ИТМО.png**
3. **Сильные идеи для нового времени.jpg**
4. **Сколково.png**
5. **Техновызов.png**
6. **Университет 2035.png**

## Как скопировать:

### Вариант 1: Через терминал (если у вас есть git)
```bash
# Клонируйте репозиторий во временную папку
git clone https://github.com/Aprait/site-creation-tomasheva.git temp-repo

# Скопируйте нужные файлы
cp temp-repo/public/img/*.png public/img/
cp temp-repo/public/img/*.jpg public/img/

# Удалите временную папку
rm -rf temp-repo
```

### Вариант 2: Вручную через браузер
1. Откройте каждый файл по ссылке выше
2. Нажмите кнопку "Download" или "Скачать"
3. Сохраните файлы в папку `public/img/` вашего проекта

### Вариант 3: Используя wget (Linux/Mac)
```bash
cd public/img/
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/Архипелаг%202121.png
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/ДУ%20Лаб%20ИТМО.png
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/Сильные%20идеи%20для%20нового%20времени.jpg
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/Сколково.png
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/Техновызов.png
wget https://raw.githubusercontent.com/Aprait/site-creation-tomasheva/69401ba9e426ece15b46f399e9db046a5127bae9/public/img/Университет%202035.png
```

После копирования файлов логотипы акселераторов должны отображаться корректно на сайте.