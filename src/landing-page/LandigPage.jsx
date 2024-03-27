import { useEffect } from "react";
import { fetchApprovalRequesterData } from "../store/landing-page/thunk";
import { useDispatch } from "react-redux";

const LandigPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApprovalRequesterData(1, 10, 1));
    console.log("LandigPage");
  }, []);
  return (
    <div>
      <h1>LandigPage</h1>
    </div>
  );
};

export default LandigPage;
