const moveZeros = (data) => {
  for (let x = 0; x < data.length - data.filter((zero) => zero === 0).length; )
    data[x] === 0 ? data.splice(x, 1) && data.push(0) : (x += 1);
  console.log(data);
};
