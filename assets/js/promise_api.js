fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST' })
  .then((response) => response.json())
  .then((json) => console.log(json));
