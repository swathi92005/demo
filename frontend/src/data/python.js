export const easy = [
  {
    question: "What is the correct file extension for Python files?",
    options: [".py", ".pt", ".pyt", ".python"],
    answer: ".py"
  },
  {
    question: "Which keyword is used to create a function in Python?",
    options: ["function", "fun", "define", "def"],
    answer: "def"
  },
  {
    question: "Which of these is a valid variable name in Python?",
    options: ["2name", "name_2", "name-2", "name 2"],
    answer: "name_2"
  },
  {
    question: "What will `print(2 ** 3)` output?",
    options: ["6", "9", "8", "5"],
    answer: "8"
  },
  {
    question: "Which data type is used to store True or False?",
    options: ["int", "str", "bool", "char"],
    answer: "bool"
  }
];

export const medium = [
  {
    question: "What does the `len()` function do?",
    options: [
      "Returns the size of the file",
      "Returns the number of elements",
      "Returns the last index",
      "Returns the data type"
    ],
    answer: "Returns the number of elements"
  },
  {
    question: "What is the output of `print('5' + '6')`?",
    options: ["11", "56", "Error", "None"],
    answer: "56"
  },
  {
    question: "Which of the following is **not** a keyword in Python?",
    options: ["pass", "eval", "raise", "assert"],
    answer: "eval"
  },
  {
    question: "Which statement is used to handle exceptions?",
    options: ["try/except", "do/catch", "check/error", "test/fail"],
    answer: "try/except"
  },
  {
    question: "Which collection is ordered and **immutable**?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: "Tuple"
  }
];

export const hard = [
  {
    question: "What will be the output of:\n\n```python\nx = [1, 2, 3]\nprint(x[::-1])\n```",
    options: ["[3, 2, 1]", "[1, 2, 3]", "Error", "[1, 3, 2]"],
    answer: "[3, 2, 1]"
  },
  {
    question: "What does the `@staticmethod` decorator do?",
    options: [
      "Defines a method that can’t access class or instance variables",
      "Creates a class variable",
      "Creates a property",
      "Makes a method private"
    ],
    answer: "Defines a method that can’t access class or instance variables"
  },
  {
    question: "Which module is used for regular expressions in Python?",
    options: ["regex", "re", "pyre", "match"],
    answer: "re"
  },
  {
    question: "What will be the output of:\n\n```python\nprint(bool('False'))\n```",
    options: ["True", "False", "None", "Error"],
    answer: "True"
  },
  {
    question: "What is the output of:\n\n```python\nprint(0.1 + 0.2 == 0.3)\n```",
    options: ["True", "False", "0.3", "Error"],
    answer: "False"
  }
];
