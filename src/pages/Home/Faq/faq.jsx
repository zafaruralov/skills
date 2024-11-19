import React, { useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 2,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 3,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 4,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    }
  ]);

  const toggleFaq = (id) => {
    setFaqs((prevFaqs) => prevFaqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)));

    const target = document.querySelector(`.faq-section__item:nth-child(${id})`);
    if (target) {
      target.classList.toggle("opened");
    }
  };

  return (
    <section className="faq-section">
      <header className="available-header reveal" style={{ "--i": 0.5 }}>
        <h1 className="available-header__title">FAQ</h1>
      </header>
      <div className="faq-section__list">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-section__item ${faq.isOpen ? "open" : ""} reveal`}
            style={{ "--i": faq.id - 1.5 }}
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="faq-section__question">
              <h3 className="faq-section__question-title">{faq.question}</h3>
              <span className="faq-section__arrow"></span>
            </div>
            <div className="faqcard__body">
              <p className="faq-section__answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Faq;
