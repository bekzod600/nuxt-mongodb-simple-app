import { Telegraf, Markup } from "telegraf";

const config = useRuntimeConfig();
const token = config.BOT_TOKEN;
const bot = new Telegraf(token);

// Webhookni sozlash funksiyasi
const setWebhook = async () => {
  try {
    await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: `https://nuxt-mongodb-simple-app.vercel.app/api/telegram`,
      }), // YOUR_VERCEL_URL ni haqiqiy Vercel URL bilan almashtiring
    });
    console.log("Webhook muvaffaqiyatli sozlandi!");
  } catch (error) {
    console.error("Webhookni sozlashda xato:", error);
  }
};

// Webhookni sozlashni chaqiramiz
setWebhook();

bot.start((ctx) => {
  return ctx.reply(
    "Web App ni ochish uchun quyidagi tugmani bosing:",
    Markup.inlineKeyboard([
      Markup.button.webApp(
        "Web App",
        "https://nuxt-mongodb-simple-app.vercel.app"
      ),
    ])
  );
});
bot.on("message", (ctx) => {
  console.log(ctx.message);
});

bot.launch();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  await bot.handleUpdate(body); // botga kelayotgan xabarlarni qabul qiladi
  return { status: "success" };
});
