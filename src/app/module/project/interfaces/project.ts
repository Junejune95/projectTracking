

export interface Project {
    projectId: string;
    name: string;
    startDate: string;
    targetEndDate: string;
    budget: number;
    progress:number;
    level:'Init' | 'Re-design' | 'Bug Fix' | 'New Version Release';
    phases?:Array<Phase>;
    currentVersion:string;
    status?:string;
}

export interface PaymentHistory {
    paymentId: number;
    note: string;
    payDate: string;
    receiveAmount:number;
    receiveFile:File;
}


export interface Phase {
    phaseId: string;
    name: string;
    startDate: string;
    developmentEndDate?: string;
    testingStartDate?: string;
    testingEndDate?: string;
    releaseDate?: string;
    budget?: number;
    paymentHistory?:Array<PaymentHistory>;
    features?:Array<string>;
    status?: 'None' | 'Pending' | 'Testing' | 'Bug Fix' | 'Release';
}