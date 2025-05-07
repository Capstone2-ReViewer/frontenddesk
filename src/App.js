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
        <Route path="/" element={<Main />}/>
        <Route path="/gameranking" element={<GameRankingF />}/>
        <Route path="/gameinfo" element={<GameInfoF />}/>
        <Route path="/gamecompare" element={<GameCompareF />}/>
        <Route path="/login" element={<LoginF />}/>
        <Route path="/mypage" element={<MypageF />}/>
        <Route path="/userregist" element={<UserRegistF />}/>
        <Route path="/userview" element={<UserViewF />}/>
        <Route path="/userreregist" element={<UserReRegistF />}/>
    </Routes>
    
  );
}

export default App;
