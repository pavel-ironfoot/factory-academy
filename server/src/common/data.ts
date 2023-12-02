import { FactoryAreaLoginType, FactorySections, PaintingAreaDetailType } from "./types-and-interfaces";
export const JWT_ACCESS_SECRET = 'jwt-secret-key-bla-bla';
export const JWT_REFRESH_SECRET = 'jwt-secret-key-la-la-la';


export const factoryAreaLogin: FactoryAreaLoginType[] = [
    {
        area: 'Painting-Area',
        password: 'Painting123$',
    },
    {
        area: 'Welder-Area',
        password: 'Weldering123$',
    },
    {
        area: 'All-Factory',
        password: 'Lieder123$'
    }
]

export const factorySectionsData: FactorySections[] = [{
    titleEn: 'Painting-Area',
    titlePl: 'Lacernia',
},
{
    titleEn: 'Welder-Area',
    titlePl: 'Dział spawalniczy',
},
{
    titleEn: 'Cell-Line-1',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-2',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-3',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-4',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-5',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-6',
    titlePl: 'Obszar Mechaniczny',
},
{
    titleEn: 'Cell-Line-7',
    titlePl: 'Obszar Mechaniczny',
},
];

export const paintingAreaDetails:PaintingAreaDetailType[] = [
    {
        id:1,
        number: '1111111wba',
        mainPicture: ['1111111wba-one','1111111wba-two','1111111wba-three'],
        blow: true,
        hugCleaning: true,
        cork: false,
        type:'Kiss',
        hangingInformation1:'3 2 2', 
        hangingInformation2:'3 4',
        corkImage:'cork4'
    },
    {
        id:2,
        number: '2222222wba',
        mainPicture: ['2222222wba-one','2222222wba-two','2222222wba-three'],
        blow: false,
        hugCleaning: true,
        cork: true,
        type:'Keba',
        hangingInformation1:'1 4 4', 
        hangingInformation2:'',
        corkImage:'cork4' 
    },
    {
        id:3,
        number: '3333333wba',
        mainPicture: ['3333333wba-one','3333333wba-two','3333333wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Multipack',
        hangingInformation1:'4 0 4', 
        hangingInformation2:'3 4', 
        corkImage:'cork6'
    },
    {
        id:4,
        number: '4444444wba',
        mainPicture: ['4444444wba-one','4444444wba-two','4444444wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Multipack',
        hangingInformation1:'1 4 4', 
        hangingInformation2:'',
        corkImage:'cork3'
    },
    {
        id:5,
        number: '5555555wba',
        mainPicture: ['5555555wba-one','5555555wba-two','5555555wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'2 4 4', 
        hangingInformation2:'3 4',
        corkImage:'cork1'
    },
    {
        id:6,
        number: '6666666wba',
        mainPicture: ['6666666wba-one','6666666wba-two','6666666wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Keba',
        hangingInformation1:'1 0 4', 
        hangingInformation2:'',
        corkImage:'cork2'
    },
    {
        id:7,
        number: '7777777wba',
        mainPicture: ['7777777wba-one','7777777wba-two','7777777wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'1 0 4', 
        hangingInformation2:'', 
        corkImage:'cork4'
    },
    {
        id:8,
        number: '8888888wba',
        mainPicture: ['8888888wba-one','8888888wba-two','8888888wba-three'],
        blow: false,
        hugCleaning: false,
        cork: false,
        type:'Multipack',
        hangingInformation1:'3 2 4', 
        hangingInformation2:'3 4',
        corkImage:'cork2'
    },
    {
        id:9,
        number: '9999999wba',
        mainPicture: ['9999999wba-one','9999999wba-two','9999999wba-three'],
        blow: false,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'2 0 4', 
        hangingInformation2:'',
        corkImage:'cork3'
    },
    {
        id:10,
        number: '10101001ba',
        mainPicture: ['10101001wba-one','10101001wba-two','10101001wba-three'],
        blow: false,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'1 2 2', 
        hangingInformation2:'3 4',
        corkImage:'cork4'
    },
    {
        id:11,
        number: '11111110wba',
        mainPicture: ['11111110wba-one','11111110wba-two','11111110wba-three'],
        blow: false,
        hugCleaning: false,
        cork: false,
        type:'Multipack',
        hangingInformation1:'', 
        hangingInformation2:'',
        corkImage:'cork3'
    },
    {
        id:12,
        number: '1212121wba',
        mainPicture: ['1212121wba-one','1212121wba-two','1212121wba-three'],
        blow: false,
        hugCleaning: false,
        cork: false,
        type:'Multipack',
        hangingInformation1:'2 2 4', 
        hangingInformation2:'',
        corkImage:'cork1'
    },
    {
        id:13,
        number: '1313131wba',
        mainPicture: ['1313131wba-one','1313131wba-two','1313131wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'3 0 4', 
        hangingInformation2:'',
        corkImage:'cork3'
    },
    {
        id:14,
        number: '1414141wba',
        mainPicture: ['1414141wba-one','1414141wba-two','1414141wba-three'],
        blow: true,
        hugCleaning: false,
        cork: true,
        type:'Keba',
        hangingInformation1:'4 0 2', 
        hangingInformation2:'',
        corkImage:'cork2'
    },
    {
        id:15,
        number: '1515151wba',
        mainPicture: ['1515151wba-one','1515151wba-two','1515151wba-three'],
        blow: false,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'2 2 4', 
        hangingInformation2:'', 
        corkImage:'cork4'
    },
    {
        id:16,
        number: '1616161wba',
        mainPicture: ['1616161wba-one','1616161wba-two','1616161wba-three'],
        blow: false,
        hugCleaning: true,
        cork: false,
        type:'Multipack',
        hangingInformation1:'1 8 4', 
        hangingInformation2:'', 
        corkImage:'cork3'
    },
    {
        id:17,
        number: '1717171wba',
        mainPicture: ['1717171wba-one','1717171wba-two','1717171wba-three'],
        blow: true,
        hugCleaning: true,
        cork: false,
        type:'Multipack',
        hangingInformation1:'1 0 4', 
        hangingInformation2:'',
        corkImage:'cork4'
    },
    {
        id:18,
        number: '1818181wba',
        mainPicture: ['1818181wba-one','1818181wba-two','1818181wba-three'],
        blow: true,
        hugCleaning: true,
        cork: true,
        type:'Multipack',
        hangingInformation1:'1 2 4', 
        hangingInformation2:'',
        corkImage:'cork1'
    },
    {
        id:19,
        number: '1919191wba',
        mainPicture: ['1919191wba-one','1919191wba-two','1919191wba-three'],
        blow: true,
        hugCleaning: false,
        cork: false,
        type:'Keba',
        hangingInformation1:'1 2 2', 
        hangingInformation2:'',
        corkImage:'cork1'
    },
    {
        id:20,
        number: '2020202wba',
        mainPicture: ['2020202wba-one','2020202wba-two','2020202wba-three'],
        blow: false,
        hugCleaning: false,
        cork: true,
        type:'Multipack',
        hangingInformation1:'1 2 4', 
        hangingInformation2:'',
        corkImage:'cork2'
    },
    {
        id:21,
        number: '2121212wba',
        mainPicture: ['2121212wba-one','2121212wba-two','2121212wba-three'],
        blow: false,
        hugCleaning: false,
        cork: true,
        type:'Kiss',
        hangingInformation1:'3 2 0', 
        hangingInformation2:'10 4',
        corkImage:'cork5'
    },
    
];