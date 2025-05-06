import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/main';
import GameRankingF from './page/GameRankingView/gamerankingview';
import GameInfoF from './page/GameInfo/gameinfo';
import GameCompareF from './page/GameCompare/gamecompare';
import LoginF from './page/Login/login';
import MypageF from './page/Mypage/mypage';  
import UserRegistF from './page/UserRegist/userregist';
import UserViewF from './page/UserView/userview';
import UserReRegistF from './page/UserReregist/userreregist';
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
