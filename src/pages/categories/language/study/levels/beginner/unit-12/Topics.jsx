import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit12_Topics({ unit }) {
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
                  <td class="main">Падеж</td>
                  <td class="main">Септік</td>
                  <td class="main">Сұрақтар (вопросы)</td>
                  <td class="main">Жалғаулар (окончания)</td>
                  <td class="main">Мысал (пример)</td>
                </tr>

                <tr>
                  <td>Именительный</td>
                  <td>
                    <b>Атау</b>
                  </td>
                  <td>
                    <b>кiм?</b> (кто?), <b>не?</b> (что?)
                  </td>
                  <td>
                    <b>Жалғауы жоқ (Нет окончания)</b>
                  </td>
                  <td>
                    <em>мектеп (школа)</em>
                  </td>
                </tr>

                <tr>
                  <td class="ext_E">Родительный</td>
                  <td class="ext_E">
                    <b>Ілік</b>
                  </td>
                  <td class="ext_E">
                    <b>кiмнiң?</b> (кого?), <b>ненiң?</b> (чего?)
                  </td>
                  <td class="ext_E">
                    <b>-ның/–нің, -дың/-дің, -тың/-тің</b>
                  </td>
                  <td class="ext_E">
                    <em>
                      мектеп<strong>тің</strong> (школы)
                    </em>
                  </td>
                </tr>

                <tr>
                  <td>Дательный</td>
                  <td>
                    <b>Барыс</b>
                  </td>
                  <td>
                    <b>кiмге?</b> (кому?), <b>неге?</b> (чему?), <b>қайда?</b>{" "}
                    (куда?)
                  </td>
                  <td>
                    <b>-ға/-ге, -қа/-ке, -на/-не, -а/-е</b>
                  </td>
                  <td>
                    <em>
                      мектеп<strong>ке</strong> (школе, в школу)
                    </em>
                  </td>
                </tr>

                <tr>
                  <td class="ext_E">Винительный</td>
                  <td class="ext_E">
                    <b>Табыс</b>
                  </td>
                  <td class="ext_E">
                    <b>кiмдi?</b> (кого?), <b>ненi?</b> (что?)
                  </td>
                  <td class="ext_E">
                    <b>-ды/-ді, -ты/-ті, -ны/-ні, -н</b>
                  </td>
                  <td class="ext_E">
                    <em>
                      мектеп<strong>ті</strong> (школу)
                    </em>
                  </td>
                </tr>

                <tr>
                  <td>Местный</td>
                  <td>
                    <b>Жатыс</b>
                  </td>
                  <td>
                    <b>кiмде?</b> (у кого?), <b>неде?</b> (на чём? в чём?),{" "}
                    <b>қайда?</b> (где?), <b>қашан?</b> (когда?)
                  </td>
                  <td>
                    <b>-да/-де, -та/-те, -нда/-нде</b>
                  </td>
                  <td>
                    <em>
                      мектеп<strong>те</strong> (в школе)
                    </em>
                  </td>
                </tr>

                <tr>
                  <td class="ext_E">Исходный</td>
                  <td class="ext_E">
                    <b>Шығыс</b>
                  </td>
                  <td class="ext_E">
                    <b>кiмнен?</b> (от кого?), <b>неден?</b> (от чего?),{" "}
                    <b>қайдан?</b> (от куда?)
                  </td>
                  <td class="ext_E">
                    <b>-дан/-ден, -тан/-тен, -нан/-нен</b>
                  </td>
                  <td class="ext_E">
                    <em>
                      мектеп<strong>тен</strong> (из школы)
                    </em>
                  </td>
                </tr>

                <tr>
                  <td>Творительный</td>
                  <td>
                    <b>Көмектес</b>
                  </td>
                  <td>
                    <b>кiммен?</b> (с кем?), <b>немен?</b> (с чем?)
                  </td>
                  <td>
                    <b>-мен, -бен, -пен</b>
                  </td>
                  <td>
                    <em>
                      мектеп<strong>пен</strong> (школой)
                    </em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p
            className="unit__container-description"
            style={{ marginBottom: 5 }}
          >
            Пример разбора по падежам:
          </p>
          <p
            className="unit__container-description"
            style={{ marginBottom: 5 }}
          >
            Ит сөзі (Слово собака)
          </p>
          <ul>
            <li style={{ fontSize: 18 }}>А.с. (не?) ит. Ит - ең жақсы дос!</li>
            <li style={{ fontSize: 18 }}>
              І.с. (ненің?) иттің. Иттің ойыншығы еденде жатты.
            </li>
            <li style={{ fontSize: 18 }}>
              Б.с. (неге?) итке. Мен итке сүтті бердім.
            </li>
            <li style={{ fontSize: 18 }}>
              Т.с. (нені?) итті. Алексей көршілестік итті жақсы көреді.
            </li>
            <li style={{ fontSize: 18 }}>
              Ж.с. (неде?) итте. Итте әдемі бір шүйке жіп бар.
            </li>
            <li style={{ fontSize: 18 }}>
              Ш.с. (неден?) иттен. Мысық ашуын иттен алады.
            </li>
            <li style={{ fontSize: 18 }}>
              К.с. (немен?) итпен. Ол итпен ойнайды.
            </li>
          </ul>
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

export default Unit12_Topics;
