import { PaymentHistory } from "./payment";

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