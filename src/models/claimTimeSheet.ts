/* Angular */
import { DateTime } from "ionic-angular";

export class ClaimTimeSheet{
    UniqueId : string;
    ClaimUniqueId : string;
    HasCashFlow : boolean;
    IncidenceName : string;
    IncidenceUniqueId : string;
    IncidenceTypeName : string;
    IncidenceTypeUniqueId : string;
    CreateDate : DateTime;
    StartDate : DateTime;
    EndDate : DateTime;
    TimeSpentMinute : number;
    FeesGenerated : number;
    FeesToGenerate : number;
    Observation : string;
    HasCollection : boolean;
}