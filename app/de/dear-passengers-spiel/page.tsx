import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents.de;
export const metadata = createGamePageMetadata(content);

export default function DearPassengersSpielPage() {
  return <GameDearPassengersPage content={content} />;
}
