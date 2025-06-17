import { useMutation } from '@tanstack/react-query';
import { signInRequest } from '@/apis/auth';
import { toast } from "sonner"
import { useAuth } from '@/hooks/context/useAuth';

export const useSignin = () => {
    const { setAuth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in', response);
             const userObject = JSON.stringify(response.data);

            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);

            setAuth({
                token: response.data.token,
                user: response.data,
                loading: false
            });
            
             toast.success('Successfully signed in. You will be redirected to the home page in a few seconds.');
        },
        onError: (error) => {
            console.error('Failed to sign in', error);
          toast.error(`Failed to sign in: ${error.message}`);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};