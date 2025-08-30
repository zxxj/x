import { MagicCard } from '@/components/magicui/magic-card';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { useTheme } from 'next-themes';
const Article = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full">
        <div className="bg-amber-500">1</div>
        <div className="bg-blue-700">
          <Card className="p-0 max-w-sm w-full shadow-none border-none">
            <MagicCard gradientColor={'#D9D9D955'} className="p-0">
              <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
                <Button className="w-full">Sign In</Button>
              </CardFooter>
            </MagicCard>
          </Card>
          *
          <MagicCard>
            <div className="p-4">
              <p>Hello World</p>
              <span>Hover me</span>
            </div>
          </MagicCard>
        </div>
        <div className="bg-emerald-600">3</div>
      </div>
    </div>
  );
};

export default Article;
