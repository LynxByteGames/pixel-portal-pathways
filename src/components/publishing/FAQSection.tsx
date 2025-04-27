import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What platforms do you support?",
    answer: "We support all major gaming consoles including Nintendo Switch, PlayStation, and Xbox platforms."
  },
  {
    question: "How much does it cost to port my game?",
    answer: "We offer free porting services through our revenue share model. We cover all development and marketing costs upfront."
  },
  {
    question: "How long does the porting process take?",
    answer: "The timeline varies depending on the game's complexity, but typically ranges from 3-6 months for most projects."
  },
  {
    question: "Do I retain the rights to my game?",
    answer: "Yes, you retain full ownership of your IP. Our agreement only covers the console versions of your game."
  },
  {
    question: "What kind of marketing support do you provide?",
    answer: "We provide comprehensive marketing support including PR, social media, influencer outreach, and community management."
  }
];

const FAQSection = () => {
  return (
    <section className="bg-[#1A103C] py-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-accent/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-[#1E1B4B]/60 backdrop-blur-sm rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-500/20">
                <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
