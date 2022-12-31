export interface SalesFormInterface {
    fullName: string;
    email: string;
    address: string;
    floor: string;
    zones: {have: boolean, socialZones: socialZones};
    parking: {have: boolean, type: string};
    value: null | number;
    picture: Blob | null;
    elevator: boolean;
}

interface socialZones {
    bbq: boolean;
    living: boolean;
    park: boolean;
}