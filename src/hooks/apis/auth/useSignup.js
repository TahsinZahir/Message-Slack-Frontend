import { useMutation } from '@tanstack/react-query';
import { toast } from "sonner"
import { signUpRequest } from '@/apis/auth';

export const useSignup = () => {
  const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signUpRequest,
 onSuccess: (response) => {
            console.log('Successfully signed in', response);

            const userObject = JSON.stringify(response.data);

            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);
            
           toast.success('Successfully signed up. You will be redirected soon.');
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
            toast.error(`Failed to sign up: ${error.message}`);

        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};