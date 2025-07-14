const fs = require('fs');
const path = require('path');

interface Industry {
  name: string;
  services: string[];
  description: string;
  keywords: string[];
  benefits: string[];
}

interface City {
  name: string;
  state: 'Andhra Pradesh' | 'Telangana';
  industries: Industry[];
  population: string;
  gdp: string;
  growthRate: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    areaServed: string[];
  };
  seoKeywords: string[];
  localLanguages: string[];
}

// Enhanced industries with SEO-focused content
const industries: Record<string, Industry> = {
  IT: {
    name: 'Information Technology',
    services: [
      'Custom Software Development',
      'Enterprise Solutions',
      'Cloud Migration',
      'Digital Transformation',
      'Mobile App Development',
      'AI & Machine Learning Solutions',
      'Cybersecurity Services',
      'IT Consulting'
    ],
    description: 'Leading tech solutions for modern businesses',
    keywords: [
      'software development company',
      'IT services',
      'digital transformation',
      'tech solutions',
      'enterprise software',
      'cloud computing',
      'mobile apps',
      'artificial intelligence'
    ],
    benefits: [
      'Accelerate digital transformation',
      'Improve operational efficiency',
      'Enhanced data security',
      'Scalable cloud solutions'
    ]
  },
  Manufacturing: {
    name: 'Manufacturing',
    services: [
      'Industrial Automation',
      'Supply Chain Solutions',
      'IoT Integration',
      'Quality Management Systems'
    ],
    description: 'Digital solutions for manufacturing excellence',
    keywords: [],
    benefits: []
  },
  Healthcare: {
    name: 'Healthcare',
    services: [
      'Hospital Management Systems',
      'Telemedicine Platforms',
      'Medical Data Analytics',
      'Patient Care Solutions'
    ],
    description: 'Innovative healthcare technology solutions',
    keywords: [],
    benefits: []
  },
  Education: {
    name: 'Education',
    services: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Educational Analytics',
      'Student Management'
    ],
    description: 'Digital transformation in education',
    keywords: [],
    benefits: []
  },
  Tourism: {
    name: 'Tourism',
    services: [
      'Travel Booking Systems',
      'Virtual Tours',
      'Tourism Marketing',
      'Hospitality Solutions'
    ],
    description: 'Digital solutions for tourism growth',
    keywords: [],
    benefits: []
  },
  Agriculture: {
    name: 'Agriculture',
    services: [
      'Farm Management Systems',
      'AgriTech Solutions',
      'Supply Chain Optimization',
      'Crop Analytics'
    ],
    description: 'Modern agricultural technology solutions',
    keywords: [],
    benefits: []
  },
  Retail: {
    name: 'Retail',
    services: [
      'E-commerce Platforms',
      'Inventory Management',
      'POS Systems',
      'Customer Analytics'
    ],
    description: 'Digital retail transformation solutions',
    keywords: [],
    benefits: []
  },
  RealEstate: {
    name: 'Real Estate',
    services: [
      'Property Management Systems',
      'Virtual Property Tours',
      'Real Estate Analytics',
      'Customer Management'
    ],
    description: 'Digital solutions for real estate growth',
    keywords: [],
    benefits: []
  }
};

