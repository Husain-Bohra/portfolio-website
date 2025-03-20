import project1 from '../assets/images/project-thumbnails/project1.jpg';
import project2 from '../assets/images/project-thumbnails/project2.jpg';
import project3 from '../assets/images/project-thumbnails/project3.jpg';
import project4 from '../assets/images/project-thumbnails/project4.jpg';

const projects = [
  {
    id: 1,
    title: 'Algorithmic Trading System',
    description: 'A Python-based algorithmic trading system using quantitative analysis to identify market trends and execute trades automatically with risk management protocols.',
    image: project1,
    tags: ['Python', 'Pandas', 'Numpy', 'Finance', 'APIs'],
    github: 'https://github.com/Husain-Bohra/algorithmic-trading',
    demo: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive financial dashboard built with Power BI that visualizes market data, portfolio performance, and risk metrics for data-driven investment decisions.',
    image: project2,
    tags: ['Power BI', 'Data Analysis', 'Finance', 'SQL'],
    github: 'https://github.com/Husain-Bohra/financial-dashboard',
    demo: '#'
  },
  {
    id: 3,
    title: 'Portfolio Optimization Tool',
    description: 'C++ application that implements Modern Portfolio Theory to find optimal asset allocation, using Monte Carlo simulations to model different market scenarios.',
    image: project3,
    tags: ['C++', 'Quantitative Analysis', 'Statistics', 'Finance'],
    github: 'https://github.com/Husain-Bohra/portfolio-optimization',
    demo: '#'
  },
  {
    id: 4,
    title: 'Market Data Analysis',
    description: 'A data analysis project that explores market trends, sector performance, and correlation patterns using Python, pandas, and interactive visualizations.',
    image: project4,
    tags: ['Python', 'Data Visualization', 'Pandas', 'Financial Analysis'],
    github: 'https://github.com/Husain-Bohra/market-analysis',
    demo: '#'
  }
];

export default projects; 