// Form event listener
document.getElementById('username-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();

  // Construct the search URL
  const searchUrl = `https://github.com/search?q=author%3A${username}+is%3Apr+is%3Apublic`;

  // Refresh the page with the new search URL
  const resultList = document.getElementById('results-list');
  resultList.innerHTML = ''; // Limpar resultados anteriores

  const listItem = document.createElement('li');
  listItem.textContent = `Pull Shark:`;
  resultList.appendChild(listItem);

  const linkItem = document.createElement('a');
  linkItem.href = searchUrl;
  linkItem.target = '_blank';
  linkItem.textContent = ' Show results on GitHub';
  listItem.appendChild(linkItem);

  // Show the results
  document.getElementById('results').style.display = 'block';
});
