function fetchData(url) {
    fetch(url)
      .then(res => JSON.parse(res))
      .then(result => result)
      .catch(error => console.log(error));
  }