import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchSlice";

export const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // dispatch(fetchStatusActions.markFetchingStarted());
    dispatch(fetchStatusActions.markFetchingStarted);
    fetch("http://localhost:3000/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone);
        dispatch(fetchStatusActions.markFetchingFinished);
        dispatch(itemsActions.addInitialItems(items));

        /*
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
       */

        // console.log("Item Fetched", items);
      });

    return () => {
      // console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        {/* Fatch Done :  {fetchStatus.fetchDone }
    Currently Fatching :  {fetchStatus.currFetching } */}
      </div>
    </>
  );
};
