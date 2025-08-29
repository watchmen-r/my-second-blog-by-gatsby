---
title: Code Contest example contest codes
date: "2025-08-27T21:26:32.169Z"
description: This page has example answer codes for Code Contest app's example contest, including Java, Python, JavaScript, and TypeScript.
featuredImage: ./laptop.png
---

For participants, thank you for your support to try Code Contest. Here is example answers.

[(Example) Algorithm Masters Tournament](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v)

# Find Maximum Number
[(Example) Find Maximum Number](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609349_ko5nb6uzq)

### Java
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (num > max) {
                max = num;
            }
        }
        System.out.println(max);
    }
}
```

### Python
```Python
import sys

data = list(map(int, sys.stdin.read().split()))
n = data[0]
arr = data[1:]
print(max(arr))
```

### JavaScript
```JavaScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1, n + 1);
console.log(Math.max(...arr));
```

### TypeScript
```TypeScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1, n + 1);
console.log(Math.max(...arr));
```

# Sum of Two Numbers
[(Example) Find Maximum Number](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609201_io4n6c8gz)

### Java
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt() + sc.nextInt();

        System.out.println(n);
    }
}
```

### Python
```Python
a = int(input())
b = int(input())
print(a + b)
```

### JavaScript
```JavaScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a = input[0];
const b = input[1];
console.log(a + b);
```

### TypeScript
```TypeScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a = input[0];
const b = input[1];
console.log(a + b);
```

# Two Sum
[(Example) Two Sum](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609604_m2k1ejsht)

### Java
```Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int target = sc.nextInt();

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                System.out.println(map.get(complement) + " " + i);
                return;
            }
            map.put(nums[i], i);
        }
    }
}
```

### Python
```Python
n = int(input())
nums = list(map(int, input().split()))
target = int(input())

seen = {}
for i, num in enumerate(nums):
    complement = target - num
    if complement in seen:
        print(seen[complement], i)
        break
    seen[num] = i
```

### JavaScript
```JavaScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const nums = [];
for (let i = 0; i < n; i++) nums.push(input[idx++]);
const target = input[idx++];

const map = new Map();
for (let i = 0; i < n; i++) {
  const complement = target - nums[i];
  if (map.has(complement)) {
    console.log(map.get(complement), i);
    break;
  }
  map.set(nums[i], i);
}
```

### TypeScript
```TypeScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const nums: number[] = [];
for (let i = 0; i < n; i++) nums.push(input[idx++]);
const target = input[idx++];

const map = new Map<number, number>();
for (let i = 0; i < n; i++) {
  const complement = target - nums[i];
  if (map.has(complement)) {
    console.log(map.get(complement), i);
    break;
  }
  map.set(nums[i], i);
}
```

# Palindrome Checker
[Palindrome Checker](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609468_wwqsdd1ci)

```Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                sb.append(Character.toLowerCase(c));
            }
        }

        String filtered = sb.toString();
        String reversed = sb.reverse().toString();

        if (filtered.equals(reversed)) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}
```

### Python
```Python
import re

s = input().strip()
filtered = re.sub(r'[^a-zA-Z0-9]', '', s).lower()

if filtered == filtered[::-1]:
    print("YES")
else:
    print("NO")
```

### JavaScript
```JavaScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const filtered = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const reversed = filtered.split("").reverse().join("");

if (filtered === reversed) {
  console.log("YES");
} else {
  console.log("NO");
}
```

### TypeScript
```TypeScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const filtered = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const reversed = filtered.split("").reverse().join("");

if (filtered === reversed) {
  console.log("YES");
} else {
  console.log("NO");
}
```

# Merge K Sorted Lists
[(Example) Merge K Sorted Lists](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609840_l1vxvzff8)


