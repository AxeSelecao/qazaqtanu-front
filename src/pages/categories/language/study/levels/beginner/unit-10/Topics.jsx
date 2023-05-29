import { useParams, useNavigate } from "react-router-dom";
import {
  useGetUnitsQuery,
  useMakeCompleteMutation,
  useAddPointsMutation,
} from "../../../../../../../services/redux/API/usersAPI";
import { addPoint } from "../../../../../../../services/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Unit10_Topics({ unit }) {
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
          <p className="unit__container-description">
            {data[0].units[unit].materials[0].description[2]}
            <br />
            {data[0].units[unit].materials[0].description[3]}
          </p>

          <div style={{ textAlign: "center" }}>
            <table
              class="my_table"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="1"
            >
              <tbody>
                <tr>
                  <td colspan="6" class="main">
                    Дауысты дыбыстар түрлері
                    <br />
                    <span class="grey_text">Виды гласных звуков</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="ext_E" align="center">
                    <strong>Тілдің қатынасына қарай</strong>
                    <br />
                    <span class="grey_text">По подъему языка</span>
                  </td>
                  <td colspan="2" class="ext_E" align="center">
                    <strong>Жақтың қатынасына қарай</strong>
                    <br />
                    <span class="grey_text">По положению челюсти</span>
                  </td>
                  <td colspan="2" class="ext_E" align="center">
                    <strong>Еріннің қатынасына қарай</strong>
                    <br />
                    <span class="grey_text">По участию губ</span>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <strong>жуан</strong>
                    <br />
                    <span class="grey_text">твердые</span>
                  </td>
                  <td align="center">
                    <strong>жіңішке</strong>
                    <br />
                    <span class="grey_text">мягкие</span>
                  </td>
                  <td align="center">
                    <strong>ашық</strong>
                    <br />
                    <span class="grey_text">открытые</span>
                  </td>
                  <td align="center">
                    <strong>қысаң</strong>
                    <br />
                    <span class="grey_text">сжатые</span>
                  </td>
                  <td align="center">
                    <strong>еріндік</strong>
                    <br />
                    <span class="grey_text">губные</span>
                  </td>
                  <td align="center">
                    <strong>езулік</strong>
                    <br />
                    <span class="grey_text">неогубленные</span>
                  </td>
                </tr>
                <tr class="red_text">
                  <td align="center">
                    <strong style={{ color: "red" }}>а, о, ы, ұ, э, у</strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "red" }}>ә, ө, і, ү, е, и</strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "red" }}>а, ә, е, о, ө, э</strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "red" }}>ы, и, і, у, ұ, ү</strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "red" }}>о, ө, у, ұ, ү</strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "red" }}>
                      а, ә, е, э, ы, і, и
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <table
              class="my_table"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="1"
            >
              <tbody>
                <tr>
                  <td colspan="3" class="main">
                    Дауыссыз дыбыстар түрлері
                    <br />
                    <span class="grey_text">Виды согласных звуков</span>
                  </td>
                </tr>

                <tr>
                  <td class="ext_E" align="center">
                    <strong>Ұяң</strong>
                    <br />
                    <span class="grey_text">Звонкие</span>
                  </td>
                  <td class="ext_E" align="center">
                    <strong>Үнді</strong>
                    <br />
                    <span class="grey_text">Сонорные</span>
                  </td>
                  <td class="ext_E" align="center">
                    <strong>Қатаң</strong>
                    <br />
                    <span class="grey_text">Глухие</span>
                  </td>
                </tr>

                <tr class="blue_text">
                  <td align="center">
                    <strong style={{ color: "blue" }}>
                      б, в, г, ғ, д, ж, з, һ
                    </strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "blue" }}>
                      й, л, м, н, ң, р, у
                    </strong>
                  </td>
                  <td align="center">
                    <strong style={{ color: "blue" }}>
                      к, қ, п, с, т, ф, х, ч, ц, ш, щ
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <p
            className="unit__container-description"
            style={{ marginBottom: 5 }}
          >
            В казахском языке:
          </p>
          <ul>
            <li style={{ fontSize: 18 }}>
              букв – 42, из них 15 гласных и 25 согласных + Ъ и Ь.
            </li>
            <li style={{ fontSize: 18 }}>
              звуков – 37, из них 12 гласных и 25 согласных.
            </li>
            <li style={{ fontSize: 18 }}>
              специфических звуков – 9: ә, і, ө, ү, ұ, ң, ғ, қ, һ.
            </li>
          </ul>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Буындар (Слоги)
          </h2>
          <ul>
            <li style={{ fontSize: 20 }}>
              Ашық: <span style={{ color: "red" }}>A</span>
              <span style={{ color: "blue" }}>B</span>
              <span style={{ color: "red" }}>A</span>
            </li>
            <li style={{ fontSize: 20 }}>
              Тұйық: <span style={{ color: "red" }}>A</span>
              <span style={{ color: "blue" }}>B</span>
            </li>
            <li style={{ fontSize: 20, marginBottom: 15 }}>
              Бітеу: <span style={{ color: "blue" }}>B</span>
              <span style={{ color: "red" }}>A</span>
              <span style={{ color: "blue" }}>B</span>
            </li>
          </ul>
          <p style={{ fontSize: 20 }}>
            <span style={{ color: "red" }}>A</span> – дауысты дыбыс (гласный
            звук)
          </p>
          <p style={{ fontSize: 20 }}>
            <span style={{ color: "blue" }}>B</span> – дауыссыз дыбыс (согласный
            звук){" "}
          </p>
          <h2 className="unit__container-title" style={{ marginBottom: 0 }}>
            Мысалы (Пример фонетического разбора)
          </h2>
          <br />
          <p style={{ fontSize: 20 }}>
            Өсімдік1 — 3 буын, ө – ашық, сім – бітеу, дік – бітеу.
          </p>
          <br />
          <p style={{ fontSize: 20 }}>Ө – дауысты, ашық, еріндік, жіңішке;</p>
          <p style={{ fontSize: 20 }}>с – дауыссыз, қатаң;</p>
          <p style={{ fontSize: 20 }}>і – дауысты, қысаң, езулік, жіңішке;</p>
          <p style={{ fontSize: 20 }}>м – дауыссыз, үнді;</p>
          <p style={{ fontSize: 20 }}>д – дауыссыз, ұяң;</p>
          <p style={{ fontSize: 20 }}>і – дауысты, қысаң, езулік, жіңішке;</p>
          <p style={{ fontSize: 20 }}>к – дауыссыз, қатаң.</p>
          <br />
          <hr />
          <br />
          <p style={{ fontSize: 20 }}>Сөзде 7 әріп, 7 дыбыс бар.</p>
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

export default Unit10_Topics;
