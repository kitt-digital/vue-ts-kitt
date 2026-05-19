#!/usr/bin/env node
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

import express from 'express';
import portfinder from 'portfinder';
// colors
const RED = '\x1b[31m';
const BLUE = '\x1b[36m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';
// sever
const PORT = 8080;
portfinder.setBasePort(PORT);
(() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  portfinder.getPort(function (err, port) {
    if (err) {
      console.error(`${BLUE}[vue-ts-docs]${RED}[ERROR]${RESET}:\n${err}`);
      return false;
    }

    const server = express();
    const path = resolve(__dirname, '../dist/storybook');
    // set up server
    server.use(express.static(path));
    server.get('/*path', (req, res) => {
      // redirect all routes to index.html
      res.redirect('/');
    });

    server.listen(port, () => {
      // log status
      console.log(
        `${BLUE}[vue-ts-docs]${GREEN}[INFO]${RESET}: Docs started!\n\n${[
          'Server listening on:',
          `${GREEN}http://127.0.0.1:${port}${RESET}`,
          `${GREEN}http://localhost:${port}${RESET}`,
          '\nCancel the process with [ctrl + c]\n'
        ].join('\n  ')}`
      );

      const start =
        process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open';
      // open default browser
      exec(`${start} http://localhost:${port}`);
    });
  });
})();
