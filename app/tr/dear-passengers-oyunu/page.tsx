import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents.tr;
export const metadata = createGamePageMetadata(content);

export default function TurkishDearPassengersGamePage() {
  return <GameDearPassengersPage content={content} />;
}
