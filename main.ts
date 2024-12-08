import { delay } from '@std/async';

function startCron() {
  console.log('This will run every fifth second', new Date());
}

while (true) {
  startCron();
  await delay(5000)
}

