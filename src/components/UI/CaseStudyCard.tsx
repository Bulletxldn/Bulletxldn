import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: number;
  title: string;
  category: string;
  platform: string;
  image: string;
  metric: string;
  description: string;
  onClick: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  category,
  platform,
  image,
  metric,
  description,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {platform}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {metric}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-accent-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center text-accent-600 font-medium group-hover:text-accent-700 transition-colors">
          <span>Read case study</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;