# capitalize-polyfill

    npm install https://github.com/Outternet/capitalize-polyfill

A simple library to capitalize a string, Note: this is not based on offical spec.

```javascript
//somewhere early in your code or with other polyfills.
import "capitalize-polyfill";
```

example
```typescript
"hello".capitalize() //Hello
// or if you are concerned about future spec.
"hello".capitalizeOverride() //Hello
```

the core of this library is `js-capitalize` for full spec see documentation at [js-capitalize](https://github.com/grncdr/js-capitalize)
