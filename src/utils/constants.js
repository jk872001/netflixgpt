export const searchQueryMaker = (input) => {
  return (
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    input +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
  );
};
