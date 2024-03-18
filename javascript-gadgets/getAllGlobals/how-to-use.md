---
Title: How To Use getAllGlobals.js
---

# How to implement

- Copy and paste the `getAllGlobals.js` into the devtools console
- Load your runtime globals into a variable so we don't have to keep querying the globals
```javascript
let rg = __runtimeGlobalsChecker__.getRuntimeGlobals();
```
- Sort* and print the current runtime globals
```javascript
rg.sort().forEach((i) => {console.log(i)});
```
\* **Note about sorting.** I had initially had all of this in the script, however, I ran into a few sites that for whatever reason complete Bork when you try `sort` the stored globals. I'm sure there's a bug there to dig into but it was annoying enough that I could just have it in there. If you run into an issue where you get errors on the sort, you will have to avoid sorting and just print to console how it is and you'll have to do a little manual mucking about. 