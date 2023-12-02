export interface OneAreaCardProps {
    titleEn: string;
    titlePl: string;
}

export interface OneDetailProps {
    elem:any
}

export interface PaintingAreaDetailType{
    id:number,
    number: string,
    mainPicture: string[],
    blow: boolean,
    hugCleaning: boolean,
    cork: boolean,
    type:string,
    hangingInformation1:string, 
    hangingInformation2:string,
    corkImage:string,
}

export interface DetailPictureProps{
    pictures: string[];
}

export interface ModalCorcsProps{
    picture: string;
}

export interface ModalPictureProps{
    pictures: string[];
    currentPicture:string;
}

export interface ChooseAreaProps{
    area: string;
    setArea: any;
}

export interface EditInformationProps{
    detailNumber:string | undefined;
}