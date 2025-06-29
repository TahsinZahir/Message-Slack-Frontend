import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { ChannelMessagesProvider } from './CHannelMessages';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { SocketContextProvider } from './SocketContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import { WorkspaceContextProvider } from './WorkspaceContext';

export const AppContextProvider = combineContext(
        ChannelMessagesProvider,
     SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
     WorkspacePreferencesModalContextProvider,
      CreateChannelContextProvider
); 