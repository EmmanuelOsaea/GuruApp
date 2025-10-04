import _ from "lodash";
import fs from "fs";

// Load baseline features data
const data = JSON.parse(fs.readFileSync("./features.json", "utf-8"));

// ✅ Group features by status
const grouped = _.groupBy(data, "status");

// ✅ Get unique feature names
const uniqueFeatures = _.uniqBy(data, "name");

// ✅ Display summary
console.log("Grouped by Status:\n", grouped);
console.log("\nUnique Features:\n", uniqueFeatures);
console.log("\n✅ Guruapp Baseline analysis complete.");
