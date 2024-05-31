
import { handler } from './[...nextauth]/route';

export const POST = handler.auth((req) => {
 // req.auth
 //  console.log(req.auth, '===post,req');
});

export const GET = handler.auth((req) => {
 // req.auth
 //  console.log(req.auth, 'Get,req');
});
