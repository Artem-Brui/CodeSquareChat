import { Link, useNavigate } from "react-router-dom";
import useUserData from "../../customHooks/useUserData";
import CloseButton from "./CloseButton";
import { SERVER_HOST } from "../../services/Hosts";

export default function BurgerMenu() {
  const { updateTokenVerify, updateColorMode } = useUserData();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const handleLogOutClick = async () => {
    try {
      const DBResponse = await fetch(`${SERVER_HOST}/users/${userId}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!DBResponse.ok) {
        console.error(new Error("LogOut wasn't sucessfull!"))
      }

      localStorage.setItem("userId", "");
      updateTokenVerify(false);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="burger-menu">
      <CloseButton />

      <div className="burger-menu-mobile">
        <div className="burger-button">
          <Link to="/dashboard">
            <button className="burger-menu-buttons rooms-button">
              <div className="svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5rem"
                  height="5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-9h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
                  />
                </svg>
              </div>
              <div className="burger-button-name">
                <h2>Dashboard</h2>
              </div>
            </button>
          </Link>
        </div>

        <div className="burger-button">
          <button
            onClick={updateColorMode}
            className="burger-menu-buttons dark-light-button"
          >
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <defs>
                  <mask id="lineMdLightDark0">
                    <circle cx="7.5" cy="7.5" r="5.5" fill="#fff" />
                    <circle cx="7.5" cy="7.5" r="5.5">
                      <animate
                        fill="freeze"
                        attributeName="cx"
                        dur="0.4s"
                        values="7.5;11"
                      />
                      <animate
                        fill="freeze"
                        attributeName="r"
                        dur="0.4s"
                        values="5.5;6.5"
                      />
                    </circle>
                  </mask>
                  <mask id="lineMdLightDark1">
                    <g fill="#fff">
                      <circle cx="12" cy="9" r="5.5">
                        <animate
                          fill="freeze"
                          attributeName="cy"
                          begin="1s"
                          dur="0.5s"
                          values="9;15"
                        />
                      </circle>
                      <g fillOpacity="0">
                        <use
                          href="#lineMdLightDark2"
                          transform="rotate(-75 12 15)"
                        />
                        <use
                          href="#lineMdLightDark2"
                          transform="rotate(-25 12 15)"
                        />
                        <use
                          href="#lineMdLightDark2"
                          transform="rotate(25 12 15)"
                        />
                        <use
                          href="#lineMdLightDark2"
                          transform="rotate(75 12 15)"
                        />
                        <set
                          fill="freeze"
                          attributeName="fill-opacity"
                          begin="1.5s"
                          to="1"
                        />
                      </g>
                    </g>
                    <path d="M0 10h26v5h-26z" />
                    <path
                      stroke="#fff"
                      strokeDasharray="26"
                      strokeDashoffset="26"
                      strokeWidth="2"
                      d="M23 12h-22"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.4s"
                        values="26;0"
                      />
                    </path>
                  </mask>
                  <symbol id="lineMdLightDark2">
                    <path d="M11 18h2L12 20z" opacity="0">
                      <animate
                        fill="freeze"
                        attributeName="d"
                        begin="1.5s"
                        dur="0.4s"
                        values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"
                      />
                      <set
                        fill="freeze"
                        attributeName="opacity"
                        begin="1.5s"
                        to="1"
                      />
                    </path>
                  </symbol>
                </defs>
                <g fill="#fff">
                  <rect
                    width="13"
                    height="13"
                    x="1"
                    y="1"
                    mask="url(#lineMdLightDark0)"
                  />
                  <path
                    d="M-2 11h28v13h-28z"
                    mask="url(#lineMdLightDark1)"
                    transform="rotate(-45 12 12)"
                  />
                </g>
              </svg>
            </div>
            <div className="burger-button-name">
              <h2>Dark/Light</h2>
            </div>
          </button>
        </div>

        <div className="burger-button">
          <Link to="/user-profile">
            <button className="burger-menu-buttons log-out-button">
              <div className="svg-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5rem"
                  height="5rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                    <path d="M11.975 1.25c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.145.35-.184.72-.2 1.122a.87.87 0 0 1-.415.731a.87.87 0 0 1-.841-.005c-.356-.188-.696-.339-1.072-.389a2.75 2.75 0 0 0-2.033.545a2.8 2.8 0 0 0-.617.691c-.17.254-.356.575-.578.96l-.025.044c-.223.385-.408.706-.542.98c-.14.286-.25.568-.29.88a2.75 2.75 0 0 0 .544 2.033c.231.301.532.52.872.734a.87.87 0 0 1 .426.726a.87.87 0 0 1-.426.726c-.34.214-.64.433-.872.734a2.75 2.75 0 0 0-.545 2.033c.041.312.15.594.29.88c.135.274.32.595.543.98l.025.044c.222.385.408.706.578.96c.177.263.367.5.617.69a2.75 2.75 0 0 0 2.033.546c.376-.05.716-.2 1.072-.389a.87.87 0 0 1 .84-.005a.86.86 0 0 1 .417.731c.015.402.054.772.2 1.122a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.318-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.145-.35.184-.72.2-1.122a.87.87 0 0 1 .415-.732a.87.87 0 0 1 .841.006c.356.188.696.339 1.072.388a2.75 2.75 0 0 0 2.033-.544c.25-.192.44-.428.617-.691c.17-.254.356-.575.578-.96l.025-.044c.223-.385.408-.706.542-.98c.14-.286.25-.569.29-.88a2.75 2.75 0 0 0-.544-2.033c-.231-.301-.532-.52-.872-.734a.87.87 0 0 1-.426-.726c0-.278.152-.554.426-.726c.34-.214.64-.433.872-.734a2.75 2.75 0 0 0 .545-2.033a2.8 2.8 0 0 0-.29-.88a18 18 0 0 0-.543-.98l-.025-.044a18 18 0 0 0-.578-.96a2.8 2.8 0 0 0-.617-.69a2.75 2.75 0 0 0-2.033-.546c-.376.05-.716.2-1.072.389a.87.87 0 0 1-.84.005a.87.87 0 0 1-.417-.731c-.015-.402-.054-.772-.2-1.122a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.04.096.073.247.086.604c.03.792.439 1.555 1.165 1.974s1.591.392 2.292.022c.316-.167.463-.214.567-.227a1.25 1.25 0 0 1 .924.247c.066.051.15.138.285.338c.139.206.299.483.537.895s.397.69.506.912c.107.217.14.333.15.416a1.25 1.25 0 0 1-.247.924c-.064.083-.178.187-.48.377c-.672.422-1.128 1.158-1.128 1.996s.456 1.574 1.128 1.996c.302.19.416.294.48.377c.202.263.29.595.247.924c-.01.083-.044.2-.15.416c-.109.223-.268.5-.506.912s-.399.689-.537.895c-.135.2-.219.287-.285.338a1.25 1.25 0 0 1-.924.247c-.104-.013-.25-.06-.567-.227c-.7-.37-1.566-.398-2.292.021s-1.135 1.183-1.165 1.975c-.013.357-.046.508-.086.604a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.04-.096-.073-.247-.086-.604c-.03-.792-.439-1.555-1.165-1.974s-1.591-.392-2.292-.022c-.316.167-.463.214-.567.227a1.25 1.25 0 0 1-.924-.247c-.066-.051-.15-.138-.285-.338a17 17 0 0 1-.537-.895c-.238-.412-.397-.69-.506-.912c-.107-.217-.14-.333-.15-.416a1.25 1.25 0 0 1 .247-.924c.064-.083.178-.187.48-.377c.672-.422 1.128-1.158 1.128-1.996s-.456-1.574-1.128-1.996c-.302-.19-.416-.294-.48-.377a1.25 1.25 0 0 1-.247-.924c.01-.083.044-.2.15-.416c.109-.223.268-.5.506-.912s.399-.689.537-.895c.135-.2.219-.287.285-.338a1.25 1.25 0 0 1 .924-.247c.104.013.25.06.567.227c.7.37 1.566.398 2.292-.022c.726-.419 1.135-1.182 1.165-1.974c.013-.357.046-.508.086-.604c.127-.307.37-.55.677-.677" />
                  </g>
                </svg>
              </div>

              <div className="burger-button-name">
                <h2>Profile Settings</h2>
              </div>
            </button>
          </Link>
        </div>

        <div className="burger-button">
          <button className="burger-menu-buttons log-out-button" onClick={handleLogOutClick}>
            <div className="svg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinejoin="round"
                    d="M10 12h10m0 0l-3-3m3 3l-3 3"
                  />
                  <path d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3" />
                </g>
              </svg>
            </div>
            <div className="burger-button-name">
              <h2>Log Out</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
