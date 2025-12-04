// components/aboutUs/FAQSection.jsx
import React, { useState } from "react";

const allFaqs = [
  // Page 1
  {
    question: "How is Zlovr different from other dating apps?",
    answer: "Zlovr focuses on meaningful connections based on shared values and personality, rather than superficial swiping. We prioritize depth over speed, helping you find compatible matches that last."
  },
  {
    question: "How does Zlovr keep me safe?",
    answer: "Your safety is our top priority. We use advanced verification, AI moderation, and report systems to ensure a secure environment. You can also control your visibility and block/report users anytime."
  },
  {
    question: "How does the matching process work?",
    answer: "Our algorithm analyzes your values, interests, and personality traits to suggest compatible matches. It's not just about photos—it's about finding someone who truly understands you."
  },
  {
    question: "Can I control who sees my profile?",
    answer: "Absolutely! You can set privacy preferences, choose who can view your profile, and even pause your account. Your comfort comes first."
  },
  {
    question: "How do I turn conversations into real-life connections?",
    answer: "We encourage meaningful chats with guided prompts, then suggest safe ways to meet offline, like video calls or public events. Many users transition naturally after building trust."
  },
  // Page 2
  {
    question: "What kind of profile information do I need to provide?",
    answer: "We ask for details about your values, interests, and personality to create meaningful matches. Photos are optional but help add a personal touch—your privacy is always protected."
  },
  {
    question: "Is Zlovr free to use?",
    answer: "Yes, basic features are free. Premium options unlock advanced matching and safety tools for an enhanced experience."
  },
  {
    question: "How do I report inappropriate behavior?",
    answer: "Tap the report button on any profile or message. Our team reviews reports quickly and takes action to maintain a positive community."
  },
  {
    question: "Can I use Zlovr on desktop?",
    answer: "Absolutely! Our web version is fully responsive, so you can browse matches comfortably from any device."
  },
  {
    question: "What if I don't find a match right away?",
    answer: "Take your time—our goal is quality over quantity. Update your profile or try new prompts to refine your matches."
  },
  // Page 3
  {
    question: "How does Zlovr handle data privacy?",
    answer: "We comply with GDPR and other regulations. Your data is encrypted, and you can delete it anytime. We never share without consent."
  },
  {
    question: "Are there success stories from Zlovr users?",
    answer: "Yes! Many couples have found lasting love. Check our testimonials for real stories of connections that started here."
  },
  {
    question: "Can I invite friends to join Zlovr?",
    answer: "Definitely! Use our referral program to invite friends and unlock rewards when they join and make meaningful connections."
  },
  {
    question: "What support is available if I have issues?",
    answer: "Our help center has guides, and our support team is available 24/7 via chat or email for any questions."
  },
  {
    question: "How often does Zlovr update its features?",
    answer: "We release updates regularly based on user feedback to improve matching and safety. Stay tuned for exciting new tools!"
  },
  // Page 4
  {
    question: "Is Zlovr available internationally?",
    answer: "Yes, we're global! Matches are based on location preferences, so you can connect locally or worldwide."
  },
  {
    question: "How do I delete my account?",
    answer: "Go to settings > privacy > delete account. We'll guide you through it and confirm once done."
  },
  {
    question: "What makes Zlovr's conversations unique?",
    answer: "Guided prompts spark deeper talks about values and dreams, moving beyond small talk to real compatibility."
  },
  {
    question: "Can I pause my profile temporarily?",
    answer: "Yes, pause anytime in settings to take a break while keeping your matches and messages intact."
  },
  {
    question: "How does Zlovr promote inclusivity?",
    answer: "We celebrate all identities with inclusive matching and community guidelines that foster respect for everyone."
  }
];

const FAQs_PER_PAGE = 5;
const TOTAL_PAGES = 4;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * FAQs_PER_PAGE;
  const currentFaqs = allFaqs.slice(startIndex, startIndex + FAQs_PER_PAGE);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setOpenIndex(null); // Close any open FAQ when changing page
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-[2.75rem] md:text-[3.5rem] font-bold text-[#222] leading-tight mb-12 text-center">
          Frequently Asked{" "}
          <span className="text-[#e84b64]">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-2 mb-12">
          {currentFaqs.map((faq, index) => {
            const globalIndex = startIndex + index;
            return (
              <div key={globalIndex} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(globalIndex)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#222]">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === globalIndex ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === globalIndex && (
                  <div className="px-6 pb-6">
                    <p className="text-base md:text-lg text-[#878787] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-[#e84b64] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}