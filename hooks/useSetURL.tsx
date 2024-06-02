import { usePathname, useRouter, useSearchParams } from 'next/navigation';
type SetURLItemType = {
 [key: string]: string;
};
const useSetURL = () => {
 const router = useRouter();
 const pathname = usePathname();
 const searchParams = useSearchParams();
 const params = new URLSearchParams(searchParams.toString());

 const setURL = (value: SetURLItemType) => {
  Object.entries(value).map(([key, value]) => {
   params.set(key, value);
  });
  const newURL = `${pathname}?${params.toString()}`;
  router.replace(newURL);
 };
 return { setURL };
};
export default useSetURL;
