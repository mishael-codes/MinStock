import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const faqData = [
  {
    question: "Is MinStocks free to use?",
    answer:
      "Yes. You can track live stock prices without paying a dime. We believe financial data should be accessible.",
  },
  {
    question: "Where does your data come from?",
    answer:
      "We use trusted, reliable stock APIs like FinnHub and others (coming soon) to fetch live price updates with minimal latency.",
  },
  {
    question: "Can I view historical charts?",
    answer:
      "Not yet — but it's coming soon. We're working on adding price history and trend visualization.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((faq, index) => {
          const isOpen = index === openIndex;
          return (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>
              <div
                className={`mt-2 text-sm text-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
