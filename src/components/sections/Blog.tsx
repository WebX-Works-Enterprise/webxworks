
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

// Actual blog data with Medium links
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Custom Websites for a Digital-First World",
    excerpt: "Discover how custom web development is shaping the future of digital presence for businesses in an increasingly online world.",
    category: "Web Development",
    date: "June 15, 2024",
    author: "WebXworks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "https://medium.com/@webxworks1.0/the-future-of-web-development-custom-websites-for-a-digital-first-world-e230605d8343"
  },
  {
    id: 2,
    title: "Why Scalable Solutions Are the Key to Growing Your Business Online",
    excerpt: "Learn how scalable web solutions can support your business growth and adapt to changing market demands.",
    category: "Business Growth",
    date: "June 8, 2024",
    author: "WebXworks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "https://medium.com/@webxworks1.0/why-scalable-solutions-are-the-key-to-growing-your-business-online-63b2486bf953"
  },
  {
    id: 3,
    title: "How to Craft a Seamless User Experience with Expert UI/UX Design",
    excerpt: "Dive into the principles of effective UI/UX design and how it creates meaningful digital experiences for your users.",
    category: "UI/UX Design",
    date: "May 30, 2024",
    author: "WebXworks",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    link: "https://medium.com/@webxworks1.0/how-to-craft-a-seamless-user-experience-with-expert-ui-ux-design-cd4503c69965"
  }
];

// Additional blog posts for the footer
export const additionalBlogPosts = [
  {
    id: 4,
    title: "The Role of AI in Web Development: Smarter, Faster, and More Efficient Websites",
    link: "https://medium.com/@webxworks1.0/the-role-of-ai-in-web-development-smarter-faster-and-more-efficient-websites-112c1bfd8b8d"
  },
  {
    id: 5,
    title: "Custom vs. Template Websites: Which One Is Right for Your Business (2024)",
    link: "https://medium.com/@webxworks1.0/custom-vs-template-websites-which-one-is-right-for-your-business-2024-21809966dc93"
  },
  {
    id: 6,
    title: "How Progressive Web Apps (PWAs) Are Changing the Game for Online Businesses in 2024",
    link: "https://medium.com/@webxworks1.0/how-progressive-web-apps-pwas-are-changing-the-game-for-online-businesses-in-2024-7ecb09a241c1"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="relative py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-black" // Changed from text-gradient to text-black
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights, tutorials, and news from our expert team
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center transition-colors group"
                  >
                    Read on Medium
                    <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://medium.com/@webxworks1.0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AnimatedButton variant="default" size="lg" showArrow>
              Visit Our Medium Blog
            </AnimatedButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
