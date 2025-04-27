
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, DollarSign, BarChart3, PieChart, Briefcase, Target, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Investors = () => {
  const navigate = useNavigate();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-primary to-purple-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-repeat opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-primary/20 rounded-full blur-[100px]"></div>
          
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white mb-4 text-sm font-medium uppercase tracking-wider">Investor Relations</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  Invest in the <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Future of Gaming</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join us on our mission to transform the game publishing and porting landscape with cutting-edge technology and global reach.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <button 
                  onClick={() => navigate('/publishing')}
                  className="bg-white text-purple-primary font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-white/20 hover:translate-y-[-2px] mr-4"
                >
                  Schedule a Meeting
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                  MORE INFORMATION SOON
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>
          
          {/* Decorative elements 
          <motion.div 
            className="absolute -bottom-10 right-[10%] w-20 h-20 bg-white/10 backdrop-blur-md rounded-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          ></motion.div>
          <motion.div 
            className="absolute top-[20%] left-[10%] w-10 h-10 bg-white/10 backdrop-blur-md rounded-full"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          ></motion.div>
        </section>
        
        <motion.section 
          className="py-20 bg-dark relative overflow-hidden"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-accent/5 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">Why Invest</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-primary to-purple-accent bg-clip-text text-transparent">
                Key Investment Highlights
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Our unique position in the gaming industry creates exceptional value and growth opportunities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Market Growth",
                  description: "The global gaming market is projected to reach $300 billion by 2026, with a CAGR of 10.5%.",
                  icon: TrendingUp,
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  title: "Revenue Model",
                  description: "Our revenue-sharing model creates sustainable income streams with growing portfolio of partners.",
                  icon: DollarSign,
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Performance Metrics",
                  description: "Consistently outperforming industry benchmarks with 40% year-over-year growth.",
                  icon: BarChart3,
                  gradient: "from-orange-500 to-amber-600"
                },
                {
                  title: "Market Diversification",
                  description: "Balanced portfolio across PC, console, mobile, and emerging VR/AR platforms.",
                  icon: PieChart,
                  gradient: "from-pink-500 to-rose-600"
                },
                {
                  title: "Strategic Partnerships",
                  description: "Alliances with major platforms and technology providers worldwide.",
                  icon: Briefcase,
                  gradient: "from-purple-500 to-indigo-600"
                },
                {
                  title: "Global Expansion",
                  description: "Rapidly expanding into APAC and LATAM markets with localized strategies.",
                  icon: Globe,
                  gradient: "from-cyan-500 to-blue-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-purple-primary/30 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} rounded-full opacity-10 blur-2xl transform translate-x-1/4 -translate-y-1/4 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="text-white" size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-accent transition-colors duration-300">{item.title}</h3>
                      <p className="text-white/70 mb-4">{item.description}</p>
                      
                      <a href="#" className="inline-flex items-center text-purple-accent group-hover:text-white transition-colors duration-300">
                        Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        <Stats />
        
        <motion.section 
          className="py-20 bg-gradient-to-br from-dark to-dark/80 relative overflow-hidden"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] bg-repeat opacity-30"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-purple-primary/10 text-purple-accent mb-4 text-sm font-medium uppercase tracking-wider">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white to-purple-accent bg-clip-text text-transparent">
                Investment Strategy
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                variants={itemVariants}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-primary/30 transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">Strategic Growth Pillars</h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Platform Expansion",
                        description: "Extending our porting services to include cloud gaming platforms and emerging technologies like VR/AR.",
                        icon: Target
                      },
                      {
                        title: "Portfolio Diversification",
                        description: "Building a balanced game portfolio across genres, platforms, and risk profiles.",
                        icon: PieChart
                      },
                      {
                        title: "Technology Investment",
                        description: "Developing proprietary tools and pipelines to enhance efficiency and quality.",
                        icon: Award
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 mt-1 text-purple-accent">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                          <p className="text-white/70">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 lg:order-2"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary to-purple-accent opacity-30 blur-lg rounded-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470&h=980" 
                    alt="Investment Strategy" 
                    className="rounded-2xl w-full h-[400px] object-cover relative z-10 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-20 rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-30">
                    <h3 className="text-xl font-bold text-white mb-2">Funding Innovation</h3>
                    <p className="text-white/80">Our investment approach focuses on sustainable growth and long-term value creation.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        <motion.section 
          className="py-20 bg-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-accent/10 rounded-full blur-3xl"></div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-12 relative z-10">
                <div className="text-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-primary to-purple-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Ready to Explore Investment Opportunities?
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Contact our investor relations team for more details on how you can be part of our growth story.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <a 
                      href="mailto:investors@lynxbytegames.com" 
                      className="inline-block bg-gradient-to-r from-purple-primary to-purple-accent text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-primary/30 hover:-translate-y-1 group btn-shine"
                    >
                      <span className="flex items-center">
                        Contact Investor Relations <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;
