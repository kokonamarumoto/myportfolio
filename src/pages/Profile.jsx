import profileImage from "../assets/profile_image.jpg";

export const Profile = () => {
  return (
    <section className="page paper home-page">
      <h2 className="section-title">Profile</h2>


      <div className="profile-layout">
        <div className="profile-layout__text">

         <h3 className="name">丸本　瑚々南</h3>

         <p>
          HTML、CSS、JavaScript、Pythonを中心にWeb開発を学んでいます。<br></br>
          ユーザーにとって見やすく、使いやすいUI・機能の設計を意識して開発しています。
         </p>
        </div>
         
       
      


       <div className="profile__image">
          <img src={profileImage} alt="プロフィール写真" />
        </div>
    </div>
      

         <div className="profile-info-card">

           <div className="profile-info-row">

             <span className="profile-info-label">出身地</span>

             <span className="profile-info-value">兵庫県</span>
             
           </div>

           
            <div className="profile-info-row">
               <span className="profile-info-label">出身大学</span>
               <span className="profile-info-value">関西学院大学　社会学部</span>
            </div>


            <div className="profile-info-row">
               <span className="profile-info-label">趣味</span>
               <span className="profile-info-value">アニメを見ること、旅行</span>
            </div>


            <div className="profile-info-row">
               <span className="profile-info-label">好きなこと</span>
               <span className="profile-info-value">美味しいものを食べること</span>
            </div>
              
          </div>


    </section>
  );
};


