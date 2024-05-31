import { handler } from './api/auth/[...nextauth]/route';
const index = async () => {
 const session = await handler.auth();
 console.log(session, 'session');
 return <div>HOME</div>;
};
export default index;
