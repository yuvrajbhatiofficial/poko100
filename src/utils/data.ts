import gamesData from '../data/games.json';

export interface Game {
  id: string;
  title: string;
  description: string;
  instructions: string;
  url: string;
  category: string;
  tags: string;
  thumb: string;
  width: string;
  height: string;
}

// Ensure the data is typed correctly
export const allGames: Game[] = gamesData as Game[];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    // Replace spaces and special characters with hyphens
    .replace(/\s+/g, '-')
    // Remove all non-word characters
    .replace(/[^\w\-]+/g, '')
    // Replace multiple hyphens with a single hyphen
    .replace(/\-\-+/g, '-');
}

export function getGames(): Game[] {
  return allGames;
}

export function getGameBySlug(slug: string): Game | undefined {
  return allGames.find((game) => slugify(game.title) === slug);
}

export function getCategories(): string[] {
  const categories = new Set(allGames.map((game) => game.category));
  return Array.from(categories).sort();
}

export function getGamesByCategory(category: string): Game[] {
  return allGames.filter(
    (game) => game.category.toLowerCase() === category.toLowerCase()
  );
}

export function getTrendingGames(limit = 10): Game[] {
  // Since we don't have play counts, we'll randomize or pick a slice
  // For consistency, let's just pick a consistent slice
  return allGames.slice(0, limit);
}

export function getFeaturedGames(limit = 5): Game[] {
  // Let's pick a different slice for featured
  return allGames.slice(5, 5 + limit);
}

export function getRecentlyAddedGames(limit = 12): Game[] {
  // Assuming the end of the array has the newest
  return [...allGames].reverse().slice(0, limit);
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  return allGames
    .filter((g) => g.category === game.category && g.id !== game.id)
    .slice(0, limit);
}
