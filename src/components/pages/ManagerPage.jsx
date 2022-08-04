import React from "react";
import './ManagerPage.css';
import HeaderManager from "../cummon/Header/HeaderManager";
import CollapsibleTable from "../cummon/Table/CollapsibleTable";



function ManagerPage() {
    return (
        <>
            <HeaderManager />
            <div className="table_contaner">
                <CollapsibleTable/>
            </div>
        </>
    )
}

export default ManagerPage;