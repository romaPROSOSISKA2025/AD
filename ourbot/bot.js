const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда свой токен, который ты получил от @BotFather
const token = '7647536224:AAFbdZzMQLwcK7yP-go0T14D5BbdbLY4WcU';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды "/start"
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.username;

    // Отправляем приветственное сообщение с кнопкой
    bot.sendMessage(chatId, `Привет, @${userName}! Нажми на кнопку, чтобы перейти на страницу:`, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Перейти на страницу',  // Текст кнопки
                    url: 'https://github.com/romaPROSOSISKA2025/AD.git'  // Вставь ссылку на свою страницу
                }]
            ]
        }
    });
});

// Обработчик любых других сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.username;

    // Бот не будет повторять текст сообщения, только приветствие
    bot.sendMessage(chatId, `Привет, @${userName}! Я здесь, чтобы помочь. Нажми на кнопку ниже для дальнейших действий.`);
});
