import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API configuration
const API_KEY = 'yv/GR/PH5T2v5RRjLbWtnw==JOPvyJ8UwNXuVCwo'; // Replace with your API Ninjas API key
const API_BASE_URL = 'https://api.api-ninjas.com/v1/city';

// Base cities data with accurate information
const BASE_CITIES = {
  'Andhra Pradesh': [
    {
      name: 'Visakhapatnam',
      population: '2,035,922',
      coordinates: { lat: 17.6868, lon: 83.2185 },
      mainIndustries: ['Manufacturing', 'IT', 'Tourism'],
      gdp: '$43.5 billion',
      growthRate: '7.5%',
      areaServed: ['Visakhapatnam', 'Vizag Port', 'Gajuwaka']
    },
    {
      name: 'Vijayawada',
      population: '1,476,931',
      coordinates: { lat: 16.5062, lon: 80.6480 },
      mainIndustries: ['Agriculture', 'Education', 'Retail'],
      gdp: '$27 billion',
      growthRate: '6.8%',
      areaServed: ['Vijayawada', 'Guntur', 'Mangalagiri']
    },
    {
      name: 'Guntur',
      population: '743,354',
      coordinates: { lat: 16.3067, lon: 80.4365 },
      mainIndustries: ['Agriculture', 'Education', 'Manufacturing'],
      gdp: '$15 billion',
      growthRate: '6.5%',
      areaServed: ['Guntur', 'Mangalagiri', 'Tenali']
    },
    {
      name: 'Tirupati',
      population: '459,985',
      coordinates: { lat: 13.6288, lon: 79.4192 },
      mainIndustries: ['Tourism', 'Education', 'Healthcare'],
      gdp: '$8.5 billion',
      growthRate: '5.9%',
      areaServed: ['Tirupati', 'Tirumala', 'Chandragiri']
    },
    {
      name: 'Nellore',
      population: '600,869',
      coordinates: { lat: 14.4426, lon: 79.9865 },
      mainIndustries: ['Agriculture', 'Manufacturing', 'Healthcare'],
      gdp: '$11 billion',
      growthRate: '5.8%',
      areaServed: ['Nellore', 'Kavali', 'Gudur']
    },
    {
      name: 'Kurnool',
      population: '484,327',
      coordinates: { lat: 15.8281, lon: 78.0373 },
      mainIndustries: ['Agriculture', 'Manufacturing', 'Education'],
      gdp: '$9.2 billion',
      growthRate: '5.7%',
      areaServed: ['Kurnool', 'Adoni', 'Nandyal']
    },
    {
      name: 'Kakinada',
      population: '443,028',
      coordinates: { lat: 16.9891, lon: 82.2475 },
      mainIndustries: ['Manufacturing', 'Agriculture', 'IT'],
      gdp: '$8.9 billion',
      growthRate: '5.9%',
      areaServed: ['Kakinada', 'Samalkot', 'Pithapuram']
    },
    {
      name: 'Rajahmundry',
      population: '421,613',
      coordinates: { lat: 16.9833, lon: 81.7833 },
      mainIndustries: ['Agriculture', 'Tourism', 'Education'],
      gdp: '$8.1 billion',
      growthRate: '5.7%',
      areaServed: ['Rajahmundry', 'Kovvur', 'Kadiam']
    }
  ],
  'Telangana': [
    {
      name: 'Hyderabad',
      population: '6,809,970',
      coordinates: { lat: 17.3850, lon: 78.4867 },
      mainIndustries: ['IT', 'Healthcare', 'Education'],
      gdp: '$74 billion',
      growthRate: '8.7%',
      areaServed: ['Hyderabad', 'Secunderabad', 'Cyberabad', 'Hi-Tech City']
    },
    {
      name: 'Warangal',
      population: '830,281',
      coordinates: { lat: 18.0000, lon: 79.5833 },
      mainIndustries: ['Education', 'Healthcare', 'Manufacturing'],
      gdp: '$12 billion',
      growthRate: '6.2%',
      areaServed: ['Warangal', 'Hanamkonda', 'Kazipet']
    },
    {
      name: 'Karimnagar',
      population: '380,850',
      coordinates: { lat: 18.4386, lon: 79.1288 },
      mainIndustries: ['Agriculture', 'Healthcare', 'Education'],
      gdp: '$7.2 billion',
      growthRate: '5.5%',
      areaServed: ['Karimnagar', 'Manakondur', 'Thimmapur']
    },
    {
      name: 'Nizamabad',
      population: '318,689',
      coordinates: { lat: 18.6725, lon: 78.0941 },
      mainIndustries: ['Agriculture', 'Healthcare', 'Manufacturing'],
      gdp: '$6.5 billion',
      growthRate: '5.4%',
      areaServed: ['Nizamabad', 'Armoor', 'Bodhan']
    },
    {
      name: 'Khammam',
      population: '296,798',
      coordinates: { lat: 17.2473, lon: 80.1514 },
      mainIndustries: ['Agriculture', 'Mining', 'Education'],
      gdp: '$5.9 billion',
      growthRate: '5.3%',
      areaServed: ['Khammam', 'Kothagudem', 'Sathupalli']
    }
  ]
};

