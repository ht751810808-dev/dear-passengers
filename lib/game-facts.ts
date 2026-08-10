import registryJson from '../data/game-facts.json';

export type FactStatus = 'confirmed' | 'observed' | 'inference' | 'unknown';
export type SourceKind =
  | 'official-store'
  | 'official-developer-channel'
  | 'first-party-interview'
  | 'official-video'
  | 'hands-on-test'
  | 'platform-documentation';

export type FactValue = string | number | boolean | string[] | Record<string, string> | null;

export interface GameFact {
  label: string;
  status: FactStatus;
  value: FactValue;
  shortValue: string;
  summary: string;
  sourceIds: string[];
  verifiedAt: string;
  ownerRoutes: string[];
  affectedRoutes: string[];
}

export interface FactSource {
  label: string;
  kind: SourceKind;
  url: string;
  lastCheckedAt: string;
}

export interface StatusCard {
  code: string;
  eyebrow: string;
  statusLabel: string;
  tone: 'confirmed' | 'planned' | 'open';
  value: string;
  detail: string;
  href: string;
  linkLabel: string;
  factIds: string[];
}

export interface StatusBoard {
  revision: string;
  lastVerifiedAt: string;
  lastVerifiedLabel: string;
  cards: StatusCard[];
}

export interface LatestOfficialUpdate {
  publishedAt: string;
  dateLabel: string;
  yearLabel: string;
  headline: string;
  summary: string;
  sourceIds: string[];
  factIds: string[];
  ownerRoute: string;
}

export interface GameFactRegistry {
  schemaVersion: number;
  registryRevision: string;
  lastReviewedAt: string;
  game: {
    name: string;
    steamAppId: string;
    developer: string;
    publisher: string;
  };
  sources: Record<string, FactSource>;
  facts: Record<string, GameFact>;
  statusBoard: StatusBoard;
  latestOfficialUpdate: LatestOfficialUpdate;
}

type RegistryJson = typeof registryJson;

export type GameFactId = keyof RegistryJson['facts'];
export type FactSourceId = keyof RegistryJson['sources'];

export const gameFactRegistry = registryJson as GameFactRegistry;

export const officialUrls = {
  steamStore: gameFactRegistry.sources['steam-store'].url,
  steamNews: gameFactRegistry.sources['steam-news'].url,
  flexusInterview: gameFactRegistry.sources['flexus-interview'].url,
  officialTrailer: gameFactRegistry.sources['official-trailer'].url,
} as const;

export function getGameFact(id: GameFactId): GameFact {
  return gameFactRegistry.facts[id];
}

export function getFactSource(id: FactSourceId): FactSource {
  return gameFactRegistry.sources[id];
}
