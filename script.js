fetch('./data.json')
.then(response => {
  if (!response.ok) {
    throw new Error('An error occured while fetching your data')
  }
  return response.json();
})
.then(data => {
  const valuesContainer = document.getElementById('values-container');

  data.forEach(element => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add(`${element.color}-background`, 'summary-div')

      itemDiv.innerHTML = `
        <img src="${element.icon}" alt="Icon">
        <p>${element.category}</p>
        <div>${element.score}/100</div>
      `;

      valuesContainer.appendChild(itemDiv);
    });
})