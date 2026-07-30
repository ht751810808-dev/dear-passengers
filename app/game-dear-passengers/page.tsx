import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from './game-content';

const content = gamePageContents.en;
export const metadata = createGamePageMetadata(content);

export default function GameDearPassengersEnglishPage() {
  return <GameDearPassengersPage content={content} />;
}
