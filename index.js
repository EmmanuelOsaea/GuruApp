no
import _ from "lodash";
import fs from "fs";

// Load baseline features data
const data = JSON.parse(fs.readFileSync("./features.json", "utf-8"));

// ✅ Group features by status
const grouped = _.groupBy(data, "status");

// ✅ Sort features by year
const sorted = _.sortBy(data, "year");

// ✅ Get unique years
const years = _.uniq(data.map(f => f.year));

console.log("Grouped by Status:\n", grouped);
console.log("\nSorted by Year:\n", sorted);
console.log("\nUnique Years:\n", years);



import { features } from "web-features/data.json";
// Or sometimes simply: import data from "web-features" (which exports features collection)

console.log(features); // an array of feature objects with Baseline status, support info, etc.
