export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "5b5487f715mshfd5e195575f9544p1e2572jsn7cde575f3acd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
