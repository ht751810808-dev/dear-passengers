import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents['pt-BR'];
export const metadata = createGamePageMetadata(content);

export default function PortugueseDearPassengersGamePage() {
  return <GameDearPassengersPage content={content} />;
}
