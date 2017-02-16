Wrapper around DU command, returns a promise.

returns size of dir in KB

```javascript
let du = require('./index');
let path = __dirname;

du(path)
  .then((res) => {
    console.log(res); // res = 174 (KB)
  })
  .catch((err) => {
    console.log(err);
  });
```



