const { hydrate } = require('@grammyjs/hydrate');
require('dotenv').config();
const { Bot, GrammyError, HttpError, Context, Keyboard } = require('grammy');
const bot = new Bot('7693162378:AAGLTx4qVweyYDJsDzliqob5UvIrDfaVTrg');
bot.use(hydrate());
const subKeyboard = new Keyboard().text('Я подписался').resized().oneTime();
bot.command('start', async (ctx) => {
  await ctx.reply(
    'Привет! Подпишись на <a href="https://t.me/morceaudeplaisir">телеграм-канал</a>.',
    {
      parse_mode: 'HTML',
    }
  );
  await ctx.reply('Буду ждать твоей подписки', {
    reply_markup: subKeyboard,
  });
});
bot.on('message', async (ctx) => {
  await ctx.reply('Красавчик');
});
bot.start();

//Подписка на канал и ссылка на него
