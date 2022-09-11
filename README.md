# node-capitalize

    npm install https://github.com/Outternet/node-capitalize

A simple library to capitalize a string

```javascript
//somewhere early in your code or with other polyfills.
import "node-capitalize";
```

example
```typescript
"hello".capitalize() //Hello
// or if you are concerned about future spec.
"hello".capitalizeOverride() //Hello
```

the core of this library is `js-capitalize` for full spec see documentation at [js-capitalize](https://github.com/grncdr/js-capitalize)
