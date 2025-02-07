import useTheme from "../../../customHooks/useTheme";


export default function SignUpTitle() {
  const { colorMode } = useTheme();
  
  return <h1 className={`create-h1 ${colorMode}`}>Choose an avatar and create your profile</h1>;
}
