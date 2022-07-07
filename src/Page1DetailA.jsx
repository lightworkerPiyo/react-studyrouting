import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const history = useHistory();

  const onClickGoBack = () => history.goBack();

  return (
    <div>
      <h1>PAGE1DetailA</h1>
      <button onClick={onClickGoBack}>戻る</button>
    </div>
  );
};