// Enhanced city data with SEO information
const cities: City[] = [
  {
    name: 'Hyderabad',
    state: 'Telangana',
    industries: [industries.IT, industries.Healthcare, industries.Education],
    population: '10 million',
    gdp: '$74 billion',
    growthRate: '8.7%',
    location: {
      latitude: 17.385044,
      longitude: 78.486671,
      address: 'Hyderabad, Telangana, India',
      areaServed: ['Hyderabad', 'Secunderabad', 'Cyberabad', 'Hi-Tech City']
    },
    seoKeywords: [
      'digital marketing agency Hyderabad',
      'web development company Hyderabad',
      'IT services Hyderabad',
      'software development Hyderabad',
      'digital transformation Hyderabad',
      'SEO services Hyderabad',
      'tech companies Hyderabad',
      'business solutions Hyderabad'
    ],
    localLanguages: ['Telugu', 'English', 'Hindi', 'Urdu']
  },
  {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    industries: [industries.Manufacturing, industries.IT, industries.Tourism],
    population: '2.3 million',
    gdp: '$43.5 billion',
    growthRate: '7.5%',
    location: {
      latitude: 17.686815,
      longitude: 83.218483,
      address: 'Visakhapatnam, Andhra Pradesh, India',
      areaServed: ['Visakhapatnam', 'Rajahmundry', 'Vizag']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    industries: [industries.Agriculture, industries.Education, industries.Retail],
    population: '1.8 million',
    gdp: '$27 billion',
    growthRate: '6.8%',
    location: {
      latitude: 16.506174,
      longitude: 80.648015,
      address: 'Vijayawada, Andhra Pradesh, India',
      areaServed: ['Vijayawada', 'Guntur', 'Nellore']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Warangal',
    state: 'Telangana',
    industries: [industries.Education, industries.Healthcare, industries.Manufacturing],
    population: '830,000',
    gdp: '$12 billion',
    growthRate: '6.2%',
    location: {
      latitude: 18.000000,
      longitude: 79.583333,
      address: 'Warangal, Telangana, India',
      areaServed: ['Warangal', 'Karimnagar']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Tirupati',
    state: 'Andhra Pradesh',
    industries: [industries.Tourism, industries.Education, industries.Healthcare],
    population: '460,000',
    gdp: '$8.5 billion',
    growthRate: '5.9%',
    location: {
      latitude: 13.625000,
      longitude: 79.420000,
      address: 'Tirupati, Andhra Pradesh, India',
      areaServed: ['Tirupati', 'Chittoor']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Guntur',
    state: 'Andhra Pradesh',
    industries: [industries.Agriculture, industries.Education, industries.Manufacturing],
    population: '750,000',
    gdp: '$15 billion',
    growthRate: '6.5%',
    location: {
      latitude: 16.300000,
      longitude: 80.450000,
      address: 'Guntur, Andhra Pradesh, India',
      areaServed: ['Guntur', 'Nellore']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Nellore',
    state: 'Andhra Pradesh',
    industries: [industries.Agriculture, industries.Manufacturing, industries.Healthcare],
    population: '600,000',
    gdp: '$11 billion',
    growthRate: '5.8%',
    location: {
      latitude: 14.433333,
      longitude: 79.966667,
      address: 'Nellore, Andhra Pradesh, India',
      areaServed: ['Nellore', 'Guntur']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Karimnagar',
    state: 'Telangana',
    industries: [industries.Agriculture, industries.Healthcare, industries.Education],
    population: '380,000',
    gdp: '$7.2 billion',
    growthRate: '5.5%',
    location: {
      latitude: 18.666667,
      longitude: 79.700000,
      address: 'Karimnagar, Telangana, India',
      areaServed: ['Karimnagar', 'Warangal']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Rajahmundry',
    state: 'Andhra Pradesh',
    industries: [industries.Agriculture, industries.Tourism, industries.Education],
    population: '420,000',
    gdp: '$8.1 billion',
    growthRate: '5.7%',
    location: {
      latitude: 16.996667,
      longitude: 81.783333,
      address: 'Rajahmundry, Andhra Pradesh, India',
      areaServed: ['Rajahmundry', 'Vizag']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  },
  {
    name: 'Nizamabad',
    state: 'Telangana',
    industries: [industries.Agriculture, industries.Healthcare, industries.Manufacturing],
    population: '320,000',
    gdp: '$6.5 billion',
    growthRate: '5.4%',
    location: {
      latitude: 19.633333,
      longitude: 78.816667,
      address: 'Nizamabad, Telangana, India',
      areaServed: ['Nizamabad', 'Karimnagar']
    },
    seoKeywords: [],
    localLanguages: ['Telugu', 'English']
  }
];

// Generate testimonials for a city based on its industries
function generateTestimonials(city: City) {
  return city.industries.map((industry, index) => ({
    name: `${['Dr.', 'Mr.', 'Mrs.'][index % 3]} ${['Kumar', 'Reddy', 'Rao', 'Sharma'][Math.floor(Math.random() * 4)]}`,
    company: `${city.name} ${industry.name.split(' ')[0]} Solutions`,
    role: ['CEO', 'Director', 'Founder'][index % 3],
    image: `/testimonials/person${index + 1}.jpg`,
    content: `Their ${industry.services[0].toLowerCase()} has transformed our business operations in ${city.name}.`,
    rating: 5,
    project: industry.services[Math.floor(Math.random() * industry.services.length)]
  }));
}

// Generate rich SEO content for a city
function generateSEOContent(city: City) {
  const mainIndustry = city.industries[0];
  const secondaryIndustry = city.industries[1];
  
  return {
    // Schema.org markup
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `NexaVision Digital Solutions - ${city.name}`,
      "description": `Leading digital transformation agency in ${city.name}, specializing in ${mainIndustry.name} and ${secondaryIndustry.name} solutions.`,
      "url": `https://nexavision.com/locations/${city.name.toLowerCase()}`,
      "areaServed": city.location.areaServed,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": city.state,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.location.latitude,
        "longitude": city.location.longitude
      },
      "sameAs": [
        "https://www.linkedin.com/company/nexavision",
        "https://twitter.com/nexavision",
        "https://www.facebook.com/nexavision"
      ],
      "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
      "priceRange": "₹₹₹",
      "image": "https://nexavision.com/images/office.jpg"
    },

    // Meta tags
    meta: {
      title: `Digital Marketing & Web Development Services in ${city.name} | NexaVision`,
      description: `Professional web development & digital marketing solutions in ${city.name}. Specialists in ${city.industries.map(i => i.name.toLowerCase()).join(', ')}. Get your free consultation today.`,
      keywords: city.seoKeywords.join(', '),
      ogTitle: `Leading Digital Agency in ${city.name} - NexaVision`,
      ogDescription: `Transform your business with our expert digital solutions in ${city.name}. Specializing in ${mainIndustry.name} and ${secondaryIndustry.name}.`,
      twitterTitle: `NexaVision - Digital Excellence in ${city.name}`,
      twitterDescription: `Elevate your ${city.name} business with our cutting-edge digital solutions. Expert in ${mainIndustry.name}.`
    },

    // Rich content sections
    content: {
      heroSection: {
        title: `Transform Your ${city.name} Business with Digital Excellence`,
        subtitle: `Expert digital solutions tailored for ${city.name}'s growing ${mainIndustry.name} sector`,
        ctaText: `Get Your Free Digital Strategy Session for Your ${city.name} Business`
      },
      marketStats: {
        population: city.population,
        gdp: city.gdp,
        growthRate: city.growthRate,
        keyIndustries: city.industries.map(i => i.name),
        marketPotential: `${city.name} is experiencing rapid digital transformation with a ${city.growthRate} growth rate`
      },
      localExpertise: {
        languages: city.localLanguages,
        serviceAreas: city.location.areaServed,
        industryFocus: city.industries.map(i => ({
          name: i.name,
          services: i.services,
          benefits: i.benefits
        }))
      }
    }
  };
}

// Generate the final city data format
const generateCityData = () => {
  const cityData: Record<string, any> = {};

  cities.forEach(city => {
    const slug = city.name.toLowerCase();
    const seoContent = generateSEOContent(city);
    
    cityData[slug] = {
      // SEO and Schema.org
      schema: seoContent.schema,
      meta: seoContent.meta,
      
      // Main Content
      cityName: city.name,
      state: city.state,
      content: seoContent.content,
      mainIndustries: city.industries.map(i => i.name),
      keyServices: city.industries.flatMap(i => i.services.slice(0, 2)),
      
      // Location and Market Data
      location: city.location,
      marketStats: seoContent.content.marketStats,
      
      // Industry Expertise
      industryExpertise: city.industries.map(i => ({
        name: i.name,
        services: i.services,
        benefits: i.benefits,
        keywords: i.keywords
      })),
      
      // Local Focus
      localExpertise: seoContent.content.localExpertise,
      
      // Lead Generation
      ctaText: seoContent.content.heroSection.ctaText,
      whyChooseUs: [
        `Deep understanding of ${city.name}'s ${city.industries[0].name.toLowerCase()} sector`,
        `Proven expertise in ${city.industries[1].name.toLowerCase()} solutions`,
        `Local market knowledge and multilingual support (${city.localLanguages.join(', ')})`,
        `Comprehensive digital solutions for ${city.location.areaServed.join(', ')}`
      ],

      // Testimonials
      testimonials: generateTestimonials(city)
    };
  });

  return `export const cityData = ${JSON.stringify(cityData, null, 2)};

export default cityData;`;
};

// Write the generated data to file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'cityData.ts');
fs.writeFileSync(outputPath, generateCityData(), 'utf8');

console.log('City data generated successfully!'); 