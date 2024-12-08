import { Cron } from "croner";

function startCron() {
  return new Cron('*/5 * * * * *', () => {
    console.log('This will run every fifth second', new Date());
  });
}

startCron();
