Deno.cron("This is a test cron", "* * * * *", () => {
  console.log("Running corn", new Date());
});