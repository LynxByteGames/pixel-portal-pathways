
import React from 'react';
import { Button } from '@/components/ui/button';
import { SendIcon, Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a game you'd like to bring to consoles? We'd love to hear about it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 text-white transition-all duration-300" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 text-white transition-all duration-300" 
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 text-white transition-all duration-300" 
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:border-purple-primary/50 focus:outline-none focus:ring-1 focus:ring-purple-primary/30 text-white transition-all duration-300" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-primary/90 hover:to-purple-accent/90 text-white px-8 py-6 h-auto rounded-lg shadow-lg shadow-purple-primary/20 btn-shine">
                <SendIcon className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-primary/20 p-3 rounded-full mr-4">
                    <Mail className="text-purple-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-white/70">contact@lynxbytegames.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-primary/20 p-3 rounded-full mr-4">
                    <Phone className="text-purple-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="text-purple-accent h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Office</h4>
                    <p className="text-white/70">123 Game Street, Digital City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
