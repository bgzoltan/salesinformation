export interface ProjectI {
    id:string;
    name:string;
    customer: string;
    description:string;
    period: string; //Q1, Q2, Q3, Q4
    status: string; //active, closed, lost
    valueNet: number;
    margin: number;
}

export class Project {
    constructor(public teamid:string, public sales:string, public customer:string, public description:string, public period: string, public status: string,public valueNet: number, public margin: number){} 
}

export let allprojects=[
    new Project("1","Bagdány Zoli","Invitel","HP Storage","Q1","active",100000000,18),
    new Project("1","Bagdány Zoli","Vodafone","EMC Storage","Q1","active",130000000,18),
    new Project("1","Bagdány Zoli","Telenor","Microsoft licence","Q1","active",50000000,18),
    new Project("1","Tóth Péter","Telenor","SharePoint development","Q2","plan",30000000,18),
    new Project("1","Tóth Péter","Richter Gedeon","Portal development","Q2","plan",34000000,12),
    new Project("1","Tóth Péter","Raiffeisen Bank","DELL Servers","Q2","plan",55000000,15),
    new Project("2","Kovács Zoltán","Takarékbank","Workflow development","Q2","plan",3000000,20),
    new Project("2","Kovács Zoltán","Takarékbank","Endpont security project","Q2","plan",14000000,12),
    new Project("2","Kovács Zoltán","Erste Bank","HP Servers","Q2","plan",155000000,10),
    new Project("3","Dóri Zoltán","Mercedes","EMC Storage","Q3","plan",100000000,15),
]
 
