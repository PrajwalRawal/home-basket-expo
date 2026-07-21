import UserProfile from "@/components/insights/UserProfile";
import TabScreenBackground from "@/components/TabScreenBackground";
import { ScrollView } from "react-native";

const InsightsScreen = () => {
  return (
    <>
      <ScrollView
        className="flex-1 bg-background py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, gap: 14 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TabScreenBackground />

        <UserProfile />
      </ScrollView>
    </>
  );
};

export default InsightsScreen;
