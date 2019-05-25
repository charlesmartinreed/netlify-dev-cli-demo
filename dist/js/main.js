const getWord = async () => {
  const res = await fetch(`/getword`);
  const word = await res.text();

  // insert the fetched word into the DOM
  document.getElementById("random-word").innerText = word;
};

getWord();
