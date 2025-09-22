import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectGallery from './ProjectGallery';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  year: string;
  images?: string[];
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  year, 
  images = [], 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden shadow-soft hover:shadow-elevation transition-smooth ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`${featured ? 'grid lg:grid-cols-2 gap-6' : ''}`}>
        <div className={`${featured ? 'p-6' : 'p-0'}`}>
          <ProjectGallery images={images} title={title} />
        </div>
        
        <CardContent className={`${featured ? 'p-6 flex flex-col justify-center' : 'p-6'}`}>
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <h3 className={`font-semibold mb-3 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
          
          <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
            {description}
          </p>
          
          {featured && (
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium mb-2 text-sm">Características do projeto:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vista privilegiada para o Aruatos da Paz</li>
                <li>• Integração com a paisagem circundante</li>
                <li>• Conceito de farol que guia o saber</li>
                <li>• Ênfase na acessibilidade e fluidez</li>
              </ul>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;