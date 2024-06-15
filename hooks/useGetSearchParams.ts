import { useSearchParams } from 'next/navigation';

const useGetSearchParams = () => {
 const params = useSearchParams();

 const getSearchParams = (values: string[]) => {
  if (!Array.isArray(values)) return [];
  return values.map((item) => params.get(item) ?? '');
 };

 return { getSearchParams };
};
export default useGetSearchParams;
