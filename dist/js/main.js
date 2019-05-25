const getWord = async () => {
  const res = await fetch(`/getword`);
  const word = await res.text();

  // insert the fetched word into the DOM
  document.getElementById("random-word").innerText = word;
};

// using jsonplaceholder, via our proxy defined in _redirects

const getUsers = async () => {
  const res = await fetch("/api/users");
  const users = await res.json();

  users.forEach(user => {
    const li = document.createElement("li");
    const text = document.createTextNode(user.name);
    li.appendChild(text);
    document.getElementById("users").appendChild(li);
  });
};

getWord();
getUsers();
