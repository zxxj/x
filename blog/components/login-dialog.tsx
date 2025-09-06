import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { BorderBeam } from '@/components/magicui/border-beam';
import LoginForm from './login-form';

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
            <LoginForm onSuccess={() => onVisibleChange(false)} />
          </CardContent>
          <BorderBeam duration={8} size={100} />
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
