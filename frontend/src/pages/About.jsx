import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import "../styles/About.css";
import Img1 from "../assets/imgs/img1.png";
import Img2 from "../assets/imgs/a2.png";
import Img3 from "../assets/imgs/a3.png";
import Img4 from "../assets/imgs/timeLine1.png";
import Img5 from "../assets/imgs/timeLine2.png";
import Img6 from "../assets/imgs/timeLine3.png";
import TeamMember1 from "../assets/imgs/team1.png";
import TeamMember2 from "../assets/imgs/team2.png";
import TeamMember3 from "../assets/imgs/team3.png";
import TeamMember4 from "../assets/imgs/team4.png";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Img1, Img2, Img3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero pageTitle="OM OSS" />
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">LITE OM OSS</h2>
          <p className="about-subtitle">
            Subtitle: Din Partner för Karriärframgång och Professionell
            Utveckling
          </p>
          <p className="about-text">
            Vi specialiserar oss på att hjälpa arbetssökande att lyckas. Vårt
            professionella team erbjuder personlig coachning, CV-optimering och
            intervjuförberedelser. Med vår expertvägledning kommer du att vara
            redo att självklart ta dig an din jobbsökning och säkra ditt
            drömjobb. Låt Stockholm T AB bli din partner för karriärframgång! På
            Stockholm T AB förstår vi att varje jobbsökande har unika behov och
            mål. Därför erbjuder vi skräddarsydda lösningar som inkluderar
            omfattande karriärplanering, kompetensutveckling och kontinuerligt
            stöd genom hela jobbsökningsprocessen. Våra erfarna coacher arbetar
            nära dig för att identifiera dina styrkor och förbättringsområden,
            vilket hjälper dig att stå ut på en konkurrensutsatt arbetsmarknad.
            Vi erbjuder också tjänster som arbetsmarknadsutbildningar och
            nätverksbyggande, vilket ger dig möjlighet att knyta värdefulla
            kontakter inom din bransch. Vår målsättning är att inte bara hjälpa
            dig att hitta ett jobb, utan att hjälpa dig att hitta rätt jobb där
            du kan trivas och utvecklas långsiktigt. Genom vår tjänst "stöd och
            matchning" säkerställer vi att du matchas med arbetsgivare som
            värdesätter dina färdigheter och erfarenheter. Vi erbjuder praktiska
            verktyg och resurser som gör dig mer attraktiv för potentiella
            arbetsgivare, inklusive professionell CV-skrivning, intervjuträning
            och karriärstrategier som är skräddarsydda efter dina individuella
            behov. Vår passion är att se dig lyckas. Låt Stockholm T AB vara
            ditt förstahandsval för att uppnå dina karriärmål och skapa en
            ljusare framtid. Tillsammans bygger vi vägar till framgång!
          </p>
        </div>
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="slide-img"
                key={index}
              />
            ))}
          </div>
          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              ←
            </button>
            <button className="next" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-item">
            <img src={Img4} alt="Timeline 1" className="timeline-img" />
            <h3>Registrering:</h3>
            <p>
              Registrera dig på vår plattform och berätta om dina karriärmål,
              färdigheter och erfarenheter. Detta hjälper oss att förstå dina
              behov och skräddarsy våra tjänster för dig.
            </p>
          </div>
          <div className="timeline-item">
            <img src={Img5} alt="Timeline 2" className="timeline-img" />
            <h3>Personlig Coachning: </h3>
            <p>
              Våra erfarna coacher ger dig skräddarsydd vägledning och stöd. Vi
              hjälper dig att identifiera dina styrkor, förbättringsområden och
              karriärmål. Du får personliga tips och råd som ökar dina chanser
              att lyckas på arbetsmarknaden.
            </p>
          </div>
          <div className="timeline-item">
            <img src={Img6} alt="Timeline 3" className="timeline-img" />
            <h3>CV-optimering och Intervjuförberedelser</h3>
            <p>
              Vi hjälper dig att skapa ett professionellt och imponerande CV som
              framhäver dina bästa egenskaper. Dessutom får du praktisk
              intervjuträning så att du känner dig säker och väl förberedd inför
              mötet med arbetsgivare.
            </p>
          </div>
          <div className="timeline-item">
            <img src={Img6} alt="Timeline 3" className="timeline-img" />
            <h3>Jobbmatchning:</h3>
            <p>
              Vi matchar dig med jobbmöjligheter som passar dina färdigheter och
              intressen. Genom vårt omfattande nätverk av arbetsgivare får du
              tillgång till exklusiva jobberbjudanden som kanske inte annonseras
              offentligt.
            </p>
          </div>
          <div className="timeline-item">
            <img src={Img6} alt="Timeline 3" className="timeline-img" />
            <h3>Stöd och Uppföljning:</h3>
            <p>
              Vi erbjuder kontinuerligt stöd under hela din jobbsökningsresa.
              Vårt team finns tillgängligt för att svara på frågor, ge feedback
              och hjälpa dig att övervinna eventuella hinder som kan uppstå.
            </p>
          </div>
          <div className="timeline-item">
            <img src={Img6} alt="Timeline 3" className="timeline-img" />
            <h3>Kompetensutveckling:</h3>
            <p>
              Genom våra arbetsmarknadsutbildningar och nätverksbyggande
              aktiviteter får du möjlighet att utveckla nya färdigheter och
              knyta värdefulla kontakter inom din bransch. Detta ökar din
              anställningsbarhet och öppnar dörrar till fler karriärmöjligheter.
            </p>
          </div>
        </div>
      </section>
      <section className="help-section">
        <div className="help-content">
          <h2 className="help-title">Behöver Du Fortfarande Hjälp?</h2>
          <p className="help-text">
            Klicka på den blå runda knappen längst ner till höger på den här
            sidan. Du kan också mejla vårt supportteam på{" "}
            <a href="mailto:support@example.com">info@stockholmtab.com</a>
          </p>
          <button className="help-button">
            <a href="/contact">Kontakt nu</a>
          </button>
        </div>
      </section>
      <section className="team-section">
        <h2 className="team-title">Vårt Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img
              src={TeamMember1}
              alt="Christopher L. Belle"
              className="team-img"
            />
            <div className="team-info">
              <h3>Christopher L. Belle</h3>
              <p>Co-Founder & CEO</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={TeamMember2} alt="Clue Carter" className="team-img" />
            <div className="team-info">
              <h3>Clue Carter</h3>
              <p>Managing Partner</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={TeamMember3} alt="Mary Merrill" className="team-img" />
            <div className="team-info">
              <h3>Mary Merrill</h3>
              <p>Operations Director</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={TeamMember4} alt="John Myers" className="team-img" />
            <div className="team-info">
              <h3>John Myers</h3>
              <p>Chief Technology Officer</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
