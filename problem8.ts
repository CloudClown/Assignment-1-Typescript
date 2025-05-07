{
  //
  async function squareAsync(n: number): Promise<number> {
    return new Promise((res, rej) => {
      if (n < 0) {
        rej(new Error("Negative number not allowed"));
      } else {
        setTimeout(() => {
          res(n * n);
        }, 1000);
      }
    });
  }

  squareAsync(-4).then(
    res =>  console.log(res)
  ).catch(
    rej => console.log(rej)
  )
  squareAsync(4).then(
    res =>  console.log(res)
  ).catch(
    rej => console.log(rej)
  )

  //
}
