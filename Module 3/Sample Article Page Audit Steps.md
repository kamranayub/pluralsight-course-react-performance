Article Page Audit
------------------

PREREQS
-------
- Google Chrome (v120)
- Install React Dev Tools (https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Clean environment (Close Slack, Zoom, other Chrome instances)

FIRST-TIME SETUP
----------------
1. Clone repository: https://github.com/bbc/simorgh
2. Run `nvm use` (or `nvm install <version>`)
3. Run `npm install yarn --global`
4. Checkout branch `main`
5. Run `yarn`
6. Run `yarn dev`
7. Wait until log messages from server start showing (takes awhile)


FLOW: Initial Page Load
-----------------------
1. Open URL: http://localhost:7080/news/articles/c6v11qzyv8po
2. Open F12 developer tools
3. Open Profiler tab (React Dev Tools)
4. Click 'Reload and Profile'
5. Wait for Profiler to stop

**Timings**

Initial Mount: 307ms
Update: 13ms
Commits: 3

**Notes**

- InnerLoadable takes about 170ms to render exclusively. Why?
- Third commit on initial load seems to be caused by async fetch?
- MEMORY: Is routing between pages causing a memory leak with detached HTML documents?
  - No, taking a incremental snapshot and comparing doesn't seem to show a memory leak
