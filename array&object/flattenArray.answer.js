// 展平数组
const input = [1, ['I am a nested array', [{ key: 'value' }, [null, false], undefined], function foo() {}], 'the end'];
const expected = [1, 'I am a nested array', { key: 'value' }, null, false, undefined, function foo() {}, 'the end'];

// 方法 1：递归 + concat + reduce
function flatten1(nested) {
  return nested.reduce(
    (flattened, cur) => flattened.concat(Array.isArray(cur) ? flatten1(cur) : cur),
    []
  );
}

// 方法 2：reduce 换成 forEach
function flatten2(nested) {
  var flattened = [];

  nested.forEach((element) => {
    flattened = flattened.concat(Array.isArray(element) ? flatten2(element) : element);
  });

  return flattened;
}

// 方法 3：concat 换成 push 加 spread 操作符
function flatten3(nested) {
  const flattened = [];

  nested.forEach((element) => {
    Array.isArray(element) ?
        flattened.push(...flatten3(element)) :
        flattened.push(element);
  });

  return flattened;
}

// 方法 4：concat 换成 push 加 apply
function flatten4(nested) {
  const flattened = [];

  nested.forEach((element) => {
    Array.isArray(element) ?
        flattened.push.apply(flattened, flatten4(element)) :
        flattened.push(element);
  });

  return flattened;
}
