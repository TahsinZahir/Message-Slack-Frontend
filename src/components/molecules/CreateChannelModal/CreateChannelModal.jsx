import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useAddChannelToWorkspace } from '@/hooks/apis/workspaces/useAddChannelToWorkspace';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { toast } from "sonner"

export const CreateChannelModal = () => {
      const queryClient = useQueryClient();
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();

    const [channelName, setChannelName] = useState('');

    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace();
       const {currentWorkspace} = useCurrentWorkspace();

    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        await addChannelToWorkspaceMutation({
            workspaceId: currentWorkspace?._id,
            channelName: channelName
        });

        toast({
            type: 'success',
            title: 'Channel created successfully'
        });

        queryClient.invalidateQueries(`fetchWorkspaceById-${currentWorkspace?._id}`);

        handleClose();
    }

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a channel</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder="Channel Name e.g. team-announcements"
                        required
                    />

                    <div className='flex justify-end mt-4'>
                        <Button>
                            Create Channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
            
        </Dialog>
    );
};