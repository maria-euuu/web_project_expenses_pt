let budgetValue = 0;

let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (expenseEntrie of expenseEntries) {
  totalExpensesValue = totalExpensesValue + expenseEntrie[1];
}

function calculateAverageExpense() {
  if (expenseEntries === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance < 0) {
    balanceColor = "red";
  } else if (
    (calculateBalance < 0 && calculateBalance > calculateBalance * 0, 25)
  ) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// função que calcula a soma das despesas de uma categoria de gastos
function calculateCategoryExpenses(category) {
  // soma de uma categoria específica
  let categorySum = 0;
  // loop que passa por todas as categorias
  for (expenseEntrie of expenseEntries) {
    // criando a variável do valor da categoria
    let categoryValue = expenseEntrie[1];
    // criando a variável da categoria específica
    let currentCategory = expenseEntrie[0];
    // escolher se vou somar essa categoria ou não
    if (currentCategory === category) {
      categorySum += categoryValue;
    }
  }
  // retorna o valor para fora da função
  return categorySum;
}

// array do total de cada categoria

let categoriesTotals = [
  ["groceries", calculateCategoryExpenses("groceries")],
  ["restaurants", calculateCategoryExpenses("restaurants")],
  ["transport", calculateCategoryExpenses("transport")],
  ["home", calculateCategoryExpenses("home")],
  ["subscriptions", calculateCategoryExpenses("subscriptions")],
];

// função para achar a maior categoria
function calculateLargestCategory() {
  // declarando a variável da categoria atual
  let largestCategory = categoriesTotals[0];

  // loop que passa por todas das categorias e seus valores
  for (categoryTotal of categoriesTotals) {
    //verifica se o total da categoria atual é maior que o da categoria analisada
    if (categoryTotal[1] > largestCategory[1]) {
      // substituindo pelo maior valor se ele for maior
      largestCategory = categoryTotal;
    }
  }
  return largestCategory[0];
}

function updateCategoriesTotals() {
  categoriesTotals = [
    ["groceries", calculateCategoryExpenses("groceries")],
    ["restaurants", calculateCategoryExpenses("restaurants")],
    ["transport", calculateCategoryExpenses("transport")],
    ["home", calculateCategoryExpenses("home")],
    ["subscriptions", calculateCategoryExpenses("subscriptions")],
  ];
}

function addExpenseEntry(values) {
  totalExpensesValue += values[1];
  expenseEntries.push(values);
}
