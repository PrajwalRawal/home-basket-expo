import useSocialAuth from "@/hooks/useSocialAuth";
import { AuthView } from "@clerk/expo/native";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  return <AuthView mode="signInOrUp" isDismissible={false} />;
}
