export class Leave {
    id: string;
    // tslint:disable-next-line: variable-name
    leave_purpose: string;
    from: Date;
    to: Date;
    session: string;
    // tslint:disable-next-line: variable-name
    leave_type: string;
    description: string;
    proof: Document;
}
