CREATE TABLE IF NOT EXISTS snippets(sid SERIAL PRIMARY KEY, title TEXT NOT NULL, code TEXT NOT NULL, language TEXT NOT NULL, uid INT REFERENCES users(uid));

INSERT INTO snippets(title, code, language, uid) VALUES ('Fibonacci', '\ndef fib(n):\n    a = []\n    a.append(0)\n    a.append(1)\n    for i in range(n + 1):\n        a.append(a[i-1] + a[i-2])\n    return a[n]', 'python', 1);

INSERT INTO snippets(title, code, language, uid) VALUES ('Hello World', '\n#include<stdio.h>\nint main(void) {\n    printf("hello, world\\n");\n    return 0;\n}', 'c', 2);

INSERT INTO snippets(title, code, language, uid) VALUES ('Power Function', '\npower :: Float -> Int -> Float\npower n 0 = 1\npower n p | p > 0 = n * power n (p-1)\n          | p < 0 = (1/n) * power n (p+1)\n', 'haskell', 3);

INSERT INTO snippets(title, code, language, uid) VALUES ('GCD & LCM', '\n<?php\nfunction gcd(int $a, int $b): int {\n    if ($b == 0) {\n        return $a;\n    }\n    return gcd($b, $a % $b);\n}\nfunction lcm(int $a, int $b): int {\n    return ($a * $b) / gcd($a, $b);\n}', 'php', 4);