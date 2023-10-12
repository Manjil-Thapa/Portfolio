import About from '@/components/about';
import ContactForm from '@/components/contact';
import MainNavigation from '@/components/layout/mainNavigation';

export default function HomePage() {
  return (
    <>
      <MainNavigation />
      <About />
      <ContactForm />;
    </>
  );
}
