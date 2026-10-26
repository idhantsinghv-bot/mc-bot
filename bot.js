const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'PrimeSMPinPrime.aternos.me',     
  port: 64232,                          
  username: 'AntiAFK_Bot',              
  version: '1.21'                     
});

bot.on('spawn', () => {
  console.log(`${bot.username} server me aa gaya hai! Anti-AFK mode active.`);
  
  setInterval(() => {
    const actions = ['jump', 'forward', 'back', 'sneak'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    if (randomAction === 'jump') {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    } else if (randomAction === 'forward') {
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 1000);
    } else if (randomAction === 'back') {
      bot.setControlState('back', true);
      setTimeout(() => bot.setControlState('back', false), 1000);
    } else if (randomAction === 'sneak') {
      bot.setControlState('sneak', true);
      setTimeout(() => bot.setControlState('sneak', false), 800);
    }
  }, 5000); 
});

bot.on('end', () => {
  console.log('Bot disconnect ho gaya. Reconnecting in 10 seconds...');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'status') {
    bot.chat('Mai online hu aur server ko active rakh raha hu!');
  }
});
