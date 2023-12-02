export interface FactorySections {
    titleEn: string;
    titlePl: string
}

export interface FactoryAreaLoginType {
    area: string,
    password: string,
}

export interface PaintingAreaDetailType {
    id: number,
    number: string,
    mainPicture: string[],
    blow: boolean,
    hugCleaning: boolean,
    cork: boolean,
    type: string,
    hangingInformation1: string,
    hangingInformation2: string,
    corkImage: string,
}