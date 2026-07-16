import  { Header } from "./Header";
import { Profile } from "./Profile";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
       <section className="page paper home-page">
      <h2 className="book__title">ENGINEER BOOK</h2>
      

      <div className="home-layout">

        <div className="home-layout___text">
          <p className="page__subtitle">🔰開発勉強中</p>
          <h3 className="name">丸本　瑚々南</h3>
          <h4>Marumoto Kokona</h4>
          <p>
            HTML、CSS、JavaScript、Pythonなどを中心にWeb開発を学んでいます。  
            <br></br>
            このポートフォリオでは、これまでに制作した作品や学習成果を掲載しています。
            
          </p>
        </div>

        <div className="home-intro__image">
          <img src={profileImage} alt="プロフィール写真" />
        </div>

      </div>
    </section>
    );
  };

  export default Home;