// Base industries with their specific services
const industries = {
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
      'Quality Management Systems',
      'Production Planning Software',
      'Inventory Management',
      'Manufacturing Analytics',
      'Digital Twin Solutions'
    ],
    description: 'Digital solutions for manufacturing excellence',
    keywords: [
      'industrial automation',
      'manufacturing software',
      'IoT solutions',
      'supply chain management',
      'quality control systems',
      'production planning',
      'manufacturing analytics',
      'digital twin technology'
    ],
    benefits: [
      'Increased production efficiency',
      'Real-time monitoring and control',
      'Reduced operational costs',
      'Enhanced quality control'
    ]
  },
  Healthcare: {
    name: 'Healthcare',
    services: [
      'Hospital Management Systems',
      'Telemedicine Platforms',
      'Medical Data Analytics',
      'Patient Care Solutions',
      'Healthcare CRM',
      'Medical Billing Software',
      'Clinical Management Systems',
      'Healthcare Analytics'
    ],
    description: 'Innovative healthcare technology solutions',
    keywords: [
      'healthcare software',
      'hospital management system',
      'telemedicine platform',
      'medical data analytics',
      'patient care solutions',
      'healthcare IT',
      'medical software',
      'clinical management'
    ],
    benefits: [
      'Improved patient care',
      'Streamlined operations',
      'Better resource management',
      'Enhanced patient engagement'
    ]
  },
  Education: {
    name: 'Education',
    services: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Educational Analytics',
      'Student Management',
      'Online Assessment Tools',
      'Digital Library Systems',
      'Campus Management',
      'Educational ERP'
    ],
    description: 'Digital transformation in education',
    keywords: [
      'education software',
      'learning management system',
      'virtual classroom',
      'student management',
      'online education',
      'digital learning',
      'educational technology',
      'e-learning solutions'
    ],
    benefits: [
      'Enhanced learning experience',
      'Better student engagement',
      'Efficient administration',
      'Data-driven insights'
    ]
  },
  Tourism: {
    name: 'Tourism',
    services: [
      'Travel Booking Systems',
      'Virtual Tours',
      'Tourism Marketing',
      'Hospitality Solutions',
      'Travel CRM',
      'Tour Management',
      'Hotel Management',
      'Tourism Analytics'
    ],
    description: 'Digital solutions for tourism growth',
    keywords: [
      'tourism software',
      'travel booking system',
      'virtual tours',
      'hospitality solutions',
      'tourism marketing',
      'travel technology',
      'hotel management',
      'tourism analytics'
    ],
    benefits: [
      'Enhanced tourist experience',
      'Efficient booking management',
      'Increased visibility',
      'Better customer engagement'
    ]
  },
  Agriculture: {
    name: 'Agriculture',
    services: [
      'Farm Management Systems',
      'AgriTech Solutions',
      'Supply Chain Optimization',
      'Crop Analytics',
      'Smart Irrigation',
      'Yield Monitoring',
      'Agricultural ERP',
      'Weather Integration'
    ],
    description: 'Modern agricultural technology solutions',
    keywords: [
      'agriculture software',
      'farm management',
      'agritech solutions',
      'crop analytics',
      'smart farming',
      'agricultural technology',
      'precision agriculture',
      'farm automation'
    ],
    benefits: [
      'Increased crop yield',
      'Better resource management',
      'Data-driven farming',
      'Reduced operational costs'
    ]
  },
  Retail: {
    name: 'Retail',
    services: [
      'E-commerce Platforms',
      'Inventory Management',
      'POS Systems',
      'Customer Analytics',
      'Retail CRM',
      'Supply Chain Management',
      'Digital Marketing',
      'Retail Analytics'
    ],
    description: 'Digital retail transformation solutions',
    keywords: [
      'retail software',
      'e-commerce platform',
      'inventory management',
      'POS system',
      'retail analytics',
      'customer management',
      'retail technology',
      'digital retail'
    ],
    benefits: [
      'Improved customer experience',
      'Efficient inventory management',
      'Enhanced sales analytics',
      'Omnichannel presence'
    ]
  },
  Mining: {
    name: 'Mining',
    services: [
      'Mining Operations Management',
      'Resource Planning Systems',
      'Safety Monitoring Solutions',
      'Equipment Tracking',
      'Mining Analytics',
      'Environmental Compliance',
      'Supply Chain Optimization',
      'Mining ERP'
    ],
    description: 'Digital solutions for mining operations',
    keywords: [
      'mining software',
      'mining operations',
      'resource planning',
      'mining safety',
      'mining analytics',
      'environmental monitoring',
      'mining technology',
      'mining automation'
    ],
    benefits: [
      'Improved operational efficiency',
      'Enhanced safety compliance',
      'Better resource management',
      'Environmental sustainability'
    ]
  }
};

