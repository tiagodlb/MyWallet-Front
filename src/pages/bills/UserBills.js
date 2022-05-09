import { Value, Name, Date, DateAndName, Line } from "./UserBillsStyle.js";

export default function UserBill( {register} ){
    const { description, value, isCredit, date } = register;

    return(
        <Line>
            <DateAndName>
                <Date> {date} </Date>
                <Name> {description} </Name>
            </DateAndName>
            <Value isCredit={isCredit}>
                <span>{value.toFixed(2).replace('.',',').replace('-','')}</span>
            </Value>
        </Line>
    );
};
