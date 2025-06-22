import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSidebar';
import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh] flex">
             <WorkspaceSidebar />
            <div className="flex flex-col flex-1">
                <WorkspaceNavbar />
            <div className="flex-1 overflow-y-auto bg-white"></div>
               <ResizablePanelGroup direction="horizontal" autoSaveId={'workspace-resize'}>
                    <ResizablePanel
                        defaultSize={20}
                        minSize={11}
                        className="bg-purple-200"

                    >
                        <div>
                            Sidebar
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel
                        minSize={20}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
};