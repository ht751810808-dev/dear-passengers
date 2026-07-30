import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents.es;
export const metadata = createGamePageMetadata(content);

export default function SpanishDearPassengersGamePage() {
  return <GameDearPassengersPage content={content} />;
}
