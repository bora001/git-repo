import {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectTrigger,
 SelectValue,
} from './select';
export type SelectItemType = {
 option: string | number;
 value: string;
};
const CustomSelect = ({
 placeholder,
 title,
 selectObj,
}: {
 placeholder: string;
 title?: string;
 selectObj: SelectItemType[];
}) => {
 return (
  <Select>
   <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={placeholder} />
   </SelectTrigger>
   <SelectContent>
    <SelectGroup>
     {title?.length && <SelectLabel>{title}</SelectLabel>}
     {selectObj.map((obj) => (
      <SelectItem key={obj.value} value={obj.value}>
       {obj.option}
      </SelectItem>
     ))}
    </SelectGroup>
   </SelectContent>
  </Select>
 );
};
export default CustomSelect;
