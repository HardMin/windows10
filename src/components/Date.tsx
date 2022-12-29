import { useState } from "react";
import { hourCurrent, dateCurrent } from '../api/date'
import Text from "../components/Text";


interface Props {
  className?: string;
  verbose?: boolean
}
export const Hour = ({ className }: Props) => {
  const [hour, setHour] = useState('')

  setInterval(()=>hourCurrent(setHour), 1000)

  return <Text className={className}>{hour}</Text>;
};

export const Date = ({ className, verbose = true }: Props)=>{
  const [date, setDate] = useState('')

  verbose
    ? setInterval(()=>dateCurrent(setDate, true), 1000)
    : setInterval(()=>dateCurrent(setDate, false), 1000)

  return <Text className={className}>{date}</Text>;

}
