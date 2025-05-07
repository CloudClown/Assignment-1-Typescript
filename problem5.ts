{
  //
  function processValue(value: string | number): number {
    if (typeof value === "number") {
      return value*2;
    } else {
      return value.length;
    }
  }

  const res = processValue("hello");
  const res1 = processValue(5);

  console.log(res)
  console.log(res1)
  //
}