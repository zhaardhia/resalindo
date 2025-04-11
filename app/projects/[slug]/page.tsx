// components/ProjectDetail.tsx
import LayoutPage from '@/components/layout';
import ProjectDetailClient from '@/components/pages/project-detail';

const imagePlaceholders = [
  'img1', 'img2', 'img3',
  'img4', 'img5', 'img6'
];

export default function ProjectDetail() {

  return (
    <LayoutPage>
      <ProjectDetailClient />
    </LayoutPage>
  );
}
