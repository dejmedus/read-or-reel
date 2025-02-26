import { ICatalog } from "~/data/types";

function calculateScore(title: string, search: string): number {
  const titleLower = title.toLowerCase();
  const searchLower = search.toLowerCase();

  let score = 0;

  if (titleLower === searchLower) {
    score += 100;
  }

  if (titleLower.includes(searchLower)) {
    score += searchLower.length;
  }

  for (const char of searchLower) {
    if (titleLower.includes(char)) {
      score++;
    }
  }

  if (titleLower.startsWith(searchLower)) {
    score += searchLower.length;
  }

  return score;
}

function filterRelevantPairs(pairs, threshold = 0.5) {
  if (pairs.length < 2) return pairs;

  // here we are using z-score to find relevant books/movies based on search
  // z-score finds outliers in the list of scores
  // (value - mean) / standard deviation
  // mean: the average
  // standard deviation: how spread out from the mean values are
  // our value is the search result score from calculateScore
  const mean = pairs.reduce((sum, pair) => sum + pair.score, 0) / pairs.length;
  const deviation = Math.sqrt(
    pairs.reduce((sum, pair) => sum + (pair.score - mean) ** 2, 0) /
      (pairs.length - 1)
  );

  const relevantPairs = pairs.filter(
    (pair) => (pair.score - mean) / deviation > threshold
  );

  return relevantPairs.length > 0 ? relevantPairs : pairs;
}

export default function filterCatalog(
  catalog: ICatalog,
  search: string
): ICatalog {
  const scores = catalog.map((pair) => {
    let bookScore = 0;
    let movieScore = 0;
    if (pair.book) {
      bookScore = calculateScore(pair.book.title, search);
    }
    if (pair.movie) {
      movieScore = calculateScore(pair.movie.title, search);
    }

    const score = Math.max(bookScore, movieScore);

    return { pair, score };
  });

  return filterRelevantPairs(scores)
    .sort((a, b) => b.score - a.score)
    .map(({ pair }) => pair);
}
