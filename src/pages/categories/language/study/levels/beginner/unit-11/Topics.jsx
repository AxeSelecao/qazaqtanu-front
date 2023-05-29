import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit11_Topics({ unit }) {
  const { num } = useParams();
  console.log(num);
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
          <h1 className="unit__container-title" style={{ marginBottom: 0 }}>
            {data[0].units[unit].title[1]}
          </h1>
          <h2 style={{ marginBottom: 20, textAlign: "center" }}>
            ({data[0].units[unit].title[0]})
          </h2>
          <p className="unit__container-description">
            {data[0].units[unit].materials[0].description[1]}
            <br />
            {data[0].units[unit].materials[0].description[0]}
          </p>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            {data[0].units[unit].materials[0].title[2]} (
            {data[0].units[unit].materials[0].title[3]})
          </h2>
			 <br />
          <div>
            <table
              class="my_table"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="1"
            >
              <tbody>
                <tr>
                  <td width="19%"></td>
                  <td class="main" width="27%">
                    Әңгімелеу
                  </td>
                  <td class="main" width="27%">
                    Сипаттау
                  </td>
                  <td class="main" width="27%">
                    Пайымдау
                  </td>
                </tr>
                <tr>
                  <td class="main">
                    <em>
                      <strong>Анықтама</strong>
                    </em>
                  </td>
                  <td>
                    Оқиғаны ретімен баяндайтын мәтін{" "}
                    <strong>әңгімелеу мәтіні</strong> деп аталады.
                  </td>
                  <td>
                    Зат немесе құбылысты суреттеп, сипаттайтын мәтін{" "}
                    <strong>сипаттау мәтіні</strong> деп аталады.
                  </td>
                  <td>
                    Оқиға, құбылыстардың себебін дәлелдейтін мәтін{" "}
                    <strong>пайымдау мәтіні</strong> деп аталады.
                  </td>
                </tr>
                <tr>
                  <td class="main">
                    <em>
                      <strong>Сұрақтар</strong>
                    </em>
                  </td>
                  <td class="ext_E">
                    <strong>
                      <em>
                        Не істеді?
                        <br />
                        Қайтеді?
                      </em>
                    </strong>
                  </td>
                  <td class="ext_E">
                    <strong>
                      <em>
                        Қандай?
                        <br />
                        Қай?
                      </em>
                    </strong>
                  </td>
                  <td class="ext_E">
                    <strong>
                      <em>
                        Неліктен?
                        <br />
                        Не себепті?
                      </em>
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td class="main">
                    <em>
                      <strong>Құрылым</strong>
                    </em>
                  </td>
                  <td>
                    1. Оқиғаның басталуы
                    <br />
                    2. Оқиғаның одан әрі дамуы
                    <br />
                    3. Оқиғаның аяқталуы
                  </td>
                  <td>
                    1. Түрі
                    <br />
                    2. Сипаты
                    <br />
                    3. Ерекшілігі
                  </td>
                  <td>
                    1. Дәлелденетін пікір
                    <br />
                    2. Дәлелдеу
                  </td>
                </tr>
                <tr>
                  <td class="main">
                    <em>
                      <strong>Мысал</strong>
                    </em>
                  </td>
                  <td class="ext_E">
                    <em>
                      Күз келді. Айнала алтын түске боялған. Ағаштардың
                      жапырақтары сары, қызыл болып жерге түскен. Құстар жылы
                      жаққа ұшуға дайындалуда.
                    </em>
                  </td>
                  <td class="ext_E">
                    <em>
                      Аққу киелі құс. Аққудың мойны ұзын, тұмсығы қара, ұшы
                      қызыл болып келеді. Аққудың қанаты үзын, мамығы ұлпа
                      болады. Ол ұшқанда жаймен ұшады. Аққулар достықтың,
                      мәңгіліктің белгісі.
                    </em>
                  </td>
                  <td class="ext_E">
                    <em>
                      Ежелден адамдар үйді кірпіштен салуды ұнатқан. Себебі,
                      кірпіш суда ерімейді, суықта үгілмейді. Ол
                      күйдірілгендіктен берік болады. Қазір де кірпіш үй
                      құрылысында, өнеркәсіп құрылыстарында пайдаланылады.
                    </em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
              alignItems: "center",
              marginTop: 30,
              width: "100%",
            }}
          >
            <button
              className="button-next"
              style={{ display: "flex", alignSelf: "end" }}
              onClick={() => {
                axios
                  .get(`http://localhost:8000/user/${profileData._id}`)
                  .then((res) => {
                    if (
                      !res.data.results[0].units[unit].materials[0].completed
                    ) {
                      handleAddPoints(profileData._id);
                      dispatch(addPoint());
                      handleMakeComplete({
                        unit_name: `unit-${unit + 1}`,
                        material_id:
                          res.data.results[0].units[unit].materials[0]._id,
                      });
                    }
                  });
                navigate("/language/study/beginner/unit-7/task/1");
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

export default Unit11_Topics;
