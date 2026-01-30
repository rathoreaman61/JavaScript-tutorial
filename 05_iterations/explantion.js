// ===============================
// JAVASCRIPT LOOPS - ALL TYPES
// (ONLY CODE + COMMENTS FOR NOTES)
// ===============================


// ---------- 1. FOR LOOP (ARRAY / FIXED TIMES) ----------

let arr1 = [10, 20, 30];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); // array ke har element ko print karta hai
}


// ---------- 2. WHILE LOOP (ARRAY / CONDITION BASED) ----------

let arr2 = [10, 20, 30];
let i = 0;

while (i < arr2.length) {
  console.log(arr2[i]); // jab tak condition true hai loop chalta rahega
  i++;
}


// ---------- 3. DO WHILE LOOP (AT LEAST 1 TIME) ----------

let j = 5;

do {
  console.log(j); // condition false hone par bhi 1 baar chalega
  j++;
} while (j < 3);


// ---------- 4. FOR...OF LOOP (ARRAY / VALUES) ----------

let arr3 = [10, 20, 30];

for (let value of arr3) {
  console.log(value); // direct value deta hai
}


// ---------- 5. FOR...IN LOOP (ARRAY INDEX / OBJECT KEY) ----------

// Array ke liye (index deta hai)
let arr4 = [10, 20, 30];

for (let index in arr4) {
  console.log(index, arr4[index]); // index + value
}

// Object ke liye (BEST)
let user = {
  name: "Amit",
  age: 25
};

for (let key in user) {
  console.log(key, user[key]); // object ki key aur value
}


// ---------- 6. forEach() (ARRAY ONLY) ----------

let arr5 = [1, 2, 3];

arr5.forEach((value, index) => {
  console.log(index, value); // har element par function run hota hai
});


// ---------- 7. map() (ARRAY → NEW ARRAY) ----------

let nums1 = [1, 2, 3];

let doubled = nums1.map(n => {
  return n * 2; // naya transformed array banata hai
});

console.log(doubled);


// ---------- 8. filter() (ARRAY → CONDITION BASED ARRAY) ----------

let nums2 = [5, 10, 15];

let filtered = nums2.filter(n => {
  return n > 5; // sirf condition true wale elements
});

console.log(filtered);


// ---------- 9. OBJECT KE MODERN LOOPS ----------

// Object.keys() → keys
Object.keys(user).forEach(key => {
  console.log(key); // sirf keys
});

// Object.values() → values
for (let value of Object.values(user)) {
  console.log(value); // sirf values
}

// Object.entries() → key + value
for (let [key, value] of Object.entries(user)) {
  console.log(key, value); // key-value pair
}


// ---------- QUICK RULE ----------

// Array  -> for, while, for...of, forEach, map, filter
// Object -> for...in, Object.keys(), Object.values(), Object.entries()
