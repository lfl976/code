# JavaScript Code Snippets

## 1. structuredClone

structuredClone 函数允许您创建对象的深拷贝。 修改 copy 不会影响到 original 的值。

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = structuredClone(original);
copy.a = 2;
original.a === 1; // true
```

## 2. 获取对象嵌套属性的值

```javascript
const pluckDeep = (key) => (obj) =>
  // 使用 .split('.') 将 key 字符串按 '.' 分割为数组。
  // 使用 reduce 方法遍历该数组，以深度获取 obj 对象中的属性值。
  key.split(".").reduce((accum, key) => accum[key], obj);

const obj = { a: { b: { c: 1 } } };
pluckDeep("a.b.c")(obj); // 返回 1
```
