import { useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is included in the free trial?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: true
    },
    {
      id: 2,
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: false
    },
    {
      id: 3,
      question: "Do you offer discounts for annual plans?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: false
    },
    {
      id: 4,
      question: "Is my data secure on your platform?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: false
    },
    {
      id: 5,
      question: "Can I change my plan after I’ve subscribed?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: false
    },
    {
      id: 6,
      question: "Do you offer support for onboarding new users?",
      answer: "Yes, you can cancel your subscription at any time directly from your account settings.",
      isOpen: false
    }
  ]);
  const toggleFaq = (id) => {
    setFaqs((prevFaqs) => prevFaqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)));

    const target = document.querySelector(`.question-wrapper__item:nth-child(${id})`);
    if (target) {
      target.classList.toggle("opened");
    }
  };
  return (
    <div className="questions">
      <div className="question container">
        <div className="question-subtitle">
          <p className="question-subtitle__text reveal">GOT QUESTIONS?</p>
          <h1 className="question-subtitle__title reveal">Everything You Need to Know, All in One Place</h1>
          <p className="question-subtitle__desc reveal">
            Discover quick and comprehensive answers to common questions about our platform, services, and features.
          </p>
        </div>
        <div className="question-wrapper">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="question-wrapper__item reveal"
              style={{ "--i": faq.id - 1.5 }}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="question-wrapper__question">
                <h3 className="question-wrapper__question-title">{faq.question}</h3>
                <span className="question-wrapper__arrow"></span>
              </div>
              <div className="faqcard__body">
                <p className="question-wrapper__answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