### Java
```Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) {
            System.out.println();
            return;
        }

        int k = sc.nextInt();
        List<int[]> lists = new ArrayList<>(k);

        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            lists.add(arr);
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        for (int i = 0; i < k; i++) {
            int[] arr = lists.get(i);
            if (arr.length > 0) pq.add(new int[]{arr[0], i, 0});
        }

        StringBuilder sb = new StringBuilder();
        while (!pq.isEmpty()) {
            int[] it = pq.poll();
            sb.append(it[0]).append(' ');
            int li = it[1], idx = it[2] + 1;
            int[] arr = lists.get(li);
            if (idx < arr.length) pq.add(new int[]{arr[idx], li, idx});
        }

        if (sb.length() > 0) {
            sb.setLength(sb.length() - 1);
            System.out.println(sb.toString());
        } else {
            System.out.println();
        }
    }
}
```

### Python
```Python
import sys, heapq

data = list(map(int, sys.stdin.read().split()))
it = iter(data)
k = next(it)

lists = []
for _ in range(k):
    n = next(it)
    arr = [next(it) for _ in range(n)]
    lists.append(arr)

heap = []
for i, arr in enumerate(lists):
    if arr:
        heapq.heappush(heap, (arr[0], i, 0))

out = []
while heap:
    val, li, ei = heapq.heappop(heap)
    out.append(str(val))
    ei += 1
    if ei < len(lists[li]):
        heapq.heappush(heap, (lists[li][ei], li, ei))

print(" ".join(out))
```

### JavaScript
```JavaScript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const k = input[idx++];

const lists = [];
for (let i = 0; i < k; i++) {
  const n = input[idx++];
  const arr = input.slice(idx, idx + n);
  idx += n;
  lists.push(arr);
}

class MinHeap {
  constructor() { this.h = []; }
  size() { return this.h.length; }
  push(x) { this.h.push(x); this._up(this.h.length - 1); }
  pop() {
    const n = this.h.length;
    if (!n) return undefined;
    const top = this.h[0];
    const last = this.h.pop();
    if (n > 1) { this.h[0] = last; this._down(0); }
    return top;
  }
  _less(i, j) { return this.h[i][0] < this.h[j][0]; }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this._less(i, p)) break;
      [this.h[i], this.h[p]] = [this.h[p], this.h[i]];
      i = p;
    }
  }
  _down(i) {
    const n = this.h.length;
    while (true) {
      let l = i * 2 + 1, r = l + 1, s = i;
      if (l < n && this._less(l, s)) s = l;
      if (r < n && this._less(r, s)) s = r;
      if (s === i) break;
      [this.h[i], this.h[s]] = [this.h[s], this.h[i]];
      i = s;
    }
  }
}

const heap = new MinHeap();
for (let i = 0; i < k; i++) if (lists[i].length) heap.push([lists[i][0], i, 0]);

const out = [];
while (heap.size()) {
  const [v, li, ei] = heap.pop();
  out.push(v);
  const ne = ei + 1;
  if (ne < lists[li].length) heap.push([lists[li][ne], li, ne]);
}

console.log(out.join(" "));
```

### TypeScript
```TypeScript
const fs = require("fs");
const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const k = input[idx++];

const lists: number[][] = [];
for (let i = 0; i < k; i++) {
  const n = input[idx++];
  const arr = input.slice(idx, idx + n);
  idx += n;
  lists.push(arr);
}

class MinHeap {
  private h: [number, number, number][] = [];
  size() { return this.h.length; }
  push(x: [number, number, number]) { this.h.push(x); this.up(this.h.length - 1); }
  pop(): [number, number, number] | undefined {
    const n = this.h.length;
    if (!n) return undefined;
    const top = this.h[0];
    const last = this.h.pop()!;
    if (n > 1) { this.h[0] = last; this.down(0); }
    return top;
  }
  private less(i: number, j: number) { return this.h[i][0] < this.h[j][0]; }
  private up(i: number) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.less(i, p)) break;
      [this.h[i], this.h[p]] = [this.h[p], this.h[i]];
      i = p;
    }
  }
  private down(i: number) {
    const n = this.h.length;
    while (true) {
      let l = i * 2 + 1, r = l + 1, s = i;
      if (l < n && this.less(l, s)) s = l;
      if (r < n && this.less(r, s)) s = r;
      if (s === i) break;
      [this.h[i], this.h[s]] = [this.h[s], this.h[i]];
      i = s;
    }
  }
}

const heap = new MinHeap();
for (let i = 0; i < k; i++) if (lists[i].length) heap.push([lists[i][0], i, 0]);

const out: number[] = [];
while (heap.size()) {
  const [v, li, ei] = heap.pop()!;
  out.push(v);
  const ne = ei + 1;
  if (ne < lists[li].length) heap.push([lists[li][ne], li, ne]);
}

console.log(out.join(" "));

```

