export interface Config {
    input: string;
    openSeparator: string;
    closeSeparator: string;
    unsortedEmployeeIndex: number;
    unsortedEmployeeTypeIndex: number;
}

export const APP_CONFIG: Config = {
    input: '(id,created,employee(id,firstname,employeeType(id), lastname),location)',
    openSeparator: '(',
    closeSeparator: ')',
    unsortedEmployeeIndex: 2,
    unsortedEmployeeTypeIndex: 5
};