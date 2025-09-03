import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BorderBeam } from '@/components/magicui/border-beam';
import { toast } from 'sonner';

interface LoginDialogProps {
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
}

const LoginDialog = ({ visible, onVisibleChange }: LoginDialogProps) => {
  return (
    <Dialog open={visible} onOpenChange={onVisibleChange}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="p-0"
      >
        <Card className="relative overflow-hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">对话框</DialogTitle>
          </DialogHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">用户名</Label>
                  <Input id="username" placeholder="请输入用户名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">密码</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() =>
                toast.warning('暂时不开放注册,怕我的数据库爆炸 ┭┮﹏┭┮')
              }
            >
              注册
            </Button>
            <Button>登录</Button>
          </CardFooter>
          <BorderBeam duration={8} size={100} />
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
