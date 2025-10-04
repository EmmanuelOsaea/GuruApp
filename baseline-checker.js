import _ from "lodash";
import features from "./features.json" assert { type: "json" };

export function checkBaseline(featureName) {
  const feature = _.find(features, { name: featureName });
  if (!feature) return `❌ Feature "${featureName}" not found in Baseline data`;

  if (feature.baseline && feature.baseline.status === "high") {
    return `✅ "${featureName}" meets Baseline standards`;
  } else {
    return `⚠️ "${featureName}" does NOT fully meet Baseline standards`;
  }
}
