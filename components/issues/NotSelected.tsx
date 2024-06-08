'use client';

import { ArrowLeft } from 'lucide-react';

export default function NotSelected() {
 return (
  <div className=" space-y-3 text-blue-500">
   <ArrowLeft className="animate-bounce-slide " />
   <p className="font-medium ">Please select branch on the left</p>
  </div>
 );
}