// State coordinates boundaries for filtering
const STATE_BOUNDARIES = {
  'Andhra Pradesh': {
    min_lat: 12.6,
    max_lat: 19.1,
    min_lon: 76.7,
    max_lon: 84.8
  },
  'Telangana': {
    min_lat: 15.8,
    max_lat: 19.9,
    min_lon: 77.1,
    max_lon: 81.3
  }
};

// Function to fetch cities from API Ninjas
async function fetchCitiesFromAPI(state) {
  const { min_lat, max_lat, min_lon, max_lon } = STATE_BOUNDARIES[state];
  const url = `${API_BASE_URL}?country=IN&min_lat=${min_lat}&max_lat=${max_lat}&min_lon=${min_lon}&max_lon=${max_lon}&min_population=100000`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-Key': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const cities = await response.json();
    return cities.map(city => ({
      name: city.name,
      state: state,
      population: city.population.toString(),
      location: {
        latitude: city.latitude,
        longitude: city.longitude,
        address: `${city.name}, ${state}, India`,
        areaServed: [city.name]
      }
    }));
  } catch (error) {
    console.error(`Error fetching cities for ${state}:`, error);
    return [];
  }
}

// Helper function to get industry data
function getIndustryData(industryName) {
  // Convert to title case for matching
  const titleCase = industryName.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
  
  return industries[titleCase] || {
    name: industryName,
    services: [
      'Digital Transformation',
      'Process Automation',
      'Data Analytics',
      'Custom Software Solutions'
    ],
    description: `Digital solutions for ${industryName.toLowerCase()}`,
    keywords: [
      `${industryName.toLowerCase()} software`,
      'digital transformation',
      'process automation',
      'data analytics'
    ],
    benefits: [
      'Improved efficiency',
      'Cost reduction',
      'Better decision making',
      'Enhanced productivity'
    ]
  };
}

// Generate testimonials for a city based on its industries
function generateTestimonials(city) {
  return city.mainIndustries.map((industryName, index) => {
    const industry = getIndustryData(industryName);
    return {
      name: `${['Dr.', 'Mr.', 'Mrs.'][index % 3]} ${['Kumar', 'Reddy', 'Rao', 'Sharma'][Math.floor(Math.random() * 4)]}`,
      company: `${city.name} ${industry.name.split(' ')[0]} Solutions`,
      role: ['CEO', 'Director', 'Founder'][index % 3],
      image: `/testimonials/person${index + 1}.jpg`,
      content: `Their ${industry.services[0].toLowerCase()} has transformed our business operations in ${city.name}.`,
      rating: 5,
      project: industry.services[Math.floor(Math.random() * industry.services.length)]
    };
  });
}

