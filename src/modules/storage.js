const persistence = window.localStorage;

const saveVotes = (name, votesObj) => {
  const data = JSON.stringify(votesObj);
  persistence.setItem(name, data);
};

const getVotes = name => {
  let data = persistence.getItem(name);
  if (data === null) {
    data = {
      goodVotes: 1,
      badVotes: 1,
    };
  } else {
    data = JSON.parse(data);
  }
  return data;
};

const clearVotes = () => {
  persistence.clear();
};

export {
  saveVotes,
  getVotes,
  clearVotes,
};
