export const easy = [
  {
    question: "What is the order of a 2 × 3 matrix?",
    options: ["2 rows and 3 columns", "3 rows and 2 columns", "2 elements", "3 elements"],
    answer: "2 rows and 3 columns"
  },
  {
    question: "What is the result of adding two 2×2 matrices?",
    options: ["A 2×2 matrix", "A scalar", "A 4×4 matrix", "Not defined"],
    answer: "A 2×2 matrix"
  },
  {
    question: "Which element is at position (2,1) in a 2×2 matrix?",
    options: ["2nd row, 1st column", "1st row, 2nd column", "2nd column, 1st row", "1st row, 1st column"],
    answer: "2nd row, 1st column"
  },
  {
    question: "What is the identity matrix of size 2×2?",
    options: ["[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]"],
    answer: "[[1, 0], [0, 1]]"
  },
  {
    question: "Matrix multiplication is possible only when:",
    options: ["Columns of first = Rows of second", "Rows are equal", "Columns are equal", "Matrices are square"],
    answer: "Columns of first = Rows of second"
  }
];

export const medium = [
  {
    question: "What is the transpose of matrix [[1,2],[3,4]]?",
    options: ["[[1,3],[2,4]]", "[[4,3],[2,1]]", "[[2,1],[4,3]]", "[[1,2],[3,4]]"],
    answer: "[[1,3],[2,4]]"
  },
  {
    question: "What is the determinant of [[2, 3], [1, 4]]?",
    options: ["5", "7", "8", "2"],
    answer: "5"
  },
  {
    question: "What is the result of multiplying [[1, 2], [3, 4]] with scalar 2?",
    options: ["[[2, 4], [6, 8]]", "[[3, 5], [7, 9]]", "[[1, 2], [3, 4]]", "None"],
    answer: "[[2, 4], [6, 8]]"
  },
  {
    question: "Which matrix has no inverse?",
    options: ["Singular matrix", "Identity matrix", "Diagonal matrix", "Symmetric matrix"],
    answer: "Singular matrix"
  },
  {
    question: "If A = [[1, 0], [0, 1]], what is A × A?",
    options: ["[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]", "[[2, 0], [0, 2]]", "[[1, 1], [1, 1]]"],
    answer: "[[1, 0], [0, 1]]"
  }
];

export const hard = [
  {
    question: "Find the inverse of [[1, 2], [3, 4]]",
    options: [
      "[[-2, 1], [1.5, -0.5]]",
      "[[4, -2], [-3, 1]]",
      "[[1, -2], [3, -4]]",
      "Not defined"
    ],
    answer: "[[-2, 1], [1.5, -0.5]]"
  },
  {
    question: "If A and B are matrices, then (A + B)ᵗ = ?",
    options: ["Aᵗ + Bᵗ", "A + B", "Aᵗ - Bᵗ", "Bᵗ - Aᵗ"],
    answer: "Aᵗ + Bᵗ"
  },
  {
    question: "If det(A) = 0, then matrix A is:",
    options: ["Singular", "Invertible", "Identity", "Symmetric"],
    answer: "Singular"
  },
  {
    question: "Which of the following is symmetric?",
    options: ["[[2,1],[1,2]]", "[[1,2],[3,4]]", "[[0,1],[1,1]]", "[[2,0],[1,3]]"],
    answer: "[[2,1],[1,2]]"
  },
  {
    question: "The rank of matrix [[1, 2], [2, 4]] is:",
    options: ["1", "2", "0", "Undefined"],
    answer: "1"
  }
];
