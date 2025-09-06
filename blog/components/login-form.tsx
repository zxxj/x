import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BorderBeam } from '@/components/magicui/border-beam';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';
import { login } from '@/app/api/auth';
import { setLocal } from '@/hooks/use-local';

interface LoginFormProps {
  onSuccess?: () => void;
}

const schema = z.object({
  username: z.string().min(1, '用户名不能为空'),
  password: z.string().min(6, '密码至少 6 位'),
});

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    try {
      const { token } = await login(values);
      setLocal('token', token);
      toast.success('登录成功!');
      onSuccess?.();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>密码</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CardFooter>
          {/* <Button
                        className="w-full block"
                        variant="outline"
                        onClick={() =>
                          toast.warning('暂时不开放注册,怕我的数据库爆炸 ┭┮﹏┭┮')
                        }
                      >
                        注册
                      </Button> */}
          <Button
            className="w-full flex items-center"
            type="submit"
            size="sm"
            disabled={isLoading}
          >
            {isLoading && <Loader2Icon className="animate-spin" />}
            登录
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default LoginForm;
