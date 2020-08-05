import React from "react";

import classes from "./Share.module.css";

const Share = () => {
    // axios.post("/yards.json, img)
    //     .then(response => {
    //         dispatch(setCandleId(response.data.name));
    //         dispatch(addCandleSuccess(response.data.name, img));
    //     })
    //     .catch(error => {
    //         dispatch(editCandleFail(error));
    //     });

    return (
        <div className={classes.Share}>
            Share
        </div>
    );
};

export default Share;