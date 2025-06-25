import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import { WorkspaceContextProvider } from './WorkspaceContext';

export const AppContextProvider = combineContext(
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
     WorkspacePreferencesModalContextProvider,
      CreateChannelContextProvider
); 