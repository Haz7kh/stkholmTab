import { useState } from "react";
import Hero from "../components/Hero";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Hur registrerar jag mig hos Stockholm T AB?",
      answer:
        "Du kan enkelt registrera dig genom att besöka vår hemsida och klicka på Registrera dig knappen. Följ instruktionerna och fyll i dina uppgifter för att komma igång.",
    },
    {
      question: "Vilka typer av jobb kan ni hjälpa mig att hitta?",
      answer:
        "Vi hjälper dig att hitta jobb inom olika branscher och på olika nivåer, från ingångsjobb till ledande positioner. Vårt mål är att matcha dig med jobbmöjligheter som passar dina färdigheter och karriärmål.",
    },
    {
      question: "Hur lång tid tar det innan jag får ett jobb?",
      answer:
        "Tiden det tar att hitta ett jobb kan variera beroende på din erfarenhet, kompetens och arbetsmarknadens efterfrågan. Vi arbetar dock hårt för att påskynda processen och hjälpa dig att hitta rätt jobbmöjlighet så snart som möjligt.",
    },
    {
      question: "Kan ni hjälpa mig att förbättra mitt CV?",
      answer:
        "Absolut! Vi erbjuder professionell CV-optimering för att säkerställa att ditt CV är imponerande och effektivt framhäver dina färdigheter och erfarenheter.",
    },
    {
      question: "Erbjuder ni någon form av uppföljningsstöd?",
      answer:
        "Ja, vi erbjuder kontinuerligt stöd även efter att du har fått ett jobb. Vårt team finns tillgängligt för att hjälpa dig med eventuella frågor eller problem som kan uppstå under din nya anställning.",
    },
  ];

  return (
    <>
      <Hero pageTitle="FAQ" />
      <section className="faq-section">
        <div className="faq-container">
          {questions.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