// Generate rich SEO content for a city
function generateSEOContent(city) {
  const industryObjects = city.mainIndustries.map(industryName => getIndustryData(industryName));
  const mainIndustry = industryObjects[0];
  const secondaryIndustry = industryObjects[1];
  
  return {
    schema: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `NexaVision Digital Solutions - ${city.name}`,
      "description": `Leading digital transformation agency in ${city.name}, specializing in ${mainIndustry.name} and ${secondaryIndustry.name} solutions.`,
      "url": `https://nexavision.com/locations/${city.name.toLowerCase()}`,
      "areaServed": city.areaServed,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": city.state,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat,
        "longitude": city.coordinates.lon
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
    meta: {
      title: `Digital Marketing & Web Development Services in ${city.name} | NexaVision`,
      description: `Professional web development & digital marketing solutions in ${city.name}. Specialists in ${city.mainIndustries.map(i => i.toLowerCase()).join(', ')}. Get your free consultation today.`,
      keywords: industryObjects.map(i => i.keywords.join(', ')).join(', '),
      ogTitle: `Leading Digital Agency in ${city.name} - NexaVision`,
      ogDescription: `Transform your business with our expert digital solutions in ${city.name}. Specializing in ${mainIndustry.name} and ${secondaryIndustry.name}.`,
      twitterTitle: `NexaVision - Digital Excellence in ${city.name}`,
      twitterDescription: `Elevate your ${city.name} business with our cutting-edge digital solutions. Expert in ${mainIndustry.name}.`
    },
    content: {
      heroSection: {
        title: `Transform Your ${city.name} Business with Digital Excellence`,
        subtitle: `Expert digital solutions tailored for ${city.name}'s growing ${mainIndustry.name} sector`,
        ctaText: `Get Your Free Digital Strategy Session for Your ${city.name} Business`
      },
      marketStats: {
        population: city.population.replace(/,/g, ''),
        gdp: city.gdp,
        growthRate: city.growthRate,
        keyIndustries: city.mainIndustries,
        marketPotential: `${city.name} is experiencing rapid digital transformation with a ${city.growthRate} growth rate`
      },
      localExpertise: {
        languages: ['Telugu', 'English', ...(city.state === 'Telangana' ? ['Hindi', 'Urdu'] : [])],
        serviceAreas: city.areaServed,
        industryFocus: industryObjects.map(i => ({
          name: i.name,
          services: i.services,
          benefits: i.benefits
        }))
      }
    }
  };
}

// Generate the final city data format
function generateCityData() {
  const cityData = {};

  // Process cities from both states
  Object.entries(BASE_CITIES).forEach(([state, cities]) => {
    cities.forEach(city => {
      const slug = city.name.toLowerCase().replace(/\s+/g, '-');
      city.state = state;
      const seoContent = generateSEOContent(city);
      
      cityData[slug] = {
        schema: seoContent.schema,
        meta: seoContent.meta,
        cityName: city.name,
        state: city.state,
        content: seoContent.content,
        mainIndustries: city.mainIndustries,
        keyServices: city.mainIndustries.slice(0, 2).flatMap(industryName => {
          const industry = getIndustryData(industryName);
          return industry.services.slice(0, 2);
        }),
        location: {
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lon,
          address: `${city.name}, ${state}, India`,
          areaServed: city.areaServed
        },
        marketStats: seoContent.content.marketStats,
        industryExpertise: city.mainIndustries.map(industryName => {
          const industry = getIndustryData(industryName);
          return {
            name: industry.name,
            services: industry.services,
            benefits: industry.benefits,
            keywords: industry.keywords
          };
        }),
        localExpertise: seoContent.content.localExpertise,
        ctaText: seoContent.content.heroSection.ctaText,
        whyChooseUs: [
          `Deep understanding of ${city.name}'s ${city.mainIndustries[0].toLowerCase()} sector`,
          `Proven expertise in ${city.mainIndustries[1].toLowerCase()} solutions`,
          `Local market knowledge and multilingual support`,
          `Comprehensive digital solutions for ${city.areaServed.join(', ')}`
        ],
        testimonials: generateTestimonials(city)
      };
    });
  });

  return `export const cityData = ${JSON.stringify(cityData, null, 2)};\n\nexport default cityData;`;
}

// Helper functions for data enrichment
function calculateEstimatedGDP(population) {
  // Rough estimate based on per capita GDP
  const perCapitaGDP = 2500; // USD
  const totalGDP = (parseInt(population) * perCapitaGDP) / 1000000; // In billions
  return `$${totalGDP.toFixed(1)} billion`;
}

function calculateEstimatedGrowthRate(population) {
  // Higher growth rate for larger cities
  const baseRate = 5.5;
  const populationFactor = Math.log10(parseInt(population)) - 5;
  const growthRate = baseRate + (populationFactor * 0.5);
  return `${growthRate.toFixed(1)}%`;
}

function getNearbyAreas(city) {
  // This would ideally use a geolocation API to find nearby cities
  // For now, return a static list based on state
  if (city.state === 'Andhra Pradesh') {
    return ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'];
  } else {
    return ['Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Secunderabad'];
  }
}

// Write the generated data to file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'cityData.ts');
fs.writeFileSync(outputPath, generateCityData(), 'utf8');

console.log('City data generated successfully!'); 