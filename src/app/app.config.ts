export interface Config {
    input: string;
    front: string;
    back: string;
}

export const APP_CONFIG: Config = {
    input: '(id,created,employee(id,firstname,employeeType(id), lastname),location)',
    front: '(',
    back: ')'
};