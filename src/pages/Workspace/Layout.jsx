import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSidebar';
import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh] flex">
             <WorkspaceSidebar />
            <div className="flex flex-col flex-1">
                <WorkspaceNavbar />
            <div className="flex-1 overflow-y-auto bg-white"></div>
                {children}
            </div>
        </div>
    );
};