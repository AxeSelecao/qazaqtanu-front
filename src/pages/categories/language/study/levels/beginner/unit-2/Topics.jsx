import { useNavigate, useParams } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit2_Topics() {
  const { num } = useParams();
  const profileData = useSelector((state) => state.login.account);
  const dispatch = useDispatch();

  const [makeComplete, isError] = useMakeCompleteMutation();

  const handleMakeComplete = async (data) => {
    await makeComplete(data).unwrap;
  };

  const [addPoints] = useAddPointsMutation();

  const handleAddPoints = async (data) => {
    await addPoints(data).unwrap();
  };

  const { data = {}, isLoading } = useGetUnitsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (num == 1) {
    return (
      <div className="unit">
        <div className="unit__container">
          <h1 className="unit__container-title">
            {data[0].units[1].materials[0].title[0]} (
            {data[0].units[1].materials[0].title[1]})
          </h1>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[0][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[1][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[2][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[3][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[4][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[5][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[0].description[6][0]}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <button
              className="button-next"
              onClick={() => {
                axios
                  .get(`http://localhost:8000/user/${profileData._id}`)
                  .then((res) => {
                    if (!res.data.results[0].units[1].materials[0].completed) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: "unit-2",
                        material_id: "642b02f183531f58038fca08",
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-2/task/1");
              }}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (num == 2) {
    return (
      <div className="unit">
        <div className="unit__container">
          <h1 className="unit__container-title">
            {data[0].units[1].materials[2].title[1]} (
            {data[0].units[1].materials[2].title[0]})
          </h1>
          <p className="unit__container-description">
            {data[0].units[1].materials[2].description[0][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[2].description[1][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[2].description[2][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[2].description[3][0]}
          </p>
          <p className="unit__container-description">
            {data[0].units[1].materials[2].description[4][0]}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <button
              className="button-next"
              onClick={() => {
                axios
                  .get(`http://localhost:8000/user/${profileData._id}`)
                  .then((res) => {
                    if (!res.data.results[0].units[1].materials[11].completed) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: "unit-2",
                        material_id: "642d8b5951c7da428e97b75e",
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-2/task/12");
              }}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Unit2_Topics;
