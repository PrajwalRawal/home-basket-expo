import { useGroceryStore } from "@/store/grocery-store";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { Text, View } from "react-native";

const InsightsStatsSection = () => {
  const { items } = useGroceryStore();

  const totalItemsNum = items.length;
  const completedItemsNum = items.filter((item) => item.purchased).length;
  const pendingItemsNum = totalItemsNum - completedItemsNum;

  const completionRate = totalItemsNum
    ? Math.round((completedItemsNum / totalItemsNum) * 100)
    : 0;

  return (
    <>
      <View className="flex-row gap-2">
        <View className="flex-1 rounded-3xl border border-border bg-card p-4">
          <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <FontAwesome6 name="clock" size={18} color="#ffffff" />
          </View>

          <Text className="mt-3 text-xs uppercase tracking-[1px] text-muted-foreground">
            Pending
          </Text>
          <Text className="mt-1 text-3xl font-extrabold text-foreground">
            {pendingItemsNum}
          </Text>
        </View>

        <View className="flex-1 rounded-3xl border border-border bg-card p-4">
          <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <FontAwesome6
              name="check"
              iconStyle="solid"
              size={18}
              color="#ffffff"
            />
          </View>

          <Text className="mt-3 text-xs uppercase tracking-[1px] text-muted-foreground">
            Completed
          </Text>
          <Text className="mt-1 text-3xl font-extrabold text-foreground">
            {completedItemsNum}
          </Text>
        </View>

        <View className="flex-1 rounded-3xl border border-border bg-card p-4">
          <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <FontAwesome6
              name="layer-group"
              iconStyle="solid"
              size={18}
              color="#ffffff"
            />
          </View>

          <Text className="mt-3 text-xs uppercase tracking-[1px] text-muted-foreground">
            Total
          </Text>
          <Text className="mt-1 text-3xl font-extrabold text-foreground">
            {totalItemsNum}
          </Text>
        </View>
      </View>

      <View className="rounded-3xl border border-border bg-card p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-semibold text-foreground">
            Completion Rate
          </Text>
          <Text className="text-sm font-semibold text-primary">
            {completionRate}%
          </Text>
        </View>

        <View className="mt-3 overflow-hidden rounded-full bg-secondray">
          <View
            className="h-3 rounded-full bg-ring"
            style={{ width: `${Math.max(2, completionRate)}%` }}
          />
        </View>
      </View>
    </>
  );
};

export default InsightsStatsSection;
