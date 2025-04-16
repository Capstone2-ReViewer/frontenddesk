import { Route, Routes } from 'react-router-dom';
import Main from './page/main';
import GameRankingF from './page/gamerankingview';
import GameInfoF from './page/gameinfo';
import GameCompareF from './page/gamecompare';
import LoginF from './page/login';
import MypageF from './page/mypage';
import UserRegistF from './page/userregist';
import UserViewF from './page/userview';
import UserReRegistF from './page/userreregist';
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" elements={<Main />}/>
        <Route path="/gameranking" elements={<GameRankingF />}/>
        <Route path="/gameinfo" elements={<GameInfoF />}/>
        <Route path="/gamecompare" elements={<GameCompareF />}/>
        <Route path="/login" elements={<LoginF />}/>
        <Route path="/mypage" elements={<MypageF />}/>
        <Route path="/userregist" elements={<UserRegistF />}/>
        <Route path="/userview" elements={<UserViewF />}/>
        <Route path="/userreregist" elements={<UserReRegistF />}/>
    </Routes>
  );
}

export default App;
