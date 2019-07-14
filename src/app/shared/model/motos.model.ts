export class MotoServiceModel {
    motos: MotoModel = new MotoModel();
    managements: ManagmentModel = new ManagmentModel();
}

export class MotoModel {
    id: number;
    brand: string;
    model: string;
    year: number;
}

export class ManagmentModel {
    code: Service;
    description: string;
    date: Date;
    price: number;
}

export enum Service {
    revision = "R",
    fallo = "F"
}