# Longest Substring Without Repeating Characters
[(Example) Longest Substring Without Repeating Characters](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/problem_1756123609715_clcbwfbwu)


### Java
```Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        
        int max = 0;
        Map<Character, Integer> map = new HashMap<>();
        int slow = 0;
        int fast = 0;

        while (fast < s.length()) {
            if (!map.containsKey(s.charAt(fast))) {
                max = Math.max(fast - slow + 1, max);
                map.put(s.charAt(fast), fast);
                fast++;
                continue;
            }

            int target = map.get(s.charAt(fast));
            while (slow <= target) {
                map.remove(s.charAt(slow));
                
                slow++;
            }
            map.put(s.charAt(fast), fast);
            fast++;
        }

        System.out.println(max);
        sc.close();
    }
}
```

### Python
```Python
import sys

s = sys.stdin.readline()
if not s:
    s = ""
else:
    s = s.rstrip("\n").rstrip("\r")

last = {}
left = 0
ans = 0

for right, ch in enumerate(s):
    if ch in last and last[ch] >= left:
        left = last[ch] + 1
    last[ch] = right
    ans = max(ans, right - left + 1)

print(ans)
```

### JavaScript
```JavaScript
const fs = require("fs");
const raw = fs.readFileSync(0, "utf8");
const s = (raw.split(/\r?\n/)[0] ?? "");

const last = new Map();
let left = 0, ans = 0;

for (let right = 0; right < s.length; right++) {
  const ch = s[right];
  const prev = last.get(ch);
  if (prev !== undefined && prev >= left) left = prev + 1;
  last.set(ch, right);
  if (right - left + 1 > ans) ans = right - left + 1;
}

console.log(ans);

```

### TypeScript
```TypeScript
const fs = require("fs");
const raw: string = fs.readFileSync(0, "utf8");
const s: string = raw.split(/\r?\n/)[0] ?? ""; // keep spaces/symbols

const last = new Map<string, number>();
let left = 0, ans = 0;

for (let right = 0; right < s.length; right++) {
  const ch = s[right];
  const prev = last.get(ch);
  if (prev !== undefined && prev >= left) left = prev + 1;
  last.set(ch, right);
  if (right - left + 1 > ans) ans = right - left + 1;
}

console.log(ans);

```

# Fibonacci Number
[(Timeout test)Fibonacci Number](https://codecontest-frontend.vercel.app/contest/contest_1756125385236_gcy6vb39v/problem/3eccf50d-4b7b-4aa3-be4a-8c7ae7563bb8)


### Java (correct answer)
```Java
import java.util.*;

public class Main {
    static long[] memo;

    static long fib(int n) {
        if (n <= 1) return n;

        if (memo[n] != -1) return memo[n];

        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        memo = new long[n + 1];
        Arrays.fill(memo, -1);

        long ans = fib(n);
        System.out.println(ans);
    }
}
```

### Java (TLE)
```Java
import java.util.*;

public class Main {
    static long fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();

        long ans = fib(n);
        System.out.println(ans);

    }
}
```