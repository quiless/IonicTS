/* Angular */
import { DateTime } from "ionic-angular";
import { Time } from "@angular/common";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export class ClaimTimeSheet{
    UniqueId : string;
    ClaimUniqueId : string;
    HasCashFlow : boolean;
    IncidenceName : string;
    IncidenceUniqueId : string;
    IncidenceTypeName : string;
    CurrencyId : number;
    IncidenceTypeUniqueId : string;
    CreateDate : DateTime;
    StartDate : DateTime;
    EndDate : Date;
    TimeSpentMinute : number;
    TimeSpentHourMinute : any;
    FeesGenerated : number;
    FeesToGenerate : number;
    Observation : string;
    HasCollection : boolean;
}