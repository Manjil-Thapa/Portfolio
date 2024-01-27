import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CardProject = () => {
  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Project Title</CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem
        </CardContent>
      </Card>
    </div>
  );
};

export default CardProject;
