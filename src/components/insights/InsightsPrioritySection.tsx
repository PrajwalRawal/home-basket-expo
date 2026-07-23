import { useGroceryStore } from "@/store/grocery-store";
import { Text, View } from "react-native";

const InsightsPrioritySection = () => {
  const { items } = useGroceryStore();

  const highPriorityNum = items.filter(
    (item) => item.priority === "high" && !item.purchased,
  ).length;
  const highPriorityTone =
    highPriorityNum === 0
      ? "Everything critical is covered."
      : "Handle these first for a smoother trip.";

  return (
    <View className="rounded-3xl border border-border bg-card p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-foreground">
          High Priority Remaining
        </Text>

        <View
          className={`rounded-full px-3 py-1 ${highPriorityNum ? "bg-priority-high" : "bg-priority-low"}`}
        >
          <Text
            className={`text-xs font-bold uppercase ${highPriorityNum ? "text-priority-high-foreground" : "text-priority-low-foreground"}`}
          >
            {highPriorityNum ? "Action" : "Clear"}
          </Text>
        </View>
      </View>

      <Text className="mt-1 text-3xl font-extrabold text-foreground">
        {highPriorityNum}
      </Text>
      <Text className="mt-1 text-sm text-muted-foreground">
        {highPriorityTone}
      </Text>
    </View>
  );
};

export default InsightsPrioritySection;
