import Projects from '@/components/Projects';
import Sidebar from '@/components/Sidebar';
import Socials from '@/components/Socials';

export default function Home() {
  return (
    <div className='text-3xl'>
      <Sidebar />
      <Projects />
      <Socials />
    </div>
  );
}
