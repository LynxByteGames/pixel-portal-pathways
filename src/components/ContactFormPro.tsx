
import React from "react";

const ContactFormPro = () => (
  <section className="w-full py-20 bg-[#15161a]" id="contact">
    <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-16 px-5">
      {/* LEWA: foto + tekst */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-yellow-400 text-base mb-3">
          开启成功之路 <span className="inline-block">↘</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to join the winning side?
        </h2>
        <p className="mb-8 text-white/70 text-lg">
          Get in touch. Zero fluff. Pure strategy.
        </p>
        <div className="flex gap-4 items-center">
          <img src="public/lovable-uploads/6a0af09a-ee9e-458f-9cb2-fb29ce59e494.png" alt="Wojciech Jaworski" className="rounded-full w-20 h-20 object-cover border-4 border-yellow-400"/>
          <div>
            <div className="font-semibold text-lg text-white">Wojciech Jaworski</div>
            <div className="text-white/40 text-base">CEO</div>
          </div>
        </div>
      </div>
      {/* PRAWA: formularz */}
      <form className="flex-1 bg-black/50 rounded-2xl p-8 flex flex-col gap-5 mx-auto max-w-xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/90 font-medium mb-1" htmlFor="fullname">Full name</label>
            <input id="fullname" placeholder="John Doe" type="text" className="bg-[#111112] border border-white/15 rounded-lg px-4 py-3 text-white w-full focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label className="block text-white/90 font-medium mb-1" htmlFor="company">Company</label>
            <input id="company" placeholder="Just For Fun" type="text" className="bg-[#111112] border border-white/15 rounded-lg px-4 py-3 text-white w-full focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label className="block text-white/90 font-medium mb-1" htmlFor="email">E-mail</label>
            <input id="email" placeholder="john@justforfun.com" type="email" className="bg-[#111112] border border-white/15 rounded-lg px-4 py-3 text-white w-full focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label className="block text-white/90 font-medium mb-1" htmlFor="phone">Phone</label>
            <input id="phone" placeholder="069 549 222 666" type="text" className="bg-[#111112] border border-white/15 rounded-lg px-4 py-3 text-white w-full focus:ring-2 focus:ring-yellow-400" />
          </div>
        </div>
        <div>
          <label className="block text-white/90 font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message..." className="bg-[#111112] border border-white/15 rounded-lg px-4 py-3 text-white w-full focus:ring-2 focus:ring-yellow-400 min-h-[100px]" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-white/80 text-sm">
            <input type="checkbox" className="rounded border-gray-300" />
            I have read and accept the Privacy Policy and Terms &amp; Conditions.
          </label>
          <label className="flex items-center gap-2 text-white/60 text-xs">
            <input type="checkbox" className="rounded border-gray-300" />
            I agree to receive information about products, services, promotions and news from HUQIAO. based in Hong Kong and its related entities, including other companies from the 22Ventures group, at the provided email address.
          </label>
        </div>
        <button type="submit" className="mt-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full py-3 text-lg shadow">
          Send message
        </button>
      </form>
    </div>
  </section>
);

export default ContactFormPro;
