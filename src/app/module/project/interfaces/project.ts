import { Phase } from "./phase";

export interface Project {
    projectId: string;
    name: string;
    startDate: string;
    targetEndDate: string;
    budget: number;
    progress:number;
    status:'Init' | 'Re-design' | 'Bug Fix' | 'New Version Release';
    phases?:Array<Phase>;
    currentVersion:string;
}