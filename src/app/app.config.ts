export interface Config {
    input: string;
}

export const APP_CONFIG: Config = {
    input: '(id,created,employee(id,firstname,employeeType(id), lastname),location)'
};