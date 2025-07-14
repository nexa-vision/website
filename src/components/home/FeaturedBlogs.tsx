
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const FeaturedBlogs = () => {
  const blogs = [
    {
      title: "10 UX Design Trends to Watch in 2025",
      excerpt: "Explore the emerging user experience design trends that will shape digital products in the coming year.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80",
      date: "May 15, 2025",
      category: "Design",
      slug: "ux-design-trends-2025"
    },
    {
      title: "How AI is Transforming Web Development",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we build and optimize websites.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
      date: "May 10, 2025",
      category: "Technology",
      slug: "ai-transforming-web-development"
    },
    {
      title: "The Ultimate Guide to Digital Marketing ROI",
      excerpt: "Learn how to measure and maximize the return on investment for your digital marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      date: "May 5, 2025",
      category: "Marketing",
      slug: "digital-marketing-roi-guide"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Latest <span className="text-gradient-green">Insights</span>
            </h2>
            <p className="text-muted-foreground">
              Expert advice and thought leadership from our team
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="border-accent-green hover:bg-accent-green hover:text-white">
              View All Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-muted overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-accent-purple font-medium">{blog.category}</span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{blog.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Link to={`/blog/${blog.slug}`} className="text-accent-green flex items-center hover:text-accent-purple">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
