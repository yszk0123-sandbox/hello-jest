test('callbacks', done => {
  function onFetch(data) {
    expect(data).toBe('Hello, world!');
    done();
  }

  function fetchData(callback) {
    setTimeout(() => callback('Hello, world!'), 0);
  }

  fetchData(onFetch);
});

test('promises (resolve)', () => {
  function fetchData() {
    return Promise.resolve('Hello, world!');
  }

  function fetchDataAndFail() {
    return Promise.reject(new Error('something'));
  }

  expect.assertions(1);

  return fetchData().then(data => {
    expect(data).toBe('Hello, world!');
  });
});

test('promises (reject)', () => {
  function fetchDataAndFail() {
    return Promise.reject(new Error('something'));
  }

  expect.assertions(1);

  return fetchDataAndFail().catch(error => {
    expect(error.message).toBe('something');
  });
});

test('promises (.resolves)', () => {
  function fetchData() {
    return Promise.resolve('something');
  }

  expect.assertions(1);

  return expect(fetchData()).resolves.toBe('something');
});

test('async/await (success)', async () => {
  function fetchData() {
    return Promise.resolve('something');
  }

  expect.assertions(1);
  const data = await fetchData();

  expect(data).toBe('something');
});

test('async/await (fail)', async () => {
  function fetchDataAndFail() {
    return Promise.reject(new Error('something'));
  }

  expect.assertions(1);
  try {
    await fetchDataAndFail();
  } catch (error) {
    expect(error.message).toBe('something');
  }
});
