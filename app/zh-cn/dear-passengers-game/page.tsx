import GameDearPassengersPage from '@/components/GameDearPassengersPage';
import { createGamePageMetadata, gamePageContents } from '@/app/game-dear-passengers/game-content';

const content = gamePageContents['zh-CN'];
export const metadata = createGamePageMetadata(content);

export default function ChineseDearPassengersGamePage() {
  return <GameDearPassengersPage content={content} />;
}
