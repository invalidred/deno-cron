import { CronJob } from "npm:cron";

const cron = CronJob.from({
  cronTime: "*/5 * * * * *",
  onTick: function () {
    console.log(`Hello World!!! ${new Date()}`);
  },
});

cron.start();
