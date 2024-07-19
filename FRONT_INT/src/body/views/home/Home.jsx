import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Checklist from "../../components/checkList/CheckList.jsx";
import ManageStaff from "../../components/manageStaff/ManageStaff.jsx";
import NotasStaff from "../../components/notasStaff/NotasStaff.jsx";
import TaskAndStandars from "../../components/taskAndStandars/TaskAndStandars.jsx";
import TimeStamp from "../../components/timeStamp/TimeStamp.jsx";
import TipStaff from "../../components/tipStaff/TipStaff.jsx";
import { getAllStaff , getAllNotas } from "../../../redux/actions.js";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStaff());
        dispatch(getAllNotas());
    }, [dispatch]);

    return (
        <div className="p-4">
            <div className="mb-4">
                <NotasStaff />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TimeStamp />
                <TipStaff />
                <Checklist />
                <TaskAndStandars />
                {/* <ManageStaff /> */}
            </div>
        </div>
    );
}

export default Home;
