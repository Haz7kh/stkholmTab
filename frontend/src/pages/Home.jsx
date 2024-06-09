import introImg from "../assets/imgs/intro.png";
import {
  FaUserTie,
  FaBuilding,
  FaLaptopCode,
  FaUserPlus,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import testimonialsImg from "../assets/imgs/test.png";
import Hero from "../components/Hero";
import { getPosts } from "../api";

const Home = () => {
  const testimonials = [
    {
      text: "Tack Stockholm T AB hittade jag mitt drömjobb på nolltid!",
      author: "Nöjd Arbetssökande",
    },
    {
      text: "Rekryteringsprocessen var smidig och effektiv. Vi anställde en fantastisk kandidat!",
      author: "Nöjd Arbetsgivare",
    },
    {
      text: "Stockholm T AB hjälpte mig att utveckla mina färdigheter och öka min anställningsbarhet. Jag är mycket tacksam!",
      author: "Tacksam Jobbsökande",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data.slice(-3)); // Get the last three posts
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + "...";
  };

  return (
    <>
      <Hero pageTitle="Hem" />
      <div className="home-container">
        {/* Introduction */}
        <section id="introduction" className="introduction ">
          <div className="content">
            <div className="text">
              <h2>Välkommen till Stockholm T AB!</h2>
              <p className="intro">
                Vi specialiserar oss på att hjälpa arbetssökande att lyckas.
                Vårt professionella team erbjuder personlig coachning,
                CV-optimering och intervjuförberedelser. Med vår
                expertvägledning kommer du att vara redo att självklart ta dig
                an din jobbsökning och säkra ditt drömjobb. Låt Stockholm T AB
                bli din partner för karriärframgång!
              </p>
              <a href="/about" className="read-more-btn">
                LÄS MER
              </a>
            </div>
            <div className="image">
              <img src={introImg} alt="Welcome" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services ">
          <h2>Våra Tjänster</h2>
          <div className="service-cards">
            <div className="service-card">
              <FaUserTie size={30} className="service-icon" />
              <h3>För Arbetssökande</h3>
              <p className="ser-text">
                Personlig coachning, jobbmatchning och kompetensutveckling för
                att hjälpa dig att hitta det perfekta jobbet.
              </p>
            </div>
            <div className="service-card">
              <FaBuilding size={30} className="service-icon" />
              <h3>För Arbetsgivare</h3>
              <p className="ser-text">
                Effektiva rekryteringstjänster för att koppla samman dig med de
                mest lämpliga kandidaterna.
              </p>
            </div>
            <div className="service-card">
              <FaLaptopCode size={30} className="service-icon" />
              <h3>För Frilansare</h3>
              <p className="ser-text">
                Anslut med projekt och kunder som matchar dina färdigheter och
                din tillgänglighet.
              </p>
            </div>
          </div>
        </section>

        {/* New Section */}
        <section className="new-section">
          <div className="new-section-content">
            <div className="text-content">
              <h2>Ökat Stöd för Arbetssökande</h2>
              <p>
                Aenean eget odio vel nulla{" "}
                <span className="highlight">ullamcorper scelerisque</span>. Vi
                erbjuder stöd och resurser för att öka dina chanser att hitta
                ett jobb snabbt och effektivt.{" "}
              </p>
              <p>
                Våra experter hjälper dig att bygga ett starkt CV och förbereda
                dig för framgångsrika intervjuer
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="process ">
          <h2>Vår Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <FaUserPlus size={30} className="step-icon" />
              <h3>Steg 1: Registrera dig</h3>
              <p>Registrera dig och berätta om dina karriärmål.</p>
            </div>
            <div className="process-step">
              <FaChalkboardTeacher size={30} className="step-icon" />
              <h3>Steg 2: Personlig Coachning</h3>
              <p>Få skräddarsydd coachning och stöd.</p>
            </div>
            <div className="process-step">
              <FaBriefcase size={30} className="step-icon" />
              <h3>Steg 3: Jobbmatchning</h3>
              <p>
                Vi matchar dig med jobbmöjligheter som passar dina färdigheter
                och intressen.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section id="latest-posts" className="latest-posts">
          <h2>Senaste Blogginlägg</h2>
          <div className="posts-container">
            {posts.map((post) => (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{truncateContent(post.content, 100)}</p>
                {post.photo && (
                  <img
                    src={`https://stkholmtab-server.onrender.com/${post.photo}`}
                    alt={post.title}
                    className="post-photo"
                  />
                )}
                <a href={`/post/${post._id}`} className="read-more-btn">
                  Läs Mer
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-content">
            <div className="testimonial-text">
              <h2>Kundrecensioner</h2>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial"
                  style={{
                    display: index === currentIndex ? "block" : "none",
                  }}
                >
                  <blockquote>"{testimonial.text}"</blockquote>
                  <p className="author">{testimonial.author}</p>
                </div>
              ))}
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div className="testimonial-image">
              <img src={testimonialsImg} alt="Testimonials" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
