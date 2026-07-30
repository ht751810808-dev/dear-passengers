import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents.ar;
export const metadata = createGamePageMetadata(content);

export default function ArabicDearPassengersGamePage() {
  return <GameDearPassengersPage content={content} />;
}
