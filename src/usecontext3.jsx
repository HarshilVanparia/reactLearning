import * as React from "react";
import { UserProvider } from "./usecontext1";
import { Page1, Page2, Page3 } from "./usecontext2";

// eslint-disable-next-line react/prop-types
function SelectPage({ v1 }){
    const Page = [Page1,Page2,Page3][v1];
    return<Page/>
}

export default function UseContextFinal(){
    const [page, setPage] = React.useState(0);
    return <UserProvider>
        <button onClick={() => setPage(0)} disabled={page === 0}>Page 1</button>
        <button onClick={() => setPage(1)} disabled={page === 1}>Page 2</button>
        <button onClick={() => setPage(2)} disabled={page === 2}>Page 3</button>
        <SelectPage v1={page}/>
    </UserProvider>
}