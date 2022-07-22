<div align="center">
    Some common moment-utils
    <br />
</div>

#### Description

Some format and function common
+ Convert date vs string with format
+ Can convert custom format
+ etc... checking

#### Install
```js
npm i --D react-dropdown-z

import DateUtils from 'moment-utils-z';
```

```js
let date = DateUtils.convert("2022-12-12", FORMATS.DATE_DASH, FORMATS.DATE_COMPACT)
// more

let date2 = DateUtils.convert("2022-12-12", "YYYY-MM-DD", "MMM")
```


### License
MIT