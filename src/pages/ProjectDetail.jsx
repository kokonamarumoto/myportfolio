import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectDetail = () => {

  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return <p>作品が見つかりませんでした。</p>;
  }

  return(
    <section className="page paper">
    <Link to="/projects" className="back-link">←作品一覧に戻る</Link>
    <h3 className="page__title">{project.title}</h3>



    <div className="detail-slider">
        {project.images && project.images.length > 1 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure className="detail-slide">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="detail-img"
                  />
                  <figcaption className="detail-caption">
                    {image.title}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img src={project.thumbnail} alt={project.title} className="detail-img" />
        )}
      </div>



    <h3 className="detail-title">概要</h3>
    <p className="detail-text">{project.summary}</p>

    <h3 className="detail-title">使用技術</h3>
     <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>


   <div className="detail-function-box">
    <h3 className="detail-title">主な機能</h3>
    <ul className="project-detail__section">
     {project.features.map((feature) => (
    <li key={feature}>{feature}</li>
     ))}
   </ul>
    </div>

    <h3 className="detail-title">作成理由</h3>
    <p className="detail-text">{project.reason}</p>

    <h3 className="detail-title">苦労した点</h3>
    <p className="detail-text">{project.difficulties}</p>

    <h3 className="detail-title">こだわり</h3>
    <ul className="project-detail__section">
{project.highlights.map((item, index) => (
  <div key={index}>
    <li className="detail-point">{item.point}</li>
    <p className="detail-explain">→{item.explain}</p>
  </div>
))}
</ul>



      <div className="project-detail__links">

     

     


     
       <a href={project.githubUrl} target="_blank" rel="noreferrer" className="github-button">
          GitHubを見る<i className="fa-brands fa-github"></i>
        </a>
        

        
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="demo-button">
          デモを見る
        </a>
        
        
        



      </div>

    
    </section>
  );

};

export default ProjectDetail;
