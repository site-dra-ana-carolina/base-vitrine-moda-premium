import { Link } from "wouter";

interface CategoryCardProps {
  category: {
    name: string;
    description: string;
  };
  imageSrc: string;
}

export function CategoryCard({ category, imageSrc }: CategoryCardProps) {
  return (
    <a href="/#colecao" className="group relative aspect-[3/4] overflow-hidden block">
      <img
        src={imageSrc}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="font-serif text-2xl mb-1 drop-shadow-sm">{category.name}</h3>
        <p className="text-sm text-white/90 drop-shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {category.description}
        </p>
      </div>
    </a>
  );
}
