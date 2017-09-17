export interface Config {
    input: string;
    openSeparator: string;
    closeSeparator: string;
    unsortedEmployeeIndex: number;
    unsortedEmployeeTypeIndex: number;
    unsortedFirstIdIndex: number;
    unsortedFirstNameIndex: number;
    unsortedSecondIdIndex: number;
    unsortedThirdIdIndex: number;
    unsortedLastNameIndex: number;
}

export const APP_CONFIG: Config = {
    input: '(id,created,employee(id,firstname,employeeType(id), lastname),location)',
    openSeparator: '(',
    closeSeparator: ')',
    unsortedEmployeeIndex: 2,
    unsortedEmployeeTypeIndex: 5,
    unsortedFirstIdIndex: 3,
    unsortedFirstNameIndex: 4,
    unsortedSecondIdIndex: 5,
    unsortedThirdIdIndex: 6,
    unsortedLastNameIndex: 7 
};